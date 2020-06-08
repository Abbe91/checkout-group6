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
    let inCart = 0;
    return (
      <CartConsumer>
        {(contextData: ContextState) => {
          
          console.log(contextData)
          let totProds = contextData.cartItems.filter((product) =>{
            return product.quantity
           }).map((product) =>{
            totProds =+ product.quantity
           })
          return (
            <div style = {HeaderStyle}>
              <div>

                <div style={{float: 'right'}}> {inCart} </div>
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