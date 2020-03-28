import React from "react";
import ConfirmedCases from "./plots/ConfirmedCases";
import useCovid19TimeSeries from "../hooks/useCovid19TimeSeries";
import Death from "./plots/Death";

export default function CovidTimeSeries() {
  const [loading, success, timeSeries] = useCovid19TimeSeries();

  return (
    <div>
      {success ? (
        <div>
          <ConfirmedCases data={timeSeries} />
          <hr />
          <Death data={timeSeries} />
        </div>
      ) : (
        <div>Loading</div>
      )}
    </div>
  );
}
