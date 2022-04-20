import React from "react";
import {Link } from "react-router-dom";
import Header from '../components/Header/Header';

function Account() {
    return (
      <>
        <main>
          <Header />
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