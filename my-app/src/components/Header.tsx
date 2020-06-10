import React, { CSSProperties, Component } from 'react';
import './App.css';
import { ShoppingCartOutlined } from '@ant-design/icons';
import Views from './Views';
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
              <div>

                <div style={{ float: 'right', color: 'black' }}> {inCart.reduce((a, b) => a + b, 0)} </div>
                <Link to="/checkout" >
                  <Avatar style={{ float: 'right' }} icon={<ShoppingCartOutlined />} />
                </Link>

              </div>
              <div>

                <Link to="/"  >
                  <Title style={{ color: 'black' }} level={3}>Checkout-Reactjs</Title>
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
  maxWidth: '720px',
  marginTop: '0px',
  backgroundColor: 'white'

};

export default Header;