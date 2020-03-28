import { useEffect, useState } from "react";

function computePercentChange(from, to, precision = 2) {
  return (((to - from) / to) * 100.0).toFixed(precision);
}

export default function useGlobalCovidStats(date) {
  const [data, setData] = useState();
  const [loading, setLoading] = useState(true);
  const [success, setSuccess] = useState();

  useEffect(() => {
    const fetchData = async () => {
      const res = await fetch(
        `https://covidapi.info/api/v1/global${date ? `/${date}` : ""}`
      );
      if (res.ok) {
        const today = await res.json();

        const date = new Date(today.date);
        const dayBefore = new Date(date - 1);

        // Fetch data from the day before
        const resBefore = await fetch(
          `https://covidapi.info/api/v1/global/${dayBefore.toISOString()}`
        );

        if (resBefore.ok) {
          const dayBeforeData = await resBefore.json();

          const t = today.result;
          const y = dayBeforeData.result;

          setData({
            date: today.date,
            today: {
              ...today.result
            },
            dayChange: {
              confirmed: {
                count: t.confirmed - y.confirmed,
                change: computePercentChange(y.confirmed, t.confirmed)
              },
              deaths: {
                count: t.deaths - y.deaths,
                change: computePercentChange(y.deaths, t.deaths)
              },
              recovered: {
                count: t.recovered - y.recovered,
                change: computePercentChange(y.recovered, t.recovered)
              }
            }
          });

          setSuccess(true);
        }
      } else {
        setSuccess(false);
      }

      setLoading(false);
      // eslint-disable-next-line react-hooks/exhaustive-deps
    };
    fetchData();
  }, [date]);

  return [loading, success, data];
}
