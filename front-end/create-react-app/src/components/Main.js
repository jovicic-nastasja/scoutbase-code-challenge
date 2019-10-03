import React from "react";
import { Switch, Route } from "react-router-dom";
import Home from "./Home";
import Countries from "./Countries";
import Country from "./Country";
// import Continents from './Continents';

const Main = () => (
  <main>
    <Switch>
      <Route exact path="/" component={Home} />
      <Route exact path="/countries" component={Countries} />
      <Route path="/countries/:code" component={Country} />
      {/* <Route exact path='/continents' component={Continents}/> */}
    </Switch>
  </main>
);

export default Main;
