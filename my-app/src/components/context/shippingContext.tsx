import React, {createContext, Component} from 'react';
import {ProviderState, Frackts} from './shippingProvider';
import {Frackt} from './Frackt'


export interface ContextState extends ProviderState{
    
    setPrice: () => number
}

export const ShippingContext = createContext<ContextState>({
    fracktCheck[],

    setPrice: () => 0
})

export const ShippingConsumer = ShippingContext.Consumer