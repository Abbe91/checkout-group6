
import React, { CSSProperties } from 'react';

interface Props{
    img:string
}
function ProductImage(props:Props){


    let imageStyle:CSSProperties  ={
        marginLeft: 25,
        marginTop: 20,
        width: 150,
        height: 150,
        borderRadius: "50%",
        objectFit: 'cover',
        backgroundColor: 'grey'
    }
    return(
        <img src={props.img} alt="productpic" style={imageStyle} />
    );
}

export default ProductImage;