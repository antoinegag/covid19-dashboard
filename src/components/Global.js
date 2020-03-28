import React from "react";

import useGlobalCovidStats from "../hooks/useGlobalCovidStats";
import Numbers from "./global/Numbers";

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
        <div>Loading</div>
      )}
    </div>
  );
}
