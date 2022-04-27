import React, {useEffect, useState} from 'react';
import './App.css';
import { Routes, Route,} from "react-router-dom";
import Home from './routes/Home';
import Account from './routes/Account';
import Cart from './routes/Cart';
import Checkout from './routes/Checkout';
import Login from './routes/LogIn';
import OrderDetails from './routes/OrderDetails';
import Orders from './routes/Orders';
import ProductDetails from './routes/ProductDetails';
import Register from './routes/Register';

import Header from './components/Header/Header';




function App() {
  

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
    <div className="App">
    <Header />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="account" element={<Account />} />
        <Route path="cart" element={<Cart />} />
        <Route path="checkout" element={<Checkout />} />
        <Route path="login" element={<Login />} />
        <Route path="orderdetails" element={<OrderDetails />} />
        <Route path="orders" element={<Orders />} />
        <Route path="productdetails" element={<ProductDetails />} />
        <Route path="register" element={<Register />} />
      </Routes>
    </div>
  );
}





export default App;
