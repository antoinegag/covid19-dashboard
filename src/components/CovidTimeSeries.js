import React, { useState } from "react";
import Plot from "react-plotly.js";
import classnames from "classnames";

function makeTimeSerie(
  data,
  field,
  name,
  color,
  type = "scatter",
  mode = "lines+markers"
) {
  return {
    x: data.map(t => t.date),
    y: data.map(t => t[field]),
    type: "log",
    mode: "lines+markers",
    marker: { color },
    name: name || field
  };
}

export default function CovidTimeSeries({ data }) {
  const [scale, setConfirmedScale] = useState("log");

  const renderConfirmed = () => (
    <div>
      <h3>Confirmed cases: {data[data.length - 1].confirmed}</h3>
      <div className="mb-6">
        <Plot
          style={{ backgroundColor: "#000" }}
          data={[makeTimeSerie(data, "confirmed", "Confirmed")]}
          layout={{
            autosize: true,
            yaxis: {
              type: scale
            }
          }}
        />
      </div>
      <div>
        <button
          className={classnames("mr-2", { "bg-blue-700": scale === "log" })}
          onClick={() => setConfirmedScale("log")}
        >
          Log
        </button>
        <button
          className={classnames({ "bg-blue-700": scale === "linear" })}
          onClick={() => setConfirmedScale("linear")}
        >
          Linear
        </button>
      </div>
    </div>
  );

  return <div>{renderConfirmed()}</div>;
}
