import React from "react";
import Navbar from "../components/Navbar";
import { Outlet } from "react-router";
import Footer from "../components/Footer";
import { ToastContainer } from "react-toastify";

const Root = () => {
  return (
    <>
      <Navbar></Navbar>
      <Outlet></Outlet>
      <Footer></Footer>

      <ToastContainer position="top-right" autoClose={3000} theme="light" />
    </>
  );
};
export default Root;
