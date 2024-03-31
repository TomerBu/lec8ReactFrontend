import { Outlet } from "react-router-dom";
import Header from "../components/Header";
import Footer from "../components/Footer";
import Navbar from "../components/Navbar";

const Root = () => {
  return (
    <div className="text-blue-700 flex flex-col justify-stretch min-h-screen">
      <Header />
      <Navbar />
      <main className="flex-1">
        {/* תוכן מתחלף - מנוהל על ידי הראוטר */}
        <Outlet />
      </main>
      <Footer />
    </div>
  );
};

export default Root;
