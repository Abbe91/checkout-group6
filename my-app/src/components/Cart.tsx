import React, {createContext, Component} from 'react';
import {CartConsumer, ContextState} from './context/cartContext'; 
import ProductName from './ProductName';
import ProductImage from './ProductImage';
import { Product } from './Products'
import { Button } from 'antd';
import { PlusOutlined } from '@ant-design/icons';
import { Link } from 'react-router-dom';
import {ProviderState} from './context/cartProvider';

export class Cart extends Component<{}, State>{

        constructor(props: {}){
            super(props)
        }
        render(){
            return(
                <CartConsumer>
                    {(contextData: ContextState) =>{
                        return(
                            <div>
                                <h1>Cart</h1>
                                {
                                    contextData.cartList.length ?
                                    contextData.cartList.map((product) =>{
                                        return(
                                            <div key = {product.id}>
                                                <Link to={"/product/" + product.name}>
                                                <div>
                                                    <ProductImage img={product.img}/>
                                                    <hr/>
                                                </div>
                                                <ProductName name = {product.name} price = {product.price}/>
                                                </Link>
                                                <Button onClick={() => contextData.addProductToCart(product)} type="primary" icon={<PlusOutlined />}>
                                                Add to cart
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
