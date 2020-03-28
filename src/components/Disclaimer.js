import React, { useState } from "react";

export default function Disclaimer({ closable }) {
  const [closed, setClosed] = useState(
    localStorage.getItem("disclaimer-closed")
  );

  const close = () => {
    localStorage.setItem("disclaimer-closed", true);
    setClosed(true);
  };

  if (closable && closed) {
    return false;
  }

  return (
    <div className="bg-red-200 rounded-lg p-4 mb-2">
      <h4 className="font-semibold text-xl">Important disclaimer</h4>
      <p className="mb-2">
        Data provided by{" "}
        <a
          className="text-blue-700 underline"
          href="https://github.com/CSSEGISandData/COVID-19"
        >
          Johns Hopkins CSSE
        </a>
      </p>
      <p className="mb-2">
        Although the data found here has been produced and processed from third
        party sources believed to be reliable, no warranty expressed or implied
        is made regarding accuracy, adequacy, completeness, reliability or
        usefulness of any information.
      </p>
      <p className="mb-2 font-bold text-lg">
        In short, this doesn't perfectly reflect reality. Stay safe!
      </p>
      {closable && <button onClick={close}>Close</button>}
    </div>
  );
}
