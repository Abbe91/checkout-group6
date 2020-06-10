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
        <Layout className="layout">
           
            <Layout>
            <Header />
              <Content />              
              <Footer />
            </Layout>
          </Layout>     
          </CartProvider>
      </BrowserRouter>

    </div>
  );
}

export default App;
