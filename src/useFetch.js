import { useEffect, useState } from "react";

const useFetch = (url) => {
  const [data, setData] = useState(null);
  const [isPending, setisPending] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    const abortCont = new AbortController();

    setTimeout(() => {
      fetch(url, { signal: abortCont.signal })
        .then((res) => {
          if (!res.ok) {
            throw Error(
              "OOps :( Could not fetch the data... Something went wrong.."
            );
          }
          return res.json();
        })
        .then((data) => {
          setData(data);
          setisPending(false);
          setError(null);
        })
        .catch((error) => {
          if (error.name === "AbortError") {
            console.log("fetch aborted");
          } else {
            setisPending(false);
            setError(error.message);
          }
        });
    }, 1000);
    return () => abortCont.abort();
  }, []);
  return { data, isPending, error };
};

export default useFetch;
