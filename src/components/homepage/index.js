import React from "react";
import Header from "../homepage/header.js";
import Section2 from "../homepage/section2.js";
import Section3 from "../homepage/section3.js";
import Section4 from "../homepage/section4.js";
import "../../../src/App.css"; // Import global styles


export default function HomePage() {
  return (
    <div>
      {/* 3D Background */}
      <div className="background-3d">
        <div className="parallax-layer"></div>
      </div>

      {/* Page Content */}
      <Header />
      <Section2 />
      <Section3 />
      <Section4 />
    </div>
  );
}