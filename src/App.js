import React from "react";
// import logo from "./logo.svg";
import Home from "./Components/Home";
// you have to import all components
import { BrowserRouter, Route, Switch } from "react-router-dom";
import "./App.css";

function App() {
  return (
    <BrowserRouter>
      <Switch>
        <Route exact path="/" component={Home} />
        {/* added a home route */}

        {/* <Route exact path="/" adds a route in the website
        while component={} what you want to display inside of that
        page*/}
      </Switch>
    </BrowserRouter>
  );
}

export default App;
