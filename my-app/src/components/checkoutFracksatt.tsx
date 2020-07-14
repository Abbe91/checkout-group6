import React, { Component, CSSProperties, MouseEvent, useState } from 'react';
import { Form, Input, Radio, Button,AutoComplete } from 'antd';
import { RadioChangeEvent } from 'antd/lib/radio';
import { Typography, Space, Card } from 'antd';
import { Meta } from 'antd/lib/list/Item';
import ProductImage from './ProductImage';
import { threadId } from 'worker_threads';
import { CartConsumer } from './context/cartContext';
const { Title } = Typography;
const { Text, Link } = Typography;
const FormItem = Form.Item;

export interface Shipping {
    id: number,
    name: string,
    speed: number,
    cost: number
}

export const shippingAlternatives: Shipping[] = [
    {
        id: 1,
        name: 'Postnord',
        speed: 3,
        cost: 50,
       
    },
    {
        id: 2,
        name: 'Parcel Select',
        speed: 2,
        cost: 100
    },
    {
        id: 3,
        name: 'Express Post',
        speed: 1,
        cost: 150
    },
];


interface Props {}

class CheckoutFracksatt extends Component<Props> {
state ={
    value:1,
};
onChange = (e:any)=>{
    console.log('radio checked', e.target.value);
    this.setState({
      value: e.target.value,
    });
  };


    render() {
        return (
         
        //         <Radio.Group onChange={this.onChange} value={this.state.value}>
        //             <Radio value={1}>A</Radio>
        //             <Radio value={2}>B</Radio>
        //             <Radio value={3}>C</Radio>
        //             <Radio value={4}>D</Radio>
        //     </Radio.Group>
        
        // );
            
            <CartConsumer>
                {({ selectedShipping, setSelectedShipping }) => (
                    <div>
                        <br />
                        <Title level={4}>Freight Options</Title>
                        {shippingAlternatives.map((shipping) => {
                            return (
                                <div>
                                   
                                <Radio.Group onChange={this.onChange} value={this.state.value} 
                                    key={shipping.id}
                                    
                                    >
                                    <Radio value={1} >
                                    {/* <FormItem name={['Your', 'name']}  label="Name Card" rules={[{ required: true }]} >
                                        <AutoComplete  placeholder="Your card Name" />
                                    </FormItem> */}

                                        <Text type="warning">Time for delivery:{shipping.speed * 24} hours</Text><br />
                                        <Text type="warning"  style={{ marginLeft: '26px'}}>Shpping Cost:{shipping.cost} kr</Text><br />
                                        <Text type="warning"  style={{ marginLeft: '26px'}}>Delivery date: <Meta style={{ marginLeft: '26px'}} description={new Date(new Date().setDate(new Date().getDate() + shipping.speed)).toISOString().substring(0, 10)} />
                                        </Text><br />

                                    </Radio>

                                </Radio.Group>
                              
                            </div>
                            )
                        })}
                        <div><h4>Shipping cost selected: {selectedShipping.cost}</h4></div>
                    </div>
                )}
            </CartConsumer>
           

        );
    }

}

export default CheckoutFracksatt;