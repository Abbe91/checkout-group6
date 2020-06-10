import React, { Component} from 'react';
import {CartConsumer, ContextState} from './context/cartContext'; 



export interface State {
    
}



export class TotalPrice extends Component<{}, State>{



    constructor(props: {}){
        super(props)
    }
      
        render(){
            return(
                <CartConsumer>
                    {(contextData: ContextState) => {
                        return(
                            <div>
                                <h1>Total price including shipping & VAT:</h1>
                                {   
                                   
                                <h1> {contextData.getTotalPrice()*1.25} :- </h1>
                                }
                            </div>
                        )
                    }}
               
                </CartConsumer>
            )
        }
    }
    



export default TotalPrice;