import React from 'react';
import ProductList from './ProductList';
import ProductView from './ProductView'
import {Route, Switch} from 'react-router-dom';
import Products from './Products';
import Header from './Header';



/** React function component */
export default function Views() {
   
        return (
        <Switch>
            <Route exact path="/main"
            render={(props)=> <ProductList {...props} products={Products}/>}
             />

            <Route path="/product/:view" 
            render={(props)=> <ProductView {...props} />}
            />
        </Switch>
            
            );
            
        }
        /* component={ProductView}/> */