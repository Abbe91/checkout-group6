import React, { Component} from 'react'
import {CartContext} from './cartContext'
import {Product} from '../Products'

export interface ProviderState{
    cartList: Product[]
}

export class CartProvider extends Component<{}, ProviderState>{

    constructor(props: {}) {
        super(props)
        this.state = {
            cartList: []
        }
    }
    
    addProductToCart = (product: Product) => {
        const clonedCart = Object.assign([], this.state.cartList)
        clonedCart.push(product)
        this.setState({cartList: clonedCart}, ()=> {console.log(this.state)})
    }

    removeProductFromCart = (product: Product) =>{
        const clonedCartTwo = Object.assign([], this.state.cartList)
        const index = clonedCartTwo.indexOf(product);
        if (index > -1){
            clonedCartTwo.splice(index, 1);
        }
        this.setState({cartList: clonedCartTwo}, ()=> {console.log(this.state)})
    }

    render(){
        return(
            <CartContext.Provider value={{
                ...this.state,
                addProductToCart: this.addProductToCart,
                removeProductFromCart: this.removeProductFromCart

            }}>
                {this.props.children}
            </CartContext.Provider>
        )
    }
}