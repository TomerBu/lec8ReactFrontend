import React from "react";
import ReactDOM from "react-dom/client";
import "./index.css";
import { RouterProvider, createBrowserRouter } from "react-router-dom";
import About from "./components/About.tsx";
import Cards from "./components/Cards.tsx";
import Root from "./layouts/Root.tsx";

const router = createBrowserRouter([
  {
    path:"/",
    element: <Root/>, 
    children: [
      {
        index: true,
        element: <Cards/>
      }, 
      {
        path: "/about",
        element: <About/>
      }
    ]
  },
]);

ReactDOM.createRoot(document.getElementById("root")!).render(
  <React.StrictMode>
    <RouterProvider router={router} />
  </React.StrictMode>
);
