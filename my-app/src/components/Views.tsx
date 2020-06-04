import React from 'react';
import ProductList from './ProductList';
import ProductView from './ProductView'
import {Route, Switch, withRouter} from 'react-router-dom';
import Products from './Products';
import Header from './Header';



/** React function component */
function Views() {
        console.log('hejhej')
        return (
        <Switch>
            <Route path="/product/:view" component = {ProductView}/>
            <Route path="/" component = {ProductList} />

        </Switch>
            
            );
            
        }

export default withRouter(Views)