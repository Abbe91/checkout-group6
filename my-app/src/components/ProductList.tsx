//Använd context & state för cart
import React, { CSSProperties, Component } from 'react';
import ProductName from './ProductName';
import ProductImage from './ProductImage';
import { Button } from 'antd';
import { PlusOutlined } from '@ant-design/icons';
import { Link } from 'react-router-dom';
import Products from './Products';
import { Form, message,notification } from 'antd';
import {CartConsumer, ContextState} from './context/cartContext'; 


export interface Props{

}


export interface State {
    
}
const key = 'updatable';

const onFinish = (values:Props) => {
    console.log('Success:', values);
  
    message.success({ content: 'Added to cart!', key, duration: 2 });
  
};
      
  

class ProductList extends Component<{}, State> {

    constructor(props: {}){
        super(props)
    }

    
    
    render(){
        return (
            <Form 
            name="basic" 
            labelCol={{ span: 5 }}
            wrapperCol={{ span: 20 }}
            layout="horizontal"
            onFinish={onFinish}
            >
          
            
            <CartConsumer>
               {(contextData: ContextState) => {
                   return(
                       <div style={{ textAlign: 'center' }}>
                           {
                           Products.map((product) => {
                               return(
                                   <div key = {product.id} style = {ProductListStyle}>
                                    <Link to={"/product/" + product.name}>
                                       <div>
                                            <ProductImage img={product.img}/>
                                           <hr/>
                                       </div>
                                       <ProductName name = {product.name} price = {product.price}/>
                                    </Link>
                                  
                                    <Button htmlType="submit" style = {ButtonStyle} 
                                    onClick={() => contextData.addProductToCart(product)} 
                                    type="primary" icon={<PlusOutlined />}>
                                     Add to cart
                                    
                                    </Button>
                                  
                                  
                                   </div>
                               )
                           })}
                       </div>
                   )
                }}
           </CartConsumer>
           </Form>
       )
   }
   
   
   
}

        
        
       export let ButtonStyle: CSSProperties = {

            borderRadius: 15
     
        }
     
     
       export let ProductListStyle: CSSProperties = {
            display: 'inline-block',
            margin: 10,
            height: 400,
            width: 200,
            padding: 0,
            borderRadius: 15,
            backgroundColor: '#FFF',
            WebkitFilter: "drop-shadow(0px 0px 5px #555)",
            filter: "drop-shadow(0px 0px 5px #555)",
        };
     
     
        

    


export default ProductList;

