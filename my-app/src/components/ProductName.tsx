import React, { CSSProperties } from 'react';

interface Props{
    name: string
}
function ProductName(props: Props){
    let productnameStyle: CSSProperties={
        fontSize: 24,
        textAlign: "center",
        fontFamily: "Arial, Helvetica, sans-serif",
        margin: 20,
        
    }
    return(
        <h1 style = {productnameStyle}> {props.name}</h1>
    );
}

// var iconStyle: CSSProperties  = {
//     margin: 20
// }

export default ProductName;