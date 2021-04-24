import Head from "next/head";
import React from "react";
import GlobalStyle from "../src/globalStyles";
import NavBar from "../src/components/navbar/navbar.jsx";
import Form from "../src/components/form/form.jsx";

function Home() {
  return (
    <html>
      <Head>
        <title>Genshin DMG</title>
        <link rel="icon" href="../public/favicon.ico" />
      </Head>
      <body>
        <GlobalStyle />
        <NavBar />
        <Form />
      </body>
    </html>
  );
}

export default Home;
