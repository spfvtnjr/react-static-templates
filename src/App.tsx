import React from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import GettingStartedOne from "./Components/GettingStarted-1/GettingStarted-1";
import GettingStartedTwo from "./Components/GettingStarted-2/GettingStarted-2";
import Navbar from "./Components/Navbar/Navbar";
import StripeConfigs from "./Components/StripeConfigs/StripeConfigs";

function App() {
  return (
    <Router>
      <div className="upper-division"></div>
      <div className="App">
        <Navbar
          descriptionText={
            " – A full payment solution for your business, free with {company}"
          }
        />
        <Routes>
          <Route
            path="/"
            element={<GettingStartedOne isStripeAccountConnected={true} showPopUp={false}/>}
          />
          <Route path="/step2" element={<GettingStartedTwo />} />
          <Route path="/step3" element={<StripeConfigs />} />
        </Routes>
      </div>
    </Router>
  );
}

export default App;
