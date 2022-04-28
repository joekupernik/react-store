import React from "react";
import Container from 'react-bootstrap/Container';
import ProductCard from '../components/ProductCard/ProductCard';







function Home() {

  
    return (
        <>
        <main>
          <h1 style={{ padding: '.5rem', margin: '.5rem' }}>Welcome to my ecommerce store!</h1>
          <hr
            style={{
              color: "black",
              height: 3
            }}
          />
          <h2 style={{ padding: '.5rem', margin: '.5rem' }}>Products</h2>
          <hr
            style={{
              color: "black",
              height: 3
            }}
          />
        <Container>
            <ProductCard
            />
        </Container>
    </main>
    </>
    );

  
}

export default Home;
