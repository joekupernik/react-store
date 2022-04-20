import React from "react";
import {Link } from "react-router-dom";

function Account() {
    return (
      <>
        <main>
          <h2>Who are we?</h2>
          <p>
            That feels like an existential question, don't you
            think?
          </p>
        </main>
        <nav>
          <Link to="/">Home</Link>
          <Link to="/cart">cart</Link>
        </nav>
      </>
    );
  }

  export default Account;