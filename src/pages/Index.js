import React from "react";
import IndexHeader from "components/Headers/IndexHeader.js";
import NavigationBar from "components/Navbars/NavigationBar.js";
// index sections

import Portfolio from "../pages/index-sections/portfolio";
import About from "../pages/index-sections/about";
import Contact from "../pages/index-sections/contact";
import { Element } from 'react-scroll';

function Index() {
  // document.documentElement.classList.remove("nav-open");
  // React.useEffect(() => {
  //   document.body.classList.add("index");
  //   return function cleanup() {
  //     document.body.classList.remove("index");
  //   };
  // });
  return (
    <>
      <NavigationBar id="main"/>
      <IndexHeader />
      <div className="main">
        <About id="about"/>
        <Portfolio id="portfolio"/>
        <Contact id="contact"/>
      </div>
    </>
  );
}

export default Index;
