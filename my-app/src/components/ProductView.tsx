import React from 'react';
import { RouteComponentProps} from 'react-router-dom';
import {Link} from 'react-router-dom'
import Products from './Products'
interface Params {
    name: string
}
interface Props extends RouteComponentProps<Params>{
    
}

export default function ProductView(props: Props){

    let testString = props.location.pathname;
    let newString = testString.replace("/product/", "")

    let productToDisplay = Products.filter(function(product) {
        return product.name === newString;
    });
    console.log(productToDisplay)
    console.log(productToDisplay[0].name)
    
        return(
            <div>
                <Link to={"/main"}
                    >
                <h1>Back to Main</h1>
                    </Link>
            <h1>{productToDisplay[0].name} </h1>
            <h1>{productToDisplay[0].description} </h1>
            <h1>{productToDisplay[0].price} </h1>
            </div>
        );
    
}

