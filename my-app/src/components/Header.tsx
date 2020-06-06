import React, { CSSProperties } from 'react';
import './App.css';
import { ShoppingCartOutlined } from '@ant-design/icons';
import Views from './Views';
import { Layout, Avatar } from 'antd';
import { Link, withRouter } from 'react-router-dom';
import Title from 'antd/lib/typography/Title'
const { Header } = Layout;

function header() {
  return (
    <Header style={HeaderStyle} >
      <div>

        <Link to="/checkout" >
          <Avatar style={{ float: 'right' }} icon={<ShoppingCartOutlined />} />
        </Link>

      </div>
      <div>

        <Link to="/"  >
          <Title style={{ color: 'black' }} level={3}>Checkout-Reactjs</Title>
        </Link>
      </div>
    </Header>
  );

}
const HeaderStyle: CSSProperties = {
  padding: 10,
  maxWidth: '720px',
  marginTop:'0px',
  backgroundColor:'white'

};
export default withRouter(header);