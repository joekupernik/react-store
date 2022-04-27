import React, {useState, useEffect} from "react";
import Card from 'react-bootstrap/Card';
import Button from 'react-bootstrap/Button';
import Container from 'react-bootstrap/Container';






function Home() {
  
  const [fake, setFake] = useState ([]);
  console.log(fake);
  useEffect(()=>{
    products ();
  },[])

  const products = async () => {
    await fetch('https://fakestoreapi.com/products');
    //console.log(response);
    const jsonData = await response.json();
    //console.log (jsonData);
    setFake(jsonData)
  }
  
  
  
  return (
      <>
        <main>
          <h1 style={{ padding: '.5rem', margin: '.5rem'}}>Welcome to my ecommerce store!</h1>
          <h2 style={{ padding: '.5rem', margin: '.5rem'}}>Products</h2>
          <hr
        style={{
            color: "black",
            height: 3
            }}
           />
           <div className="container">
           {fake.map((values)=>{
             return (
               <>
                 
               </>
             )

           })}
        <Container>
        <div class="row">
        <div class="col-md-4">
          <Card style={{ width: '18rem', padding: '.5rem', margin: '.5rem'}}>
            <Card.Img variant="top" src=".../logo.svg" />
              <Card.Body>
                <Card.Title>Item</Card.Title>
                <Card.Text>
                 Proiduct Description
                </Card.Text>
                <Card.Text>Price $100</Card.Text>
                <Button variant="primary">Add to Cart</Button>
              </Card.Body>
          </Card>
          </div> 
          <div class="col-md-4">
          <Card style={{ width: '18rem', padding: '.5rem', margin: '.5rem'}}>
            <Card.Img variant="top" src=".../logo.svg" />
              <Card.Body>
                <Card.Title>Item</Card.Title>
                <Card.Text>
                 Proiduct Description
                </Card.Text>
                <Card.Text>Price $100</Card.Text>
                <Button variant="primary">Add to Cart</Button>
              </Card.Body>
          </Card>
          </div> 
          <div class="col-md-4">
          <Card style={{ width: '18rem', padding: '.5rem', margin: '.5rem'}}>
            <Card.Img variant="top" src=".../logo.svg" />
              <Card.Body>
                <Card.Title>Item</Card.Title>
                <Card.Text>
                 Proiduct Description
                </Card.Text>
                <Card.Text>Price $100</Card.Text>
                <Button variant="primary">Add to Cart</Button>
              </Card.Body>
          </Card>
          </div> 
          <div class="col-md-4">
          <Card style={{ width: '18rem', padding: '.5rem', margin: '.5rem'}}>
            <Card.Img variant="top" src=".../logo.svg" />
              <Card.Body>
                <Card.Title>Item</Card.Title>
                <Card.Text>
                 Proiduct Description
                </Card.Text>
                <Card.Text>Price $100</Card.Text>
                <Button variant="primary">Add to Cart</Button>
              </Card.Body>
          </Card>
          </div> 
          <div class="col-md-4">
          <Card style={{ width: '18rem', padding: '.5rem', margin: '.5rem'}}>
            <Card.Img variant="top" src=".../logo.svg" />
              <Card.Body>
                <Card.Title>Item</Card.Title>
                <Card.Text>
                 Proiduct Description
                </Card.Text>
                <Card.Text>Price $100</Card.Text>
                <Button variant="primary">Add to Cart</Button>
              </Card.Body>
          </Card>
          </div> 
          <div class="col-md-4">
          <Card style={{ width: '18rem', padding: '.5rem', margin: '.5rem'}}>
            <Card.Img variant="top" src=".../logo.svg" />
              <Card.Body>
                <Card.Title>Item</Card.Title>
                <Card.Text>
                 Proiduct Description
                </Card.Text>
                <Card.Text>Price $100</Card.Text>
                <Button variant="primary">Add to Cart</Button>
              </Card.Body>
          </Card>
          </div> 

        </div>
        <div class="row">
        <div class="col-md-4">
        <Card style={{ width: '18rem', padding: '.5rem', margin: '.5rem'}}>
            <Card.Img variant="top" src=".../logo.svg" />
              <Card.Body>
                <Card.Title>Item</Card.Title>
                <Card.Text>
                 Proiduct Description
                </Card.Text>
                <Card.Text>Price $100</Card.Text>
                <Button variant="primary">Add to Cart</Button>
              </Card.Body>
          </Card>
          </div> 
          <div class="col-md-4">
          <Card style={{ width: '18rem', padding: '.5rem', margin: '.5rem'}}>
            <Card.Img variant="top" src=".../logo.svg" />
              <Card.Body>
                <Card.Title>Item</Card.Title>
                <Card.Text>
                 Proiduct Description
                </Card.Text>
                <Card.Text>Price $100</Card.Text>
                <Button variant="primary">Add to Cart</Button>
              </Card.Body>
          </Card>
          </div> 
          <div class="col-md-4">
          <Card style={{ width: '18rem', padding: '.5rem', margin: '.5rem'}}>
            <Card.Img variant="top" src=".../logo.svg" />
              <Card.Body>
                <Card.Title>Item</Card.Title>
                <Card.Text>
                 Proiduct Description
                </Card.Text>
                <Card.Text>Price $100</Card.Text>
                <Button variant="primary">Add to Cart</Button>
              </Card.Body>
          </Card>
          </div> 
          <div class="col-md-4">
          <Card style={{ width: '18rem', padding: '.5rem', margin: '.5rem'}}>
            <Card.Img variant="top" src=".../logo.svg" />
              <Card.Body>
                <Card.Title>Item</Card.Title>
                <Card.Text>
                 Proiduct Description
                </Card.Text>
                <Card.Text>Price $100</Card.Text>
                <Button variant="primary">Add to Cart</Button>
              </Card.Body>
          </Card>
          </div> 
          <div class="col-md-4">
          <Card style={{ width: '18rem', padding: '.5rem', margin: '.5rem'}}>
            <Card.Img variant="top" src=".../logo.svg" />
              <Card.Body>
                <Card.Title>Item</Card.Title>
                <Card.Text>
                 Proiduct Description
                </Card.Text>
                <Card.Text>Price $100</Card.Text>
                <Button variant="primary">Add to Cart</Button>
              </Card.Body>
          </Card>
          </div> 
          <div class="col-md-4">
          <Card style={{ width: '18rem', padding: '.5rem', margin: '.5rem'}}>
            <Card.Img variant="top" src=".../logo.svg" />
              <Card.Body>
                <Card.Title>Item</Card.Title>
                <Card.Text>
                 Proiduct Description
                </Card.Text>
                <Card.Text>Price $100</Card.Text>
                <Button variant="primary">Add to Cart</Button>
              </Card.Body>
          </Card>
          </div> 

        </div>
        </Container>
        </div>
        </main>
      </>
    );
  }

  export default Home;
  