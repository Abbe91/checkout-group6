import React, { CSSProperties } from 'react';

interface Props{
    name: string
    price: number
}
function ProductName(props: Props){
    let productnameStyle: CSSProperties={
        fontSize: 20,
        textAlign: "center",
        fontFamily: "Arial, Helvetica, sans-serif",
        margin: 10,
        
    }
    let priceStyle: CSSProperties={
        fontSize: 10,
        textAlign: "center",
        fontFamily: "Arial, Helvetica, sans-serif",
        margin: 10,
        
    }
    return(
        <div>
            <h1 style = {productnameStyle}> {props.name}</h1>
            <h2 style = {priceStyle}> {props.price} :- </h2>
        </div>
        
    );
}

// var iconStyle: CSSProperties  = {
//     margin: 20
// }

export default ProductName;