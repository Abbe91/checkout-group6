import React, { Component} from 'react';
import {CartConsumer, ContextState} from './context/cartContext'; 
import ProductImage from './ProductImage';
import {ProductListStyle} from './ProductList';
import { Button } from 'antd';
import { MinusOutlined, PlusOutlined } from '@ant-design/icons';
import { Link } from 'react-router-dom';


export interface State {
    
}



export class Cart extends Component<{}, State>{
    
      
        render(){
            return(
                <CartConsumer>
                    {(contextData: ContextState) =>{
                        let inCart: number[] = [];
                        return(
                            <div>
                                <h1>Cart</h1>
                                {   
                                    contextData.cartItems.length ?
                                    contextData.cartItems.map((product) =>{
                                        inCart.push(product.quantity * product.product.price);
                                        console.log(inCart)
                                        let totalCart = inCart.reduce((a, b) => a + b, 0);
                                        
                                        return(
                                            <div key = {product.product.id} style = {ProductListStyle}>
                                                <Link to={"/product/" + product.product.name}>
                                                <div>
                                                    <ProductImage img={product.product.img}/>
                                                    <hr/>
                                                </div>
                                                <div> Quantity: {product.quantity} </div>
                                                <div>{product.product.name}</div>
                                                <div>{product.quantity * product.product.price}</div>
                                                </Link>
                                                <Button onClick={() => contextData.addProductToCart(product.product)} type="primary" icon={<PlusOutlined />}>
                                                Add to cart
                                                </Button>
                                                <Button onClick={() => contextData.removeProductFromCart(product.product)} type="primary" icon={<MinusOutlined />} danger>
                                                Remove From Cart
                                                </Button>
                                             </div>
                                             

                                        )
                                    }) 
                                    :
                                    <h4>No items in cart..</h4>
                                }
                                
                            </div>
                        )
                    }}
               
                </CartConsumer>
            )
        }
    }
    



export default Cart;

