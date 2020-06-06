//Använd context & state för cart
import React, { CSSProperties, createContext, Component } from 'react';
import ProductName from './ProductName';
import ProductImage from './ProductImage';
import { Product } from './Products'
import { Button } from 'antd';
import { PlusOutlined } from '@ant-design/icons';
import { Link } from 'react-router-dom';
import Products from './Products';
import Item from 'antd/lib/list/Item';
import {CartConsumer, ContextState} from './context/cartContext'; 




export interface State {
    
}

class ProductList extends Component<{}, State> {

    constructor(props: {}){
        super(props)
    }

    
    
    render(){
        return (
            <CartConsumer>
               {(contextData: ContextState) => {
                   return(
                       <div>
                           {Products.map((product) => {
                               return(
                                   <div key = {product.id} style = {ProductListStyle}>
                                    <Link to={"/product/" + product.name}>
                                       <div>
                                            <ProductImage img={product.img}/>
                                           <hr/>
                                       </div>
                                       <ProductName name = {product.name} price = {product.price}/>
                                    </Link>
                                    <Button style = {ButtonStyle} onClick={() => contextData.addProductToCart(product)} type="primary" icon={<PlusOutlined />}>
                                     Add to cart
                                    </Button>
                                   </div>
                               )
                           })}
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
            marginLeft: '40px',
            borderRadius: 15
     
        }
     
     
        let ProductListStyle: CSSProperties = {
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

