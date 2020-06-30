import React, { Component, CSSProperties, MouseEvent, useState } from 'react';
import { Form, Input, Radio, Button, } from 'antd';
import { RadioChangeEvent } from 'antd/lib/radio';
import { Typography, Space, Card } from 'antd';
import { Meta } from 'antd/lib/list/Item';
import ProductImage from './ProductImage';
import { threadId } from 'worker_threads';
import { CartConsumer } from './context/cartContext';
const { Title } = Typography;
const { Text, Link } = Typography;


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
        cost: 50
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


    render() {
        return (
            <CartConsumer>
                {({ selectedShipping, setSelectedShipping }) => (
                    <div>
                        <br />
                        <Title level={4}>Freight Options</Title>
                        {shippingAlternatives.map((shipping) => {
                            return (
                                <div>
                                <Radio.Group onChange={() => setSelectedShipping(shipping)}
                                    key={shipping.id}
                                    value={shipping.name}>
                                    <Radio value={1} >

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