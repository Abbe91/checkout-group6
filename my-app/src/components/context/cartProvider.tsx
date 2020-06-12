import React, {createContext, Component} from 'react'
import {CartContext} from './cartContext'
import {Product} from '../Products'
import { Shipping, shippingAlternatives } from '../checkoutFracksatt'

export interface CartItem {
    product: Product
    quantity: number
}
export interface ProviderState {
    cartItems: CartItem[]
    selectedShipping: Shipping
}

export class CartProvider extends Component<{}, ProviderState> {

    constructor(props: {}) {
        super(props)
        this.state = {
            cartItems: [],
            selectedShipping: shippingAlternatives[0]
        }
    }

    setSelectedShipping = (shipping: Shipping) => this.setState({ selectedShipping: shipping })
    
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

    getTotalPrice = () => {
        let sum = 0
        
        for (const cartItem of this.state.cartItems) {
            sum += cartItem.product.price * cartItem.quantity
        }

        return sum
    }

    render(){
        return(
            <CartContext.Provider value={{
                ...this.state,
                addProductToCart: this.addProductToCart,
                removeProductFromCart: this.removeProductFromCart,
                getTotalPrice: this.getTotalPrice,
                setSelectedShipping: this.setSelectedShipping
            }}>
                {this.props.children}
            </CartContext.Provider>
        )
    }
}