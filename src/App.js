import React from "react";

import { Switch, Route } from "react-router-dom";

import Home from "./containers/home/Home";
import Projects from "./containers/projects/Projects";
import Skills from "./containers/skills/Skills";
import Reviews from "./containers/client-reviews/ClientReviews";
import Page404 from "./components/404/Page404";

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
        <Route component={Page404} />
      </Switch>
    </div>
  );
};

export default App;
