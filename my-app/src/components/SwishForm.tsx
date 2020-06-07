import React, { Component } from 'react';
import Knapp from './Knapp'
import { Form,Input,InputNumber } from 'antd';



const FormItem = Form.Item;


interface Props {
 
}
interface State {
 
  
}



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
   
      <Form  labelCol={{ span: 5 }}
      wrapperCol={{ span: 20 }}
      layout="horizontal" >
         

    
          <FormItem name={['Phone', 'number']} label="phone Number:" rules={[{type: 'number',max:999999999999 ,required: true }]} >
          
            <InputNumber placeholder="Phone Number" style={{width:400, padding:1}} />
          </FormItem>
          
          <FormItem wrapperCol={{ 


          }}>
          <Knapp />
      </FormItem>
      
      </Form>
  
);
}
}


export default FormSwish;


