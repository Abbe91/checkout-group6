import React, { Component } from 'react';
import { Input, Radio, Col } from 'antd';
// import { UserOutlined } from '@ant-design/icons';
import { DatePicker } from 'antd';



class Form extends  React.Component {

  state ={
    value: ""
  }
  

  render() {
    return (
      <div>
        <h1>Name on Card</h1>
        <Col span={5}>
          <Input
          type="text"
          placeholder="Name on Card" 
     />
        </Col>

        <h1>Number on card</h1>
        <Col span={5}>
          <Input placeholder="Number on card" 
          type="number12" 
          onChange={(event) => {
            if (isNaN(Number(event.target.value))) {
              return;
            } else {
              this.setState({ value: event.target.value });
            }
          }}
        
          value={this.state.value}/>
          
          
        </Col>

        <h1>CVC</h1>
        <Col span={1}>
          <Input placeholder="123"
               onChange={(event) => {
                if (isNaN(Number(event.target.value))) {
                  return;
                } else {
                  this.setState({ value: event.target.value });
                }
              }}
              // maxLength="5"
              // placeholder="Enter Zip Code"
              value={this.state.value}/>
          
        </Col>
        <h1>expiry date</h1>
      <DatePicker picker="month" />

      <DatePicker picker="year" />
      </div>
    );
  }
}


export default Form;