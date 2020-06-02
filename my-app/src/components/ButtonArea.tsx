import React from 'react';
import { Button} from 'antd';
import { PlusOutlined } from '@ant-design/icons';
import {Product} from './Products'


 interface Props {
    item: Product[]
}   
function ButtonArea (props: Props) {

let productsInCart = [];
   

   

    

    return (
        <div>
            <Button onClick={() => {productsInCart.push(props.item)}} type="primary" icon={<PlusOutlined />}>
             Add to cart
             </Button>
            
        </div>
    );

}

     
   /*  render()
        return(
       /*  <div style={buttonAreaStyle}> */
        
        /* </div> */
   

export default ButtonArea;