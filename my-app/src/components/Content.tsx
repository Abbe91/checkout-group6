import React from 'react';
import './App.css';
import { Layout,Typography } from 'antd';
import Products from './Products';
import ProductList from './ProductList';
// import Form from './CardForm';
const { Content } = Layout;
const { Text } = Typography;

function content(){
    return(
        <Content>
            <Text type="warning">We have been in the business for quite a while now, 
                and it that time we have not only managed to make close relationships with numerous suppliers all over the world, 
                but also to recognize what people need. This means that we are always able to offer all the latest phones, 
                great prices, reliable service, fast delivery and premium customer support.</Text>
                

            <div style={{ backgroundColor:"white"}}>
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