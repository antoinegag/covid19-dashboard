import React from "react";
import ConfirmedCases from "./plots/ConfirmedCases";
import useCovid19TimeSeries from "../hooks/useCovid19TimeSeries";
import Death from "./plots/Death";
import Recovered from "./plots/Recovered";

export default function CovidTimeSeries() {
  const [loading, success, timeSeries] = useCovid19TimeSeries();

  return (
    <div>
      <h2 className="text-center">Evolution</h2>
      {success ? (
        <div>
          <ConfirmedCases data={timeSeries} />
          <hr />
          <Death data={timeSeries} />
          <hr />
          <Recovered data={timeSeries} />
        </div>
      ) : (
        <div>Loading</div>
      )}
    </div>
  );
}
