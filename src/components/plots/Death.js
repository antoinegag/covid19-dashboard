import React from "react";
import Plot from "react-plotly.js";
import makeTimeSerie from "../../utils/makeTimeSerie";
import { defaultLabels } from "./plots";

export default function Death({ data }) {
  return (
    <div>
      <h3>Deaths</h3>
      <p>Click on a country on the right to toggle it on the graph.</p>
      <div className="mb-6">
        <Plot
          style={{ backgroundColor: "#000" }}
          data={data.timeSeries.map(e =>
            makeTimeSerie(
              e.data,
              "deaths",
              e.name,
              undefined,
              defaultLabels.includes(e.name) ? true : "legendonly"
            )
          )}
          layout={{
            autosize: true
          }}
        />
      </div>
    </div>
  );
}
