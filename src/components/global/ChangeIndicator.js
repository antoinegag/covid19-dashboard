import React from "react";
import classnames from "classnames";
export default function ChangeIndicator({ count, change }) {
  return (
    <div>
      <div>
        <span
          className={classnames("font-semibold", {
            "text-red-600": change > 0,
            "text-green-500": change <= 0
          })}
        >
          {change > 0 && "+"} {change} %
        </span>{" "}
        (24h)
      </div>
      <div>
        {count > 0 && "+ "}
        {String(count)}
      </div>
    </div>
  );
}
