import React from 'react';
import './App.css';
import { Layout } from 'antd';

const { Footer } = Layout;

function footer(){
    return(
        <Footer style={{ backgroundColor: "#0000ff", textAlign: "center", color:"white", position: "fixed", bottom: '0'}}>CopyRight To Abbe, Ensar, and Anu  ç </Footer>
  );
  
  }
  export default footer;