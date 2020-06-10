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
const close = () => {

    console.log(
      'Notification was closed. Either the close button was clicked or duration time elapsed.',
    );
  };
  const goToCart = () => {
    console.log("you should write a code to be done");

  };
  const openNotification = () => {
    const key = `open${Date.now()}`;
    
    const btn  = (
        <div>  
            <Form 
                name="basic" 
                onClick={close}>
                <Button type="primary" size="small" onClick={() => notification.close(key)}>
                    Confirm
                </Button>
            </Form>
            <Form 
                name="basic" 
                onClick={goToCart}>
                <Button type="primary" size="small" onClick={() => notification.close(key)}>
                Go to Cart
                </Button>
            </Form>
      
        </div>
    );
    notification.open({
        message: 'Thanks for your choose',
        description:
          'Your products are on your cart if you want to Continue shopping click on to confirm',
        btn,
        key,
        onClose: close,
      });
    };
const onFinish = (values:Props) => {
    console.log('Success:', values);
    const hide = message.loading('Action in progress..', 0);
  
    setTimeout(hide, 2500);

  
       
        }
      
  

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
            onClick={openNotification}>
          
            
            <CartConsumer>
               {(contextData: ContextState) => {
                   return(
                       <div>
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
            margin: 0,
            position: 'absolute',
            marginLeft: '40px',
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

