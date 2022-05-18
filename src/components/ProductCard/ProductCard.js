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
                  <Card style={{ width: 'auto', height: '18rem', padding: '.5rem', margin: '1rem', overflow: 'hidden', boxshadow: 'lightblue', boxShadow: '12px 12px 2px 1px rgba(0, 0, 255, .2)' }}>
                    <Card.Img variant="top" src={values.image} style={{ height: '5rem', width: 'auto', padding: '1rem' }} />
                    <Card.Body>
                      <Card.Title style={{
                        fontSize: '1rem', whiteSpace: 'nowrap',
                        overflow: 'hidden',
                        textOverflow: 'ellipsis',
                        maxWidth: '200px'
                      }}>{values.title}</Card.Title>
                      <Card.Text style={{ fontSize: '1rem' }}>{values.price}</Card.Text>
                      <Link to="/productdetails">
                        <Button variant="primary">View</Button>
                      </Link>
                      <Card.Text style={{
                        fontSize: '1rem', whiteSpace: 'nowrap',
                        overflow: 'hidden',
                        textOverflow: 'ellipsis',
                        maxWidth: '200px'
                      }}>
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
