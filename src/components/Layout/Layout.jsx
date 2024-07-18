import React, { useContext, useEffect } from "react";
import Navbar from "../Navbar/Navbar.jsx";
import Footer from "../Footer/Footer.jsx";
import { Outlet } from "react-router-dom";
import { UserContext } from "../Context/UserContext.js";
import { Helmet } from "react-helmet";

export default function Layout() {
  let { setUserToken } = useContext(UserContext);

  useEffect(() => {
    if (localStorage.getItem("userToken") !== null) {
      setUserToken(localStorage.getItem("userToken"));
    }
  }, []);

  return (
    <>
      <Navbar />

      <Outlet></Outlet>

      <Footer />
    </>
  );
}
