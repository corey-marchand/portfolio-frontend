import React from "react";
import IndexHeader from "components/Headers/IndexHeader.js";
import NavigationBar from "components/Navbars/NavigationBar.js";

import Portfolio from "../pages/index-sections/portfolio";
import About from "../pages/index-sections/about";
import Contact from "../pages/index-sections/contact";

function Index() {
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
