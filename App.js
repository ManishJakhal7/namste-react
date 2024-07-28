import React from "react";
import ReactDom from "react-dom/client";
//import App from "App.js";

 const heading = React.createElement("h1",{},"Namaste React");
   const jsxHeading = (<h1>Namaste JSX</h1>)
 const root = ReactDom.createRoot(document.getElementById('root'));
 root.render(jsxHeading);
 console.log(heading);
