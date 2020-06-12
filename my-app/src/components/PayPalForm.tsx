import React, { Component }  from 'react';

import { Form,Input,InputNumber,Button, AutoComplete,Tooltip ,Select } from 'antd';
import Address from './AddressCheckOut';

const FormItem = Form.Item;
const { TextArea } = Input;
const { Option } = Select;

const dataSource = [
  '123', '555', '213'
 
];

function onSelect(value:string) {
  console.log('onSelect', value);
}

export class Complete extends React.Component {
  state = {
    dataSource: [],
  }

  handleSearch = (value:string) => {
    this.setState({
      dataSource: !value ? [] : [
        value,
        value + value,
        value + value + value,
      ],
    });
  }



  render() {
    const { dataSource } = this.state;
    return (
      <AutoComplete
        dataSource={dataSource}
       
        onSelect={onSelect}
        onSearch={this.handleSearch}
      >
        <TextArea
          placeholder="input here"
          className="custom"
          style={{ height: 50 }}
          
        />
      </AutoComplete>
    );
  }
}

interface Props {
 
}
interface State {
 
  
}
// const Demo = () => {
  const onFinish = (values:Props) => {
    console.log('Success:', values);
    alert("Thanks for your shopping, You are most welcome to visit us again on future")
    window.location.reload();
  };

  const onFinishFailed = (errorInfo:Props) => {
    console.log('Failed:', errorInfo);
    alert("Failed")
  };
class PayPalForm extends Component<Props, State> {
    oncheckChange: any;
    constructor(props: Props) {
        super(props);
        this.state = {
           
          dataSource: [],
             radio1: "72"
        };
        
      
    }
    handleSearch = (value:Props) => {
      this.setState({
        dataSource: !value ? [] : [
          this.state ={
            value: value
         
          },
          
        ],
      });
    }
    
    render() {
  
        return (
         
        <Form layout="vertical" name="complex-form" onFinish={onFinish}  onFinishFailed={onFinishFailed}>
        <Address />
        <h2>Your Paypal account</h2>
          <FormItem name={['Your', 'Email']}  label="your Email" rules={[{ required: true }]} >
            <AutoComplete  placeholder="Email" />
          </FormItem>

          <FormItem name="password" label="Password" rules={[{ required: true, message: 'Please input your password!' }]}>
            <Input.Password  placeholder="Please input password"/>
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
  

 export default PayPalForm ;
