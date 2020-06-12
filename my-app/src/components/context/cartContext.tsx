import React, {createContext, Component} from 'react';
import {ProviderState, CartItem} from './cartProvider';
import Products, {Product} from '../Products'
import { Shipping, shippingAlternatives } from '../checkoutFracksatt';


export interface ContextState extends ProviderState {
    addProductToCart: (product: Product) => void,
    removeProductFromCart: (product: Product) => void
    getTotalPrice: () => number
    setSelectedShipping: (shipping: Shipping) => void
}

export const CartContext = createContext<ContextState>({
    cartItems: [],
    selectedShipping: shippingAlternatives[0],
    
    addProductToCart: (product: Product) => {
        console.log("Error adding " + product.name + "to cart")
    },
    removeProductFromCart: (product: Product) => {
        console.log("Error removing " + product.name + "to cart")
    },
    getTotalPrice: () => 0,
    setSelectedShipping: (shipping: Shipping) => {}
})

export const CartConsumer = CartContext.Consumer