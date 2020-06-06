import React from 'react';
import ProductList from './ProductList';
import ProductView from './ProductView';
import {Route, Switch, withRouter} from 'react-router-dom';
import Checkout from './Checkout';
import {CartProvider} from './context/cartProvider';



/** React function component */
function Views() {
        console.log('hejhej')
        return (
        <CartProvider>
        <Switch>
            <Route path="/checkout" component = {Checkout} />
            <Route path="/product/:view" component = {ProductView}/>
            <Route path="/" component = {ProductList} />

        </Switch>
        </CartProvider>
            
            );
            
        }

export default withRouter(Views)