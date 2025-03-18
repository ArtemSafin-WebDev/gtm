import { useEffect, useState } from "react";
import { RegionData } from "../ApiTypes";

export default function useRegionData(url: string) {
  const [data, setData] = useState<RegionData | null>(null);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState<Error | null>(null);

  useEffect(() => {
    const controller = new AbortController();
    setLoading(true);
    fetch(url, {
      method: "GET",
      signal: controller.signal,
      headers: {
        "Content-Type": "application/json",
      },
    })
      .then((res) => {
        if (!res.ok) {
          const err = new Error("Response is not ok");
          throw err;
        }
        return res.json();
      })
      .then((data) => {
        console.log("Data", data);
        setData(data as RegionData);
      })
      .catch((err) => {
        if (err.name === "AbortError") {
          return;
        }
        console.error(err);
        setError(err);
      })
      .finally(() => {
        setLoading(false);
      });

    return () => {
      controller.abort();
    };
  }, [url]);
  return { data, error, loading };
}
