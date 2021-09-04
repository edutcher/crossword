import "./App.css";
import React, { useState, useEffect } from "react";
import { ThemeProvider } from "@material-ui/core";
import { BrowserRouter, Route, Switch } from "react-router-dom";
import HomePage from "./pages/HomePage";
import GamePage from "./pages/GamePage";
import CreatePuzzle from "./pages/CreatePuzzle";
import UseLocalStorage from "./hooks/useLocalStorage";
import { lightTheme, darkTheme } from "./themes/themes";

function App() {
  const [darkMode, setDarkMode] = useState(false);
  const [mode, setMode] = UseLocalStorage("mode", "light");

  const handleThemeChange = (e) => {
    setDarkMode(!darkMode);
    if (mode === "light") setMode("dark");
    else setMode("light");
  };

  useEffect(() => {
    if (mode === "dark") setDarkMode(true);
  }, [mode]);

  return (
    <ThemeProvider theme={darkMode ? darkTheme() : lightTheme()}>
      <BrowserRouter>
        <Switch>
          <Route exact path="/game" component={GamePage} />
          <Route exact path="/create" component={CreatePuzzle} />
          <Route exact path="/" component={HomePage} />
        </Switch>
      </BrowserRouter>
    </ThemeProvider>
  );
}

export default App;
