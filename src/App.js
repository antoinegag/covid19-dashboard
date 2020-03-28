import React from "react";
import CovidTimeSeries from "./components/CovidTimeSeries";
import "./styles/styles.css";
import MobileWarning from "./components/MobileWarning";
import Disclaimer from "./components/Disclaimer";
import Global from "./components/Global";

function App() {
  return (
    <div className="App py-8 px-8">
      <div className="flex">
        <div className="w-full mb-6">
          <h1 className="text-center">State of the world on Covid-19</h1>
          <Disclaimer closable />
          <MobileWarning />
          <div>
            <div className="md:w-1/2 md:mx-auto mb-6">
              <Global />
            </div>
            <div className="hidden md:block">
              <CovidTimeSeries />
            </div>
          </div>
        </div>
      </div>
      <div>
        <Disclaimer />
      </div>
    </div>
  );
}

export default App;
