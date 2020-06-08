
import React, { Component } from 'react';

import Knapp from './Knapp'
import { Form,Input,InputNumber,Button,Alert,Drawer } from 'antd';


const FormItem = Form.Item;



interface Props {
 
}
interface State {
 
  
}

 
class CreditCardForm extends Component<Props, State> {
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
                   
                <FormItem name={['Card', 'name']} label="Name Card" rules={[{ required: true }]} >
                
                      <Input placeholder="Card Name"/ >
                    </FormItem>
                    <FormItem name={['Card', 'number']} label="Card Number" rules={[{type: 'number',max:999999999999 ,required: true }]} >
                      <InputNumber placeholder="card Number" style={{width:400}} />
                    </FormItem>
                    <FormItem name={['Cvc', 'number']} label="CVC" rules={[{required: true, type: 'number',min: 0, max: 999 }]}>
                      <InputNumber placeholder="CVC" />
                    </FormItem>
                    <h1>expiry date</h1>
                    <FormItem name={['Type', 'Month']} label="month" rules={[{required: true, type: 'number',min: 1, max: 12 }]}>
                      <InputNumber placeholder="month"/>
                    </FormItem>
                    <FormItem name={['Type', 'Year']} label="year" rules={[{required: true, type: 'number',min: 2020, max: 2222 }]}>
                      <InputNumber  placeholder="year"/>
                    </FormItem>
                    <FormItem >
       
                <Knapp />
                    
                      
                     
                </FormItem>
                </Form>
            
        );
    }
}
 
export default CreditCardForm;
