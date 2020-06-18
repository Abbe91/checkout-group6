import React, { CSSProperties, Component } from 'react';
import './App.css';
import { ShoppingCartOutlined } from '@ant-design/icons';
import { Layout, Avatar } from 'antd';
import { Link, withRouter } from 'react-router-dom';
import Title from 'antd/lib/typography/Title';
import { CartConsumer, ContextState } from './context/cartContext';
import ProductImage from './ProductImage';


export interface State {

}


export class Header extends Component<{}, State>{

  constructor(props: {}) {
    super(props)
  }

  render() {
    
    return (
      <CartConsumer>
        {(contextData: ContextState) => {
        let inCart: number[] = [];
        contextData.cartItems.map((product)=> {
         inCart.push(product.quantity)
        })

        console.log(inCart)







          return (
            <div style={HeaderStyle}>
              <div style={{}}>

                <div style={{ float: 'right', color: 'black', }}> <h1 style={{color: 'white'}}> {inCart.reduce((a, b) => a + b, 0)} </h1></div>
                <Link to="/checkout" >
                  <h1 style={{ float: 'right' }}> <ShoppingCartOutlined style={{color: 'white',paddingTop:'20px'}}/> </h1>
                </Link>

              </div>
              <div>

                <Link to="/"  >
                  <Title style={{ color: 'white', paddingTop:'10px' }} level={2}>TechStore</Title>
                </Link>
              </div>
            </div>
          )

        }}
      </CartConsumer>
    )

  }
}

const HeaderStyle: CSSProperties = {

  padding: 10,
  marginTop:"-60px",
  backgroundColor:'blue',
  position:"fixed",
  width:"100%",
  zIndex:1  

};

export default Header;
