import React from "react";
import { ThemeContext } from "../contexts/ThemeContext";

const Navbar = () => {
  return (
    <ThemeContext.Consumer>
      {(themeContext) => {
        const theme = themeContext.isLightTheme
          ? themeContext.light
          : themeContext.dark;

        return (
          <nav style={{ background: theme.ui, color: theme.syntax }}>
            <h1>Context App</h1>
            <ul>
              <li>Home</li>
              <li>About</li>
              <li>Contact</li>
            </ul>
          </nav>
        );
      }}
    </ThemeContext.Consumer>
  );
};

export default Navbar;
