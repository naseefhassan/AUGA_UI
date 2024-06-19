// import React, { createContext, useState, useContext, useEffect } from 'react';
// import { ThemeProvider } from 'styled-components';

// const lightTheme = {
//   background: '#ffffff',
//   color: '#000000'
// };

// const darkTheme = {
//   background: '#000000',
//   color: '#ffffff'
// };

// const ThemeContext = createContext();

// export const useTheme = () => useContext(ThemeContext);

// export const ThemeProviderComponent = ({ children }) => {
//   const [theme, setTheme] = useState(lightTheme);

//   useEffect(() => {
//     const savedTheme = localStorage.getItem('theme');
//     if (savedTheme) {
//       setTheme(savedTheme === 'light' ? lightTheme : darkTheme);
//     }
//   }, []);

//   const toggleTheme = () => {
//     const newTheme = theme === lightTheme ? darkTheme : lightTheme;
//     setTheme(newTheme);
//     localStorage.setItem('theme', newTheme === lightTheme ? 'light' : 'dark');
//     console.log(theme);
//   };

//   return (
//     <ThemeContext.Provider value={{ theme, toggleTheme }}>
//       <ThemeProvider theme={theme}>{children}</ThemeProvider>
//     </ThemeContext.Provider>
//   );
// };
import { createContext, useState } from "react";

const context = createContext();

function UserContext({ children }) {
  const [dark, setDark] = useState(false);
console.log(dark);
  return (
    <>
      <context.Provider value={{ dark, setDark }}>{children}</context.Provider>
    </>
  );
}

export { context, UserContext };
