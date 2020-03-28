import React from "react";
import { faExclamationCircle } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

export default function MobileWarning() {
  return (
    <div className="block md:hidden bg-orange-200 rounded-lg p-4">
      <FontAwesomeIcon
        icon={faExclamationCircle}
        className="text-orange-500 mr-2"
      />
      Screen too small to show graphs
    </div>
  );
}
