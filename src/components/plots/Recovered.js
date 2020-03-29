import React, { useState } from "react";
import Plot from "react-plotly.js";
import classnames from "classnames";
import makeTimeSerie from "../../utils/makeTimeSerie";
import { defaultCountries } from "./plots";

export default function Recovered({ data }) {
  const [scale, setConfirmedScale] = useState("linear");
  return (
    <div>
      <h3>Recovered</h3>
      <p>Click on a country on the right to toggle it on the graph.</p>
      <div className="mb-6">
        <Plot
          style={{ backgroundColor: "#000" }}
          data={data.timeSeries.map(e =>
            makeTimeSerie(
              e.data,
              "recovered",
              e.name,
              undefined,
              defaultCountries.includes(e.name) ? true : "legendonly"
            )
          )}
          layout={{
            autosize: true,
            yaxis: {
              type: scale
            }
          }}
        />
      </div>
      <div>
        <p>
          Log scale allow you to easily see the growth rate of recovered cases
          while Linear simply shows the total recovered cases over time.
        </p>
        <button
          className={classnames("mr-2", {
            "bg-blue-900 border-2 border-gray-600": scale === "log"
          })}
          onClick={() => setConfirmedScale("log")}
        >
          Log
        </button>
        <button
          className={classnames({
            "bg-blue-900 border-2 border-gray-600": scale === "linear"
          })}
          onClick={() => setConfirmedScale("linear")}
        >
          Linear
        </button>
      </div>
    </div>
  );
}
