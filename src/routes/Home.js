import React from "react";
import {Link } from "react-router-dom";
import Header from '../components/Header/Header';

function Home() {
    return (
      <>
      <Header />
        <main>
          <h2>Welcome to the homepage!</h2>
          <p>You can do this, I believe in you.</p>
        </main>
        <nav>
          <Link to="/account">account</Link>
        </nav>
        
      </>
    );
  }

  export default Home;
  