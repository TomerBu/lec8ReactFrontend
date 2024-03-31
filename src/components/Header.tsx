import { useContext } from "react";
import { ThemeContext } from "../contexts/ThemeContext";

const Header = () => {
  // App Wide state
  const { toggle } = useContext(ThemeContext);

  return (
    <header className="dark:bg-primary-dark bg-primary">
      Header
      <button onClick={() => toggle()}>Click Me</button>
    </header>
);
};

export default Header;

//TODO:  Variables
