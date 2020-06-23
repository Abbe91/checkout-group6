import React, { Component } from 'react';

import { Form,Input,Button } from 'antd';
import Address from './AddressCheckOut';



const FormItem = Form.Item;


interface Props {
 
}
interface State {
 
  
}

const onFinish = (values:Props) => {
  console.log('Success:', values);
  alert("Thanks for your shopping, You are most welcome to visit us again on future")
  window.location.reload();
};

const onFinishFailed = (errorInfo:Props) => {
  console.log('Failed:', errorInfo);
  alert("Failed")
};

class FormSwish extends  Component<Props,State> {
  oncheckChange: any;
    constructor(props: Props) {
        super(props);
        this.state = {
           
            
             radio1: "72"
        };
       
 
    }


  render() {
    this.oncheckChange = (e:any) => {
      console.log(e.target.checked);
      
  }
    return (
   
      <Form name="basic" layout="vertical" onFinish={onFinish} onFinishFailed={onFinishFailed}>
          <Address />
          <h2>Your Swish number</h2>
         <FormItem name={['frmPhoneNumA', 'frmPhoneNumA']} label="Phone Number" rules={[{ min:10, max:13 ,required: true }]} >
              <Input name="frmPhoneNumA" type="number" pattern="\d*" placeholder="Phone Number ex: 0046 **********" />
          </FormItem>
          
          <FormItem >
              <Button type="primary" htmlType="submit">
              Send
              </Button> 
          </FormItem>
      
      </Form>
  
);
}
}


export default FormSwish;


