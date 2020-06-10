import React, { Component }  from 'react';

import { Form,Input,InputNumber,Button, AutoComplete,Tooltip ,Select } from 'antd';

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
        style={{ width: 200 }}
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
         
        <Form name="complex-form"
          onFinish={onFinish} 
          labelCol={{ span: 8 }}
          wrapperCol={{ span: 16 }}
          onFinishFailed={onFinishFailed}
          >
          <FormItem label="Username">
            <FormItem
                name="username"
                noStyle
                rules={[{ required: true, message: 'Username is required' }]}>
                  <Input style={{ width: 160 }} placeholder="Please input" />
            </FormItem>
            <FormItem label="Password">
            <FormItem
                  name="password"
                  noStyle
                  rules={[{ required: true, message: 'Please input your password!' }]}>
                  <Input.Password style={{ width: 160 }} placeholder="Please input password"/>
            </FormItem>
            </FormItem>
            <Tooltip title="Useful information">
              <a href="#API" style={{ margin: '0 8px' }}>
                Need Help?
              </a>
            </Tooltip>
            </FormItem>
            <FormItem label="Address">
               <Input.Group compact>
          <FormItem
            name={['address', 'province']}
            noStyle
            rules={[{ required: true, message: 'Province is required' }]}
          >
            <Select placeholder="Select province">
              <Option value="Göteborg">Göteborg</Option>
              <Option value="Stockholm">Stockholm</Option>
              <Option value="Malmö">Malmö</Option>
            </Select>
          </FormItem>
          <FormItem
            name={['address', 'street']}
            noStyle
            rules={[{ required: true, message: 'Street is required' }]}
          >
            <Input style={{ width: '50%' }} placeholder="Input street" />
          </FormItem>
        </Input.Group>
        </FormItem>
        
        <FormItem name={['Type', 'Month']} label="month" rules={[{required: true, type: 'number',min: 1, max: 12 }]}>
          <InputNumber placeholder="month"/>
        </FormItem>

        <FormItem name={['Type', 'year']} label="year" rules={[{required: true, type: 'number',min: 2020, max: 2024 }]}>
          <InputNumber placeholder="year"/>
        </FormItem>
        


      <FormItem label=" " colon={false}>
        <Button type="primary" htmlType="submit">
          Submit
        </Button>
      </FormItem>
  
                </Form>
    
            
        );
    }
  }
  

 export default PayPalForm ;
