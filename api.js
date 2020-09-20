export function fetchSeriesData() {
  let seriesPromise = fetchSeries();
  return {
    series: wrapPromise(seriesPromise),
  };
}

function wrapPromise(promise) {
  let status = "pending";
  let result;
  let suspender = promise.then(
    (r) => {
      status = "success";
      result = r;
    },
    (e) => {
      status = "error";
      result = e;
    }
  );
  return {
    read() {
      if (status === "pending") {
        throw suspender;
      } else if (status === "error") {
        throw result;
      } else if (status === "success") {
        return result;
      }
    },
  };
}

function fetchSeries() {
  console.log("fetching....");
  const url =
    "http://www.omdbapi.com/?apikey=d1927cda&s=dark&&type=series&page=1&y=2014";

  return fetch(url).then((res) => res.json());
}
