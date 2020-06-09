import React, { Component } from 'react';

import { Form,Input,InputNumber,Button } from 'antd';



const FormItem = Form.Item;


interface Props {
 
}
interface State {
 
  
}

const onFinish = (values:any) => {
  console.log('Success:', values);
  alert("Success")
};

const onFinishFailed = (errorInfo:any) => {
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
   
      <Form  
      name="basic" 
                  labelCol={{ span: 5 }}
                  wrapperCol={{ span: 20 }}
                  layout="horizontal"
                  onFinish={onFinish}
                   onFinishFailed={onFinishFailed}
                  >
         <FormItem name={['Phone', 'number']} label="Phone Number" rules={[{ min:13, max:13 ,required: true }]} >
              <Input type="number" pattern="\d*" placeholder="Phone Number ex: 0046 **********"   style={{width:400}} />
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


