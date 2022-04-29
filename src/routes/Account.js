import React from "react";
import {Link } from "react-router-dom";
//import Col from 'Col';
//import Row from 'Row';
//import Card from 'react-bootstrap/Card';
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
          <Link to="OrderDetails">
                    <Button variant="primary">View</Button>
                    </Link>
     
        </main>
      </>
    );
  }

  export default Account;