import React, { Component } from "react";
import { Fragment } from "react";
import Form from "../src/components/form/form.js";
import NavBar from "../src/components/navbar/navbar.js";
import GlobalStyle from "../src/globalStyles.js";

function Home() {
  return (
    <body>
      <GlobalStyle />
      <NavBar />
      <Form />
    </body>
  );
}

export default Home;
