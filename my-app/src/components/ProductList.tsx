import React, { CSSProperties } from 'react';
import Products from './Products';
import { Link } from 'react-router-dom';
import ProductImage from './ProductImage';
import ProductName from './ProductName';
import { Button } from 'antd';
import { PlusOutlined } from '@ant-design/icons';
import Views from './Views';

export interface State {

}

 class ProductList extends React.Component<{}, State> {

    constructor(props: {}) {
        super(props)
    }

    render() {
        return (<div>
                {Products.map((Product) => {
                    return(
                        <div className="container" key = {Product.id} style={ProductListStyle}>
                           
                         <Link
                         to = {"/product/" + Product.name}
                          >
                                <div >
                                <ProductImage img = {Product.img}/>
                                <hr/>
                                </div>
                                <ProductName name = {Product.name} price = {Product.price}/>
                         </Link>
                                <Button style = {ButtonStyle} type="primary" icon={<PlusOutlined />}>
                                    Add to cart
                                </Button>
                         </div>
                      )  
         })}</div> 
  )}
 }

 const ProductListStyle: CSSProperties = {
    display: 'inline-block',
    margin: 10,
    height: 400,
    width: 200,
    padding: 0,

    };
    const ButtonStyle: CSSProperties = {
        margin: 0,
        position: 'absolute',
        marginLeft: '40px',
        borderRadius: '15px'
    
    }

    export default ProductList;