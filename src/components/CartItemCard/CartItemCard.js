import React, {useState, useEffect} from "react";
import Card from "react-bootstrap/Card";
import Button from "react-bootstrap/Button";
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';



function CartItemCard () {
  

  const [fake, setFake] = useState([]);
  const fakeData = async () => {
    const response = await fetch(
      'https://fakestoreapi.com/products/1'
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
        <h2 style={{ padding: '.5rem', margin: '.5rem' }}>Products</h2>
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
                      <Button variant="primary">+/-</Button>                      
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

export default CartItemCard;
