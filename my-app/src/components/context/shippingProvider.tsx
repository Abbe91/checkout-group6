import React, {createContext, Component} from 'react'
import {ShippingContext} from './shippingContext'
import {Frackt} from './Frackt'



export interface Frackts {
    fraktsatt: Frackt
    currentPrice: number
}

export interface ProviderState{
    fracktCheck: Frackts[]
    
}

export class ShippingProvider extends Component<{}, ProviderState>{

    constructor(props: {}) {
        super(props)
        this.state = {
            fracktCheck: []
            
            
        }
    }
    


    setPrice = (shipping: shipping) => {
        
        this.setState({fracktCheck.currentPrice: Shipping},  ()=> {console.log(this.state.fracktCheck)})
    }


    render(){
        return(
            <ShippingContext.Provider value={{
                ...this.state,
                
                setPrice: this.setPrice
            }}>
                {this.props.children}
            </ShippingContext.Provider>
        )
    }
}