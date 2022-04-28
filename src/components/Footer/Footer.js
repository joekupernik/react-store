import React from "react";

import { Link } from "react-router-dom";
//import Container from 'react-bootstrap/Container';
//import Navbar from 'react-bootstrap/Navbar';
import Button from "react-bootstrap/Button";
//import Badge from 'react-bootstrap/Badge';



function Footer() {

    return (
        <>
            <footer class="d-flex flex-wrap justify-content-between align-items-center py-3 my-4 border-top">
                <div class="col-md-4 d-flex align-items-center">
                <Link to="/"><Button variant="secondary">Home</Button></Link>
                    
                </div>
                <div className="text-center">
                  <span class="text-muted">© 2021 Company, Inc</span>
                </div>
            </footer>
        </>
    );
}

export default Footer;
