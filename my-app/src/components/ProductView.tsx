import React, { CSSProperties, Component } from 'react';
import {CartConsumer, ContextState} from './context/cartContext'; 
import {withRouter} from 'react-router-dom'
import Products from './Products'
import { PlusOutlined } from '@ant-design/icons';
import { Button } from 'antd';
import {useLocation} from 'react-router-dom';
import { RouteProps } from 'react-router';




export interface State {
    location: any
    pathname: any
}
interface Props {
    location: any
    pathname: any
}

export class ProductView extends React.Component<Props & RouteProps, State>{

        constructor(props: Props){
            super(props)
           
        }

     

        render(){
            
            console.log(this.props.location)
            let test = this
            
            let newString = test.props.location.pathname.replace("/product/", "");

            let productToDisplay = Products.filter(function(product) {
            return product.name === newString;
        });  
            return(
                <CartConsumer>
                    {(contextData: ContextState) =>{
                        return(
                            <div>
                
                            <h1>{productToDisplay[0].name} </h1>
                            <h1>{productToDisplay[0].description} </h1>
                            <h1>{productToDisplay[0].price} </h1> 
                            <Button onClick={() => contextData.addProductToCart(productToDisplay[0])} type="primary" icon={<PlusOutlined />}>
                                                Add to cart
                                                </Button>
                                                <Button onClick={() => contextData.removeProductFromCart(productToDisplay[0])} type="primary" icon={<PlusOutlined />}>
                                                Remove From Cart
                                                </Button>
                            </div>
                        )
                    }}
                </CartConsumer>
            )
        }
}

let ButtonStyle: CSSProperties = {
    margin: 0,
    position: 'absolute',
    marginLeft: '40px'

}

export default ProductView