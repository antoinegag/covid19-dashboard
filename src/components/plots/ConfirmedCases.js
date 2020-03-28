import React, { useState } from "react";
import Plot from "react-plotly.js";
import classnames from "classnames";
import makeTimeSerie from "../../utils/makeTimeSerie";
import { defaultLabels } from "./plots";

export default function ConfirmedCases({ data }) {
  const [scale, setConfirmedScale] = useState("linear");
  return (
    <div>
      <h3>Confirmed cases</h3>
      <p>Click on a country on the right to toggle it on the graph.</p>
      <div className="mb-6">
        <Plot
          style={{ backgroundColor: "#000" }}
          data={data.timeSeries.map(e =>
            makeTimeSerie(
              e.data,
              "confirmed",
              e.name,
              undefined,
              defaultLabels.includes(e.name) ? true : "legendonly"
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
          Log scale allow you to easily see the growth rate of confirmed cases
          while Linear simply shows the total cases over time.
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
