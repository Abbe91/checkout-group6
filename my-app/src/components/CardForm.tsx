import React, { Component }  from 'react';

import { Form,Input,InputNumber,Button, AutoComplete  } from 'antd';

import Address from './AddressCheckOut';
const FormItem = Form.Item;
const { TextArea } = Input;

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
class CreditCardForm extends Component<Props, State> {
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
         
                <Form 
                  name="basic" 
                  // labelCol={{ span: 7 }}
                  // wrapperCol={{ span: 22 }}
                  layout="vertical"
                  onFinish={onFinish}
                 
                   onFinishFailed={onFinishFailed}
                  >
                  <Address />
                  <h2>Card information</h2>
                  <FormItem name={['Your', 'Email']}  label="your Email" rules={[{ required: true }]} >
                  <AutoComplete  placeholder="Email" />
                  </FormItem>

                  <FormItem name={['Your', 'name']}  label="Name Card" rules={[{ required: true }]} >
                    <AutoComplete  placeholder="Your card Name" />
                  </FormItem>

                  <FormItem name={['cardnumber', 'cardnumber']}label="Card-number" rules={[{ min:12 ,required: true }]} >
                      <Input name="cardnumber" type="number" pattern="\d*" placeholder="frmCCNum"   />
                    </FormItem>

                    <FormItem name={['cvc', 'cvc']} label="CVC" rules={[{required: true,min: 3, max: 3 }]}>
                    <Input  type="number" name="cvc"  placeholder="Your card Name" />
                    </FormItem>


                    <h1>expiry date</h1>
                    <FormItem name={['Type', 'Month']} label="month" rules={[{required: true, type: 'number',min: 1, max: 12 }]}>
                      <InputNumber placeholder="month"/>
                    </FormItem>

                    <FormItem name={['Type', 'year']} label="year" rules={[{required: true, type: 'number',min: 2020, max: 2024 }]}>
                      <InputNumber placeholder="year"/>
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
  

 export default CreditCardForm ;
