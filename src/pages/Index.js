import React from "react";
import IndexHeader from "components/Headers/IndexHeader.js";
import NavigationBar from "components/Navbars/NavigationBar.js";
// index sections

import Portfolio from "../pages/index-sections/portfolio";
import About from "../pages/index-sections/about";
import Contact from "../pages/index-sections/contact";
import "../assets/css/bootstrap.min.css";
import "../assets/scss/paper-kit.scss?v=1.2.0";
import "../assets/demo/demo.css?v=1.2.0";
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
      <NavigationBar />
      <IndexHeader />
      <div className="main">
        <About />
        <Portfolio />
        <Contact />
      </div>
    </>
  );
}

export default Index;
