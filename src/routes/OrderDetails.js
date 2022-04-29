import React from "react";
import Card from 'react-bootstrap/Card';





function OrderDetails() {
    return (
      <>
      <div style={{ width: '100%', margin: '5%', }}>
          <Card style={{ width: '80%', padding: '5%', margin: '5%', height: '100%', boxshadow: 'lightblue' }}>
                      <Card.Img variant="top" src="" style={{height: 'auto', width: 'auto'}}/>
                      <Card.Body>
                        <Card.Title>Order #</Card.Title>
                        <Card.Text>Items</Card.Text>
                                                          
                        <Card.Text >
                         total
                        </Card.Text>
                        <Card.Text >
                         shipping
                        </Card.Text>
                        
                      </Card.Body>
                    </Card>
                    </div>
      </>
    );
  }

  export default OrderDetails;