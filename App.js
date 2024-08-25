import React from "react";
import ReactDom from "react-dom/client";
import Header from "/components/Header";
import Body from "./components/Body";
//import App from "App.js";
// swiggy and zomato clone app
/*
 HEADER
  -LOGO
  -NAVBAR
BODY
  -RESTAURANT CARDS
  -FILTER THAT WILL STICK BY WHEN SCROLL
  -BEST CUISINES
  -POPULAR RESTAURANTS AND TOP RESTAURANT CHAINS NEAR ME
  -BEST STREET FOOD NEAR ME
FOOTER
   -COPYRIGHT
   -COMPANY
   -CONTACT US
   -SOCIAL LINKS
   -ABOUT SECTION
   -HELP
   -CITIES

*/

const AppLayout = () => {
  return (
    <div className="app">
      <Header />
      <Body />
    </div>
  );
};

const root = ReactDom.createRoot(document.getElementById("root"));
root.render(<AppLayout />);
