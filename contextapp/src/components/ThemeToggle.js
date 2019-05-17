import React, { useContext } from 'react';
import { ThemeContext } from '../contexts/ThemeContext';

const ThemeToggle = () => {
  const { toggleTheme } = useContext(ThemeContext);
  return ( <button onClick={toggleTheme}>Toggle the theme</button>);
};
 
export default ThemeToggle;