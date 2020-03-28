import React from "react";
import CovidTimeSeries from "./components/CovidTimeSeries";
import "./styles/styles.css";
import MobileWarning from "./components/MobileWarning";
import Disclaimer from "./components/Disclaimer";

function App() {
  return (
    <div className="App py-8 px-8">
      <div className="flex">
        <div className="w-full">
          <h2>State of the world on Covid-19</h2>
          <Disclaimer />
          <MobileWarning />
          <div>
            <div className="text-xl">
              {/* Last update: <b>{data.lastUpdate}</b> */}
            </div>
            <div className="invisible md:visible">
              <CovidTimeSeries />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default App;
