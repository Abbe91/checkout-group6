
import React, { CSSProperties } from 'react';
import Radiobutton from './Radio'
import { Cart } from './Cart';
import CheckoutFracksatt from './checkoutFracksatt';






function Checkout(){
        

 
    return(
        
        <div>

            <Cart/>
            <Radiobutton />
            <CheckoutFracksatt/>

        </div>
        
    );
}



export default Checkout;