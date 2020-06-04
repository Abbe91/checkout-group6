import React from 'react';
import './App.css';
import Views from './Views';
import { Layout, Avatar } from 'antd';
import {Link} from 'react-router-dom';
import Title from 'antd/lib/typography/Title'
const { Header } = Layout;

function header(){
  return(
<Header style={{padding:10}} > 

  <Avatar style={{float:'right'}} src="../image/cart.png" />
  <Link
    to = "/" 
  >
        <Title style={{color:'white'}} level={3}>Checkout-Reactjs</Title>
  </Link>
</Header>
);

}
export default header;