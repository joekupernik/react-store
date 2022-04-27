
import React, { useEffect, useState } from "react";
import Card from 'react-bootstrap/Card';
import Button from 'react-bootstrap/Button';
//import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';



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
        <main>
          <h1 style={{ padding: '.5rem', margin: '.5rem' }}>Welcome to my ecommerce store!</h1>
          <h2 style={{ padding: '.5rem', margin: '.5rem' }}>Products</h2>
          <hr
            style={{
              color: "black",
              height: 3
            }}
          />
          <div className="container">
            <Row>
             {fake.map((values) => {
              return (
                <>
                <Col sm={6} md={4} className='mt-3'>
                    <Card style={{ width: '18rem', padding: '.5rem', margin: '.5rem', height: '100%' }}>
                      <Card.Img variant="top" src={values.image} />
                      <Card.Body>
                        <Card.Title>{values.title}</Card.Title>
                        <Card.Text style={{maxheight:' 20rem'}}>
                          {values.description}
                        </Card.Text>
                        <Card.Text>{values.price}</Card.Text>
                        <Button variant="primary">Add to Cart</Button>
                      </Card.Body>
                    </Card>
                  </Col>
                </>
              )
            })}
            </Row>
          </div>
        </main>
      </>
    );
  }
  
  export default ProductCard;
  