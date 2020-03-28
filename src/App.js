import React from "react";
import useCovid19TimeSeries from "./hooks/useCovid19TimeSeries";
import CovidTimeSeries from "./components/CovidTimeSeries";
import "./styles/styles.css";

function App() {
  const [loading, success, data] = useCovid19TimeSeries(["Canada"]);
  return (
    <div className="App py-8 px-8">
      <div className="flex">
        <div className="w-full">
          <h1>
            Covid-19 in Canada{" "}
            <span role="img" aria-label="Canada flag">
              🇨🇦
            </span>
          </h1>
          {loading ? (
            <div>Loading...</div>
          ) : (
            <div>
              <div className="text-xl">
                As of <b>{data.lastUpdate}</b>
              </div>
              <div>
                <CovidTimeSeries data={data.timeSeries[0].data} />
              </div>
              {/* <pre>{JSON.stringify(data, null, 2)}</pre> */}
            </div>
          )}
        </div>
      </div>
    </div>
  );
}

export default App;
