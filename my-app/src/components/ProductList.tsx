
import React, { CSSProperties } from 'react';
import ProductName from './ProductName';
import ProductImage from './ProductImage';
import {Product} from './Products'
import { Button} from 'antd';
import { PlusOutlined } from '@ant-design/icons';



interface Props{
  products: Product[]
  
}
function ProductList(props: Props){
        let ButtonStyle: CSSProperties = {
        margin: 0,
        position: 'absolute',
        marginLeft: '40px'

    }
    

        let ProductListStyle: CSSProperties = {
        display: 'inline-block',
        margin: 10,
        height: 400,
        width: 200,
        padding: 0,
        backgroundColor: '#FFF',
        WebkitFilter: "drop-shadow(0px 0px 5px #555)",
        filter: "drop-shadow(0px 0px 5px #555)",
        };

        
     let inCart:string[] = [];
     function addProduct(item: any){
        inCart.push(item);
        
        localStorage.cart = JSON.stringify(inCart);

    } 
    let singleItem= props.products.map(function(item){
        console.log(item)
          
      

        return  <div key = {item.id} style={ProductListStyle}>
                    <div >
                        <ProductImage img = {item.img}/>
                        <hr/>
                    </div>
                    <ProductName name = {item.name}/>
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

export default ProductList;