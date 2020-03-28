import React from "react";
import ReactLiveClock from "react-live-clock";
import { faClock } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

export default function Clock(props) {
  const { ...childProps } = props;
  return (
    <div {...childProps}>
      <FontAwesomeIcon icon={faClock} className="pr-4" />
      <ReactLiveClock />
    </div>
  );
}
