import { createContext } from "react";
import { FCC } from "../@types/types";

// מבנה של הקונטקסט: משתנים ופונקציות
export const ThemeContext = createContext({
  theme: "light",
  toggle: () => {
    //if light -> dark else light
  },
});

/*
export const ThemeProvider: FCC = (props) => {
  return (
    <ThemeContext.Provider value={{}}>{props.children}</ThemeContext.Provider>
  );
};
*/
