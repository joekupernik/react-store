import React from "react";
import Container from 'react-bootstrap/Container';
import ProductCard from '../components/ProductCard/ProductCard';
import background from '../asset/background.jpg';








function Home() {

  
    return (
        <>
        <main>
          <div   class="bg_image"
        style={{
          backgroundImage: `url(${background})`,
          backgroundSize:'cover',
          height: '15rem'
        }}>
          
          <h1 style={{ padding: '2rem', margin: '.5rem', color: 'white' }}>Products</h1>
          </div>
          <hr
            style={{
              color: "black",
              height: 3
            }}
          />
          <div style={{backgroundColor: '#E9F7F9', opacity: '90%'}}>
        <Container>
            <ProductCard
            />
        </Container>
        </div>
    </main>
    </>
    );

  
}

export default Home;
