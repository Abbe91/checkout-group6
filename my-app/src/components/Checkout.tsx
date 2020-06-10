import React from 'react';
import Radiobutton from './Radio'
import { Cart } from './Cart';
import CheckoutFracksatt from './checkoutFracksatt';
import TotalPrice from './TotalPrice';
import Address from './AddressCheckOut';



function Checkout(){
        

 
    return(
        
        <div>

            <Cart/>
            <CheckoutFracksatt/>
            <Address />
            <Radiobutton />
            <TotalPrice/>
            

        </div>
        
    );
}



export default Checkout;