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
                                <Space direction="horizontal">
                                    <Card key={shipping.id}   title={shipping.name}
                                        style={{ marginRight: '30px', borderRadius: '15px' }} actions={[]} >
                                        <Text type="warning">Time for delivery:{shipping.speed * 24} hours</Text><br /><br />
                                        <Text type="warning">Shpping Cost:{shipping.cost} kr</Text><br /><br />
                                        <Text type="warning">Delivery date:</Text>
                                        <Meta description={new Date(new Date().setDate(new Date().getDate() + shipping.speed)).toISOString().substring(0, 10)} />
                                        <br />

                                        <Button style={selectedShipping.id == shipping.id ? active : inactive} onClick={() => setSelectedShipping(shipping)}>{selectedShipping.id == shipping.id ? "Selected" : "Select Shipping"}</Button>

                                    </Card>
                                </Space>
                            )
                        })}
                        <div><h4>Shipping cost selected: {selectedShipping.cost}</h4></div>
                    </div>
                )}
            </CartConsumer>

        );
    }

}

let active: CSSProperties = {
    marginRight: '30px', 
    borderRadius: '15px',
    backgroundColor: 'blue',
    color: 'white'
}

let inactive: CSSProperties = {
    marginRight: '30px', 
    borderRadius: '15px',
}

export default CheckoutFracksatt;