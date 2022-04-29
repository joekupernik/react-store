import React, { useEffect, useState } from "react";
import Card from 'react-bootstrap/Card';
import Button from 'react-bootstrap/Button';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import { Link } from 'react-router-dom';



function ProductCard() {

    const [fake, setFake] = useState([]);
    const fakeData = async () => {
      const response = await fetch(
        'https://fakestoreapi.com/products'
      );
      const data = await response.json();
      setFake(data);
    };
  
    useEffect(() => {
      fakeData()
    }, []);
  
  
  
    return (
      <>
          <div className="container">
            <Row>
             {fake.map((values) => {
              return (
                <>
                <Col sm={6} md={4} className='mt-3'>
                    <Card style={{ width: '18rem', padding: '.5rem', margin: '.5rem', height: '30rem', overflow: 'hidden', boxshadow: 'lightblue' }}>
                      <Card.Img variant="top" src={values.image} style={{height: '10rem', width: 'auto'}}/>
                      <Card.Body>
                        <Card.Title>{values.title}</Card.Title>
                        <Card.Text>{values.price}</Card.Text>
                        <Link to="/productdetails">
                        <Button variant="primary">View</Button>
                        </Link>
                        <Card.Text >
                          {values.description}
                        </Card.Text>
                        
                      </Card.Body>
                    </Card>
                  </Col>
                </>
              )
            })}
            </Row>
          </div>
     
      </>
    );
  }
  
  export default ProductCard;
  