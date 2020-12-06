import React, { Component } from "react";
import { Fragment } from "react";
import NavBar from "../src/components/navbar/navbar.js";
import GlobalStyle from "../src/globalStyles.js";

function Home() {
  return (
    <body>
      <GlobalStyle />
      <NavBar />
    </body>
  );
}

export default Home;
