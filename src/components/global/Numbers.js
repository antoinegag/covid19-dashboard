import React from "react";
import ChangeIndicator from "./ChangeIndicator";

function Entry({ label, number, change }) {
  return (
    <div className="w-1/3 text-center">
      <div className="font-semibold">{label}</div>
      <div className="font-bold text-xl tracking-widest">
        {number.toLocaleString()}
      </div>
      <div>
        <ChangeIndicator change={change.change} count={change.count} />
      </div>
    </div>
  );
}

export default function Numbers({ date, data }) {
  const { confirmed, deaths, recovered } = data.today;
  console.log(data.dayChange.confirmed);
  return (
    <div>
      <h4 className="text-2xl font-semibold mb-2 text-center">{date}</h4>
      <div className="flex">
        <Entry
          label="Confirmed"
          number={confirmed}
          change={data.dayChange.confirmed}
        />
        <Entry label="Deaths" number={deaths} change={data.dayChange.deaths} />
        <Entry
          label="Recovered"
          number={recovered}
          change={data.dayChange.recovered}
        />
      </div>
    </div>
  );
}
