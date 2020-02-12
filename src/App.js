import React from "react";
import { Switch, Route } from "react-router-dom";
import "./App.css";
import UnderConstruction from "./Pages/UnderConstruction.js";

import { MainCont } from "./Components/Styling/Containers";

function App() {
  return (
    <MainCont>
      <Switch>
        <Route component={UnderConstruction} />
      </Switch>
    </MainCont>
  );
}

export default App;
