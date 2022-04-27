
import React, { useEffect, useState } from "react";
import Card from 'react-bootstrap/Card';
import Button from 'react-bootstrap/Button';
import Container from 'react-bootstrap/Container';



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
            {fake.map((values) => {
              return (
                <>
                <Container fluid>
                    <Card style={{ width: '18rem', padding: '.5rem', margin: '.5rem' }}>
                      <Card.Img variant="top" src={values.image} />
                      <Card.Body>
                        <Card.Title>{values.name}</Card.Title>
                        <Card.Text>
                          {values.description}
                        </Card.Text>
                        <Card.Text>{values.price}</Card.Text>
                        <Button variant="primary">Add to Cart</Button>
                      </Card.Body>
                    </Card>
                  </Container>
                </>
              )
            })}
            
          </div>
        </main>
      </>
    );
  }
  
  export default ProductCard;
  