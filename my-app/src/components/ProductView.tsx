import React, { CSSProperties, Component } from 'react';
import { CartConsumer, ContextState } from './context/cartContext';
import { withRouter } from 'react-router-dom'
import Products from './Products'
import { PlusOutlined } from '@ant-design/icons';
import { Button } from 'antd';
import { useLocation } from 'react-router-dom';
import { RouteProps } from 'react-router';
import ProductImage from './ProductImage';

export interface State {
    location: any
    pathname: any
}
interface Props {
    location: any
    pathname: any
}

export class ProductView extends React.Component<Props & RouteProps, State>{

    constructor(props: Props) {
        super(props)

    }
    render() {
        console.log(this.props.location)
        let test = this

        let newString = test.props.location.pathname.replace("/product/", "");

        let productToDisplay = Products.filter(function (product) {
            return product.name === newString;
        });
        return (
            <div style={ProductListStyle}>
                <CartConsumer>
                    {(contextData: ContextState) => {
                        return (
                            <div  style={{ textAlign: 'center' }}>
                                <h1 style ={prodName}>{productToDisplay[0].name} </h1>
                                <div style ={{padding:'35px', textAlign:'center'}}>
                                    <ProductImage  img={productToDisplay[0].img} />
                                    <hr />
                                </div>
                                <h4 style={{ textAlign: 'center',padding:'15px' }}>{productToDisplay[0].description} </h4>
                                <h1 style={{ textAlign: 'center' }}>{productToDisplay[0].price} </h1>
                                <Button style = {ButtonStyle} onClick={() => contextData.addProductToCart(productToDisplay[0])} type="primary" icon={<PlusOutlined />}>
                                    Add to cart
                                                </Button><br/>
                                                <br/>
                                <Button style = {ButtonStyle}  onClick={() => contextData.removeProductFromCart(productToDisplay[0])} type="primary" icon={<PlusOutlined />}>
                                    Remove From Cart
                                                </Button>
                            </div>
                        )
                    }}
                </CartConsumer>
            </div>
        )
    }
}
let prodName: CSSProperties = { 
    position: 'absolute',
    marginLeft: '60px',    
    fontFamily:'Georgia, serif;', 
    textAlign: 'center',
    padding:'20px',
    borderRadius: 15
}

let ButtonStyle: CSSProperties = {
    margin: 0, 
    textAlign: 'center', 
    borderRadius: 15

}
let ProductListStyle: CSSProperties = {

    display: 'inline-block',
    marginTop: 60,
    height: 650,
    width: 260,
    padding: 0,   
    borderRadius: 15,
    backgroundColor: '#FFF',
    WebkitFilter: "drop-shadow(0px 0px 5px #555)",
    filter: "drop-shadow(0px 0px 5px #555)",
};


export default ProductView