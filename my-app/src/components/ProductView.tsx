import React, { CSSProperties } from 'react';
import { RouteComponentProps} from 'react-router-dom';
import {Link} from 'react-router-dom'
import Products from './Products'
import { PlusOutlined } from '@ant-design/icons';
import { Button } from 'antd';
interface Params {
    name: string
}
interface Props extends RouteComponentProps<Params>{
    
}
function getCart() {
    //return JSON.parse(localStorage.getItem('cart')) || [];
    //inCart.push(item);
    //localStorage.cart = JSON.stringify(inCart);
    let inCart:string[] = []!;
    
    //inCart  = localStorage.getItem('cart')!; 
    console.log(inCart);
    //let result = inCart.split(",");
  }
getCart();
export default function ProductView(props: Props){

    let ButtonStyle: CSSProperties = {
        margin: 0,
        position: 'absolute',
        marginLeft: '40px'

    }
  /*   function addProduct(item: any){
        getCart().push(item);
        
        localStorage.cart = JSON.stringify(inCart);

    }  */
    let newString = props.location.pathname.replace("/product/", "");

    let productToDisplay = Products.filter(function(product) {
        return product.name === newString;
    });
  
    
        return(
            <div>
                <Link to="/"
                    >
                <h1>Back to Main</h1>
                    </Link>
            <h1>{productToDisplay[0].name} </h1>
            <h1>{productToDisplay[0].description} </h1>
            <h1>{productToDisplay[0].price} </h1>
            {/* <Button style = {ButtonStyle}  
             onClick={() => {addProduct(productToDisplay)}}   
             type="primary" icon={<PlusOutlined />}>
                        Add to cart
            </Button> */}
            </div>
        );
    
}

