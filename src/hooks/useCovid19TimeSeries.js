import { useEffect, useState, useCallback } from "react";

function transform(json, countries) {
  let keys = Object.keys(json);
  if (countries) {
    keys = keys.filter(key => countries.includes(key));
  }

  const countryCount = keys.length;

  const firstEntry = json[keys[0]];
  const lastUpdate = firstEntry[firstEntry.length - 1].date;

  const timeSeries = keys.map(country => ({
    name: country,
    data: json[country]
  }));

  return {
    count: countryCount,
    countries: keys,
    lastUpdate,
    timeSeries
  };
}

export default function useCovid19TimeSeries(countries) {
  const [timeSeries, setTimeSeries] = useState();
  const [loading, setLoading] = useState(true);
  const [success, setSuccess] = useState();

  const fetchData = useCallback(async () => {
    const res = await fetch("https://pomber.github.io/covid19/timeseries.json");
    if (res.ok) {
      const json = await res.json();
      setTimeSeries(transform(json, countries));
      setSuccess(true);
    } else {
      setSuccess(false);
    }

    setLoading(false);
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [JSON.stringify(countries)]);

  useEffect(() => {
    fetchData();
  }, [fetchData]);

  return [loading, success, timeSeries];
}
