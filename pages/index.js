import React, { Component } from "react";
import { Fragment } from "react";
import GlobalStyle from "../src/globalStyles";
import NavBar from "../src/components/navbar/navbar.jsx";
import Form from "../src/components/form/form.jsx";

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
