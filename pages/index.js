import { useState } from "react";
import "bootstrap/dist/css/bootstrap.min.css";

function Home() {
  return (
    <body>
      <nav class="navbar">
        <button
          class="navbar-toggler"
          type="button"
          aria-label="Toggle navigation"
        >
          <span class="navbar-toggler-icon"></span>
        </button>
        <div class="navbar-nav-scroll">
          <ul class="navbar-nav bd-navbar-nav flex-row">
            <li clas="nav-item">test</li>
            <li clas="nav-item col-4">teste</li>
            <li clas="nav-item">teste</li>
            <li clas="nav-item">teste</li>
          </ul>
        </div>
      </nav>
      <h1>TESTE!</h1>
    </body>
  );
}

export default Home;
