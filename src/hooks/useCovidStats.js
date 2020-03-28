import { useEffect, useState } from "react";

export default function useCovidStats() {
  const [data, setData] = useState();
  const [loading, setLoading] = useState(true);
  const [success, setSuccess] = useState();

  useEffect(() => {
    const fetchData = async () => {
      const res = await fetch("https://covidapi.info/api/v1/global");
      if (res.ok) {
        const json = await res.json();
        setData(json);
        setSuccess(true);
      } else {
        setSuccess(false);
      }

      setLoading(false);
      // eslint-disable-next-line react-hooks/exhaustive-deps
    };
    fetchData();
  }, []);

  return [loading, success, data];
}
