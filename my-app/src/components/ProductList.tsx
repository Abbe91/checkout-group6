
import React, { CSSProperties } from 'react';
import ProductName from './ProductName';
import ProductImage from './ProductImage';
import {Product} from './Products'
import { Button} from 'antd';
import { PlusOutlined } from '@ant-design/icons';
import { Link } from 'react-router-dom';
import Products from './Products';



let inCart:string[] = [];
function ProductList(){       
        
     function addProduct(item: any){
        inCart.push(item);
        
        localStorage.cart = JSON.stringify(inCart);

    } 
    let singleItem= Products.map(function(item){  

        return <div className="container" key = {item.id} style={ProductListStyle}>
                <Link
                 to = {"/product/" + item.name}
                  >
                        <div >
                        <ProductImage img = {item.img}/>
                        <hr/>
                        </div>
                        <ProductName name = {item.name} price = {item.price}/>
                 </Link>
                        <Button style = {ButtonStyle}   onClick={() => {addProduct(item)}}   type="primary" icon={<PlusOutlined />}>
                        Add to cart
                        </Button>
                 </div>
        
    });

    return(
        
        <div>
            {singleItem}
        </div>
        
    );
}

const ButtonStyle: CSSProperties = {
    margin: 0,
    position: 'absolute',
    marginLeft: '40px',
    borderRadius: '15px'

}
    const ProductListStyle: CSSProperties = {
    display: 'inline-block',
    margin: 10,
    height: 400,
    width: 200,
    padding: 0,

    };


export default ProductList;

