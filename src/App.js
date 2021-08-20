import React from "react";
import Rooms from "./pages/Rooms";
import Error from "./pages/Error";
import SingleRoom from "./pages/SingleRoom";
import Home from "./pages/Home";
import "./App.css";

import { Route, Switch } from "react-router-dom";
import Navbar from "./Components/Navbar";

export default function App() {
  return (
    <>
      <Route path="/" component={Navbar} />
      <Switch>
        <Route exact path="/" component={Home} />
        <Route exact path="/rooms" component={Rooms} />
        <Route exact path="/rooms/:slug" component={SingleRoom} />
        <Route component={Error} />
      </Switch>
    </>
  );
}
