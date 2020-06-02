import React from 'react';
import './App.css';
import { Layout } from 'antd';
import Products from './Products';
import ProductList from './ProductList';
// import Form from './CardForm';
const { Content } = Layout;

function content(){
    return(
        <Content>Content

            <div style={{width:10000, height:500, backgroundColor:"white"}}>
                <ProductList 
                    products = {Products}
                />
            </div>
            <div>
                
            </div>
        </Content>
  );
  
  }
  export default content;