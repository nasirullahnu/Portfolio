import React from "react";
import { Link, Outlet } from "react-router-dom";
import Footer from "../../Pages/Footer/Footer";
import Navbar from "../../Shared/Navbar/Navbar";


const Main = () => {
  return (
    <div>
       <Navbar></Navbar>
      <Outlet></Outlet>
      <Footer></Footer>
    </div>
  );
};

export default Main;
