import React from 'react';
import './App.css';
import { Routes, Route,} from "react-router-dom";
import Home from './routes/Home';
import Account from './routes/Account';
import Cart from './routes/Cart';
import Checkout from './routes/Checkout';
import Login from './routes/LogIn';
import OrderDetails from './routes/OrderDetails';
import ProductDetails from './routes/ProductDetails';
import Register from './routes/Register';



import Header from './components/Header/Header';
import Footer from './components/Footer/Footer';




function App() {

   
  return (
    <div className="App" style={{backgroundColor: '#E9F7F9'}}>
    <Header />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="account" element={<Account />} />
        <Route path="cart" element={<Cart />} />
        <Route path="checkout" element={<Checkout />} />
        <Route path="login" element={<Login />} />
        <Route path="orderdetails" element={<OrderDetails />} />
        <Route path="productdetails" element={<ProductDetails />} />
        <Route path="register" element={<Register />} />
      </Routes>
      <Footer />
    </div>
  );
}





export default App;
