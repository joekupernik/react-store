import React from "react";
import {Link } from "react-router-dom";
import Button from 'react-bootstrap/Button';



function Account() {
    return (
      <>
        <main>

            <h1>Welcome John</h1>
            
          <hr
            style={{
              color: "black",
              height: 3
            }}
          />
          <h2>Your Information</h2>
          <p>name</p>
          <p>name</p>
          <p>name</p>
          <p>name</p>
          <Link to="/orders">
                    <Button variant="primary">View</Button>
                    </Link>
     
        </main>
      </>
    );
  }

  export default Account;