
import React, { Component } from 'react';
import { Form,Input,InputNumber,Button,Alert } from 'antd';


const FormItem = Form.Item;


interface Props {
 
}
interface State {
 
  
}
 
class PayPalForm extends Component<Props, State> {
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
                wrapperCol={{ span: 14 }}
                layout="horizontal" >
                   
                <FormItem name={['Card', 'name']} label="Name Card" rules={[{ required: true }]} >
                
                      <Input placeholder="Card Name"/ >
                    </FormItem>
                    <FormItem name={['Card', 'number']} label="InputNumber" rules={[{type: 'number',max:999999999999 ,required: true }]} >
                      <InputNumber placeholder="card Number" style={{width:400}} />
                    </FormItem>
                    <FormItem name={['Cvc', 'number']} label="CVC" rules={[{required: true, type: 'number',min: 0, max: 999 }]}>
                      <InputNumber placeholder="CVC" />
                    </FormItem>
                    <h1>expiry date</h1>
                    <FormItem name={['Type', 'Month']} label="InputNumber" rules={[{required: true, type: 'number',min: 1, max: 12 }]}>
                      <InputNumber placeholder="month"/>
                    </FormItem>
                    <FormItem name={['Type', 'Year']} label="year" rules={[{required: true, type: 'number',min: 2020, max: 2222 }]}>
                      <InputNumber  placeholder="year"/>
                    </FormItem>
                    <FormItem wrapperCol={{ }}>
                      <Button type="primary" htmlType="submit"  >
                     
                     
                        Submit
                      </Button>
                      <Alert
   message="Success Tips"
   description="Detailed description and advice about successful copywriting."
   type="success"
   showIcon
 />
                </FormItem>
                </Form>
            
        );
    }
}
 
export default PayPalForm;
