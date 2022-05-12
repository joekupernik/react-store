import React from "react";
import LoginForm from "../components/LoginForm/LoginForm";
import Card from 'react-bootstrap/Card';
import { Link } from 'react-router-dom';







function Login() {
  return (
    <>
       <h1 style={{padding: '2%', margin: '2%'}}>Join Us!</h1>
       <hr
            style={{
              color: "black",
              height: 3
            }}
          />
        <div style={{margin: '10%'}}>
        <Card>
          <Card.Header>
          Log In
          </Card.Header>
          <Card.Body  style={{ margin: 'auto' }}>
            <LoginForm />
            <div style={{margin: '2%'}}>
        <div><Link to='/Register'>Forgot Password</Link></div>
        <div><Link to='/Register'>Forgot Username</Link></div>
        <div><Link to='/Register'>
        Create Account
        </Link></div>
        </div>
          </Card.Body>
        </Card>
        
        </div>
    </>
  );
}

export default Login;