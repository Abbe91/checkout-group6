import React from 'react';
import { Input, Col } from 'antd';







class FormSwish extends  React.Component {



  render() {
    return (
      <div>
        <h1>The phone you are going to swish from</h1>
        <Col span={5}>
          <Input
          type="number"
        //   pattern="\d*"
        //   maxlength="4"
          placeholder="The phone you are going to swish from"
          
     />
        </Col>

      </div>
    );
  }
}


export default FormSwish;


