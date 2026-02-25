import { StrictMode, useEffect } from "react";
import { createRoot } from "react-dom/client";
import "./index.css";
import App from "./App.jsx";
import { createBrowserRouter } from "react-router";
import { RouterProvider } from "react-router/dom";
import Root from "./layout/Root.jsx";
import Home from "./pages/Home.jsx";
import Services from "./pages/Services.jsx";
import Careers from "./pages/Careers.jsx";
import Process from "./pages/Process.jsx";
import Error404 from "./pages/Error404.jsx";
import About from "./pages/About.jsx";
import Contact from "./pages/Contact.jsx";
import AOS from "aos";
import "aos/dist/aos.css";
import "react-toastify/dist/ReactToastify.css";
import PrivacyPolicy from "./pages/PrivacyPolicy.jsx";
import MessagingPolicy from "./pages/MessagingPolicy.jsx";

const router = createBrowserRouter([
  {
    path: "/",
    element: <Root></Root>,
    children: [
      {
        path: "/",
        element: <Home></Home>,
        index: true,
        errorElement: <Error404></Error404>,
      },
      {
        path: "/services",
        element: <Services></Services>,
        errorElement: <Error404></Error404>,
      },
      {
        path: "/about",
        element: <About></About>,
        errorElement: <Error404></Error404>,
      },
      {
        path: "/careers",
        element: <Careers></Careers>,
        errorElement: <Error404></Error404>,
      },
      {
        path: "/process",
        element: <Process></Process>,
        errorElement: <Error404></Error404>,
      },
      {
        path: "/contact",
        element: <Contact></Contact>,
        errorElement: <Error404></Error404>,
      },
      {
        path: "/privacy-policy",
        element: <PrivacyPolicy></PrivacyPolicy>,
        errorElement: <Error404></Error404>,
      },
      {
        path: "/messaging-policy",
        element: <MessagingPolicy></MessagingPolicy>,
        errorElement: <Error404></Error404>,
      },
    ],
  },
]);
const AOSProvider = ({ children }) => {
  useEffect(() => {
    AOS.init({
      duration: 700,
      easing: "ease-out-cubic",
      once: true, // animate only once
      offset: 120,
    });
  }, []);

  return children;
};

createRoot(document.getElementById("root")).render(
  <StrictMode>
    <AOSProvider>
      <RouterProvider router={router} />
    </AOSProvider>
  </StrictMode>,
);
