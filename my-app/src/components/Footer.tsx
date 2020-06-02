import React from 'react';
import './App.css';
import { Layout } from 'antd';
import { gray } from 'color-name';


const { Footer } = Layout;

function footer(){
    return(
        <Footer style={{ backgroundColor: "gray", textAlign: "center"}}>CopyRight To Abbe, Ensar, and Anu  ç </Footer>
  );
  
  }
  export default footer;