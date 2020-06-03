import React from 'react'
import Form from './CardForm';
import FormSwish from './SwishForm';
import { Radio, Input } from 'antd';

class Radiobutton extends React.Component {
  state = {
    value: 1,
  };

  onChange = (e:any) => {
    console.log('radio checked', e.target.value);
    this.setState({
      value: e.target.value,
    });
  };

  render() {
    const radioStyle = {
      display: 'block',
     
    };
    const { value } = this.state;
    return (
      <Radio.Group onChange={this.onChange} value={value}>
        <Radio style={radioStyle} value={1}>
          Pay with Card 
          {value === 1 ? <Form />  : null}
        </Radio>
        <Radio style={radioStyle} value={2}>
          Pay with Swish
          {value === 2 ? <FormSwish />  : null}
        </Radio>
        <Radio style={radioStyle} value={3}>
          Pay with paypal
        </Radio>
        <Radio style={radioStyle} value={4}>
          More...
          {value === 4 ? <Input style={{ width: 100, marginLeft: 10 }} /> : null}
        </Radio>
     
      </Radio.Group>
    );
  }
}
export default Radiobutton
