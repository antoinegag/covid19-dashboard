import React from "react";

import useGlobalCovidStats from "../hooks/useGlobalCovidStats";
import Numbers from "./global/Numbers";
import { PulseLoader } from "react-spinners";

export default function Global() {
  const [loading, success, data] = useGlobalCovidStats();

  return (
    <div>
      <h2 className="text-center">Summary</h2>
      {success ? (
        <div>
          <Numbers date={data.date} data={data} />
        </div>
      ) : (
        <div className="text-center my-16">
          <PulseLoader color="#4299e1" />
        </div>
      )}
    </div>
  );
}
