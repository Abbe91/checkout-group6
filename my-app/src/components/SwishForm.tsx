import React from 'react';
import { Input, Col } from 'antd';
import { DatePicker } from 'antd';






class FormSwish extends  React.Component {

  state ={
    value: ""
  }
  

  render() {
    return (
      <div>
        <h1>The phone you are going to swish from</h1>
        <Col span={5}>
          <Input
          type="text"
          placeholder="Name on Card" 
     />
        </Col>

      </div>
    );
  }
}


export default FormSwish;


