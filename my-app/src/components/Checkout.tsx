import React from 'react';
import Radiobutton from './Radio'
import { Cart } from './Cart';
import CheckoutFracksatt from './checkoutFracksatt';
import TotalPrice from './TotalPrice';



function Checkout(){
        

 
    return(
        
        <div>

            <Cart/>
            <CheckoutFracksatt/>
            <Radiobutton />
            <TotalPrice/>
            

        </div>
        
    );
}



export default Checkout;