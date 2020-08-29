import React from "react";
import ReactDOM from "react-dom";
import { BrowserRouter, Route, Redirect, Switch } from "react-router-dom";

// styles
// import "assets/css/bootstrap.min.css";
// import "assets/scss/paper-kit.scss?v=1.2.0";
// import "../../assets/demo/demo.css?v=1.2.0";
// pages
import Index from '../src/pages/Index';

// others

ReactDOM.render(
  <BrowserRouter>
    <Index />
  </BrowserRouter>,
  document.getElementById("root")
);
