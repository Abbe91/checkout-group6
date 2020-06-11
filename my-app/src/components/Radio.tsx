import React from 'react'
import CreditCardForm from './CardForm';
import FormSwish from './SwishForm';
import PayPalForm from './PayPalForm';
import { Radio, Input } from 'antd';

interface Props {
 target: any
}

class Radiobutton extends React.Component {
  state = {
    value: 1,
  };

  onChange = (e:Props) => {
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
      <div>
      <Radio.Group onChange={this.onChange} value={value}>
        <Radio style={radioStyle} value={1}>
          Pay with Card 
          {value === 1 ? <CreditCardForm />  : null}
        </Radio>
        <Radio style={radioStyle} value={2}>
          Pay with Swish
          {value === 2 ? <FormSwish />  : null}
        </Radio>
        <Radio style={radioStyle} value={3}>
          Pay with paypal
          {value === 3 ? <PayPalForm /> : null}
        </Radio>
        <Radio style={radioStyle} value={4}>
          More...
          {value === 4 ? <Input /> : null}
        </Radio>
     
      </Radio.Group>
     
      </div>
    );
  }
}
export default Radiobutton
