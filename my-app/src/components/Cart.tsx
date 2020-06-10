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



    constructor(props: {}){
        super(props)
    }
      
        render(){
            return(
                <CartConsumer>
                    {(contextData: ContextState) => {
                        return(
                            <div>
                                <h1>Cart</h1>
                                {   
                                    contextData.cartItems.length ?
                                    contextData.cartItems.map((product) =>{
                                        
                                        
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
                                <h1>Total cost for items in cart excluding shipping & VAT: {contextData.getTotalPrice() } :-</h1>
                            </div>
                        )
                    }}
               
                </CartConsumer>
            )
        }
    }
    



export default Cart;

