import { createContext, useState, useEffect } from "react";

const context = createContext();

function UserContext({ children }) {
  const [dark, setDark] = useState(() => {
    const savedTheme = localStorage.getItem("theme");
    return savedTheme ? savedTheme === "dark" : false;
  });

  useEffect(() => {
    const savedTheme = localStorage.getItem("theme");
    if (savedTheme) {
      setDark(savedTheme === "dark");
    }
  }, []);

  useEffect(() => {
    localStorage.setItem("theme", dark ? "dark" : "light");
  }, [dark]);

  return (
    <context.Provider value={{ dark, setDark }}>
      {children}
    </context.Provider>
  );
}

export { context, UserContext };
