import React, { CSSProperties } from 'react';

interface Props{
    img:string
}
function ProductImage(props:Props){


    let imageStyle:CSSProperties  ={        
        marginTop: 20,
        width: 150,
        height: 250,
        objectFit: 'contain',
        
    }
    const image = require("./../image/"+props.img)
    return(
        <img src={image} alt="productpic" style={imageStyle} />
    );
}

export default ProductImage;