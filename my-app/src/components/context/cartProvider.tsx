import React, {createContext, Component} from 'react'
import {CartContext} from './cartContext'
import {Product} from '../Products'

export interface CartItem {
    product: Product
    quantity: number
}
export interface ProviderState{
    cartItems: CartItem[]
    
}

export class CartProvider extends Component<{}, ProviderState>{

    constructor(props: {}) {
        super(props)
        this.state = {
            cartItems: []
            
        }
    }
    
    addProductToCart = (product: Product) => {
        const clonedCart:CartItem[] = Object.assign([], this.state.cartItems)
        
        const foundProductIndex = this.state.cartItems.findIndex((productToFind: CartItem) => {
            return product.id === productToFind.product.id
        })
        if (foundProductIndex == -1){
            clonedCart.push({product: product, quantity: 1})
        }
        else {
            clonedCart[foundProductIndex].quantity++
        }
        this.setState({cartItems: clonedCart},  ()=> {console.log(this.state.cartItems)})
        
    }

    removeProductFromCart = (product: Product) =>{
        const clonedCart:CartItem[] = Object.assign([], this.state.cartItems)
        const index = clonedCart.findIndex((productToFind: CartItem) => {
            return product.id === productToFind.product.id
        })
        
        if (index != -1) {
            if(clonedCart[index].quantity > 1){
                clonedCart[index].quantity--
            }
            else{
                clonedCart.splice(index, 1);
            }
        }
        this.setState({cartItems: clonedCart}, ()=> {console.log(this.state)})
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