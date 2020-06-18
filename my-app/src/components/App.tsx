import React from 'react';
import './App.css';
import { Layout } from 'antd';
import Header from './Header';
import Footer from './Footer';
import Content from './Content';
import { BrowserRouter } from 'react-router-dom';
import {CartProvider} from './context/cartProvider';


function App() {
  return (
    <div className="App">
      <BrowserRouter>   
      <CartProvider>
          <Header/>
            <Layout className="layout" style={{marginTop:"50px"}}>           
              <Content />              
            </Layout>
          </CartProvider>
        <Footer />   
      </BrowserRouter>

    </div>
  );
}

export default App;
