import React from 'react';
import Radiobutton from './Radio'
import { Cart } from './Cart';
import CheckoutFracksatt from './checkoutFracksatt';



function Checkout(){
        

 
    return(
        
        <div>

            <Cart/>
            <CheckoutFracksatt/>
            <Radiobutton />
            

        </div>
        
    );
}



export default Checkout;