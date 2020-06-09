import  {createContext, } from 'react';
import {ProviderState} from './cartProvider';
import {Product} from '../Products'

export interface ContextState extends ProviderState{
    addProductToCart: (product: Product) => void,
    removeProductFromCart: (product: Product) => void
}

export const CartContext = createContext<ContextState>({
    cartList: [],
    addProductToCart: (product: Product) => {
        console.log("Error adding " + product.name + "to cart")
    },
    removeProductFromCart: (product: Product) => {
        console.log("Error removing " + product.name + "to cart")
    }
})

export const CartConsumer = CartContext.Consumer