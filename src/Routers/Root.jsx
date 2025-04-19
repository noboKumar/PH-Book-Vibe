import React from "react";
import NavBar from "../Components/NavBar";
import { Outlet } from "react-router";

const Root = () => {
  return (
    <div className="playfair-font">
      <NavBar></NavBar>
      <Outlet></Outlet>
    </div>
  );
};

export default Root;
