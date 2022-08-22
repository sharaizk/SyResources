import React from "react";
import { useRoutes, Navigate } from "react-router-dom";

// Layout:
import Home from "../pages/Home";
import About from "pages/About";
import Services from "pages/Services";
import FAQs from "pages/FAQs";
import Comissions from "pages/Comissions";
import Contact from "pages/Contact";
import Complaints from "pages/Complaints";
export default function Router() {
  return useRoutes([
    {
      path: "/",
      element: <Home />,
    },
    {
      path: "/about",
      element: <About />,
    },
    {
      path: "/services",
      element: <Services />,
    },
    {
      path: "/faqs",
      element: <FAQs />,
    },
    {
      path: "/comissions",
      element: <Comissions />,
    },
    {
      path: "/contact",
      element: <Contact />,
    },
    {
      path: "/complaints-handling-procedure",
      element: <Complaints />,
    },
    {
      path: "/*",
      element: <Navigate to="/" />,
    },
  ]);
}
