import { useContext } from "react";
import { ThemeContext } from "../contexts/ThemeContext";

const Header = () => {
  // App Wide state
  const { toggle } = useContext(ThemeContext);

  return (
    <header className="dark:bg-slate-700 bg-orange-300">
      Header
      <button onClick={() => toggle()}>Click Me</button>
    </header>
  );
};

export default Header;

//TODO:  Variables
