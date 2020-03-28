import React from "react";
import classnames from "classnames";
export default function ChangeIndicator({
  count,
  change,
  lessIsBetter = false
}) {
  return (
    <div>
      <div>
        <span
          className={classnames("font-semibold", {
            "text-red-600": !lessIsBetter ? change > 0 : change < 0,
            "text-green-600": !lessIsBetter ? change <= 0 : change >= 0
          })}
        >
          {change > 0 && "+"} {change} %
        </span>{" "}
        (24h)
      </div>
      <div>
        {count > 0 && "+ "}
        {count.toLocaleString()}
      </div>
    </div>
  );
}
