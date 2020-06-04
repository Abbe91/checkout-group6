import React from 'react';
import './App.css';
import { Layout } from 'antd';
import Views from './Views'

// import Form from './CardForm';
const { Content } = Layout;



function content(){
    return(
        <Content>
            <h2>We have been in the business for quite a while now, 
                and it that time we have not only managed to make close relationships with numerous suppliers all over the world, 
                but also to recognize what people need. This means that we are always able to offer all the latest phones, 
                great prices, reliable service, fast delivery and premium customer support.</h2>

            <div style={{ backgroundColor:"white"}}>
                
                  
                    <Views/>
                 
            </div>
          
        </Content>
  );
  
  }
  export default content;