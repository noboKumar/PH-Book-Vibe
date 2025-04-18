import React from "react";
import NavBar from "../Components/NavBar";
import Hero from "../Components/Hero";
import Books from "../Components/Books";

const Root = () => {
  return (
    <div className="playfair-font">
      <NavBar></NavBar>
      <Hero></Hero>
      <Books></Books>
    </div>
  );
};

export default Root;
