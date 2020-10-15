import React from "react";

import { Switch, Route, Redirect } from "react-router-dom";

import Home from "./containers/home/Home";
import Projects from "./containers/projects/Projects";
import Skills from "./containers/skills/Skills";
import Reviews from "./containers/client-reviews/ClientReviews";
import Contact from "./containers/contact/Contact";
import Page404 from "./components/404/Page404";
import Aux from "./components/hoc/Aux";

import { ThemeProvider } from "styled-components";
import { GlobalStyles } from "./components/darkMode/globalStyles";
import { lightTheme, darkTheme } from "./components/darkMode/theme";
import { useDarkMode } from "./components/darkMode/useDarkMode";

const App = () => {
  const [theme, themeToggler] = useDarkMode();
  const themeMode = theme === "light" ? lightTheme : darkTheme;

  return (
    <ThemeProvider theme={themeMode}>
      <Aux>
        <GlobalStyles />
        <Switch>
          <Route path="/" exact>
            <Home theme={theme} themeToggler={themeToggler} />
          </Route>
          <Route path="/projects" exact>
            <Projects theme={theme} themeToggler={themeToggler} />
          </Route>
          <Route path="/skills" exact>
            <Skills theme={theme} themeToggler={themeToggler} />
          </Route>
          <Route path="/reviews" exact>
            <Reviews theme={theme} themeToggler={themeToggler} />
          </Route>
          <Route path="/contact" exact>
            <Contact theme={theme} themeToggler={themeToggler} />
          </Route>
          <Route path="/page-not-found">
            <Page404 />
          </Route>
          <Redirect to="/page-not-found" />
        </Switch>
      </Aux>
    </ThemeProvider>
  );
};

export default App;
