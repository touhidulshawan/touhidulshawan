import React from "react";

import { Switch, Route } from "react-router-dom";

import Home from "./containers/home/Home";
import Projects from "./containers/projects/Projects";
import Skills from "./containers/skills/Skills";
import Reviews from "./containers/reviews/Reviews";

const App = () => {
  return (
    <div>
      <Switch>
        <Route path="/" exact>
          <Home />
        </Route>
        <Route path="/projects" exact>
          <Projects />
        </Route>
        <Route path="/skills" exact>
          <Skills />
        </Route>
        <Route path="/reviews" exact>
          <Reviews />
        </Route>
      </Switch>
    </div>
  );
};

export default App;
