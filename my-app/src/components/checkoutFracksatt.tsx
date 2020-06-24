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
        id: 3,
        name: 'Postnord',
        speed: 1,
        cost: 150
    },
    {
        id: 2,
        name: 'Parcel Select',
        speed: 2,
        cost: 100
    },
    {
        id: 1,
        name: 'Express Post',
        speed: 3,
        cost: 50
    },
];


interface Props {}
interface State{}

class CheckoutFracksatt extends Component<Props,State> {

    constructor(props: Props) {    
        super(props);
        this.state = {
           

            
        };
    }

    render() {
        return (
            <CartConsumer>
                {({ selectedShipping, setSelectedShipping }) => (
                    <div>
                        <br />
                        <Title level={4}>Freight Options</Title>
                        {shippingAlternatives.map((shipping) => {
                 
                           if (shipping.cost) {   
                            return (
                                <Space direction="horizontal">
                                    <Card hoverable key={shipping.id} title={shipping.name}
                                        style={{ marginRight: '30px', borderRadius: '15px' }} actions={[]} >
                                        <Text type="warning">Time for delivery:{shipping.speed * 24} hours</Text><br /><br />
                                        <Text type="warning">Shipping Cost:{shipping.cost} kr</Text><br /><br />
                                        <Text type="warning">Delivery date:</Text>
                                        <Meta description={new Date(new Date().setDate(new Date().getDate() + shipping.speed)).toISOString().substring(0, 10)} />
                                        <br />
                                        
{/*                                         <Button onClick={() => setSelectedShipping(shipping)}>Select Shipping</Button> */}
                                        <button autoFocus style={{backgroundColor:"white", border:"#1E90FF solid 2px"}} onClick={() => setSelectedShipping(shipping)}>Select Shipping</button>

                                    </Card>
                                </Space>
                            ) }
                        })}
                        
                        <div><h4>Shipping cost selected: {selectedShipping.cost}</h4></div>
                    </div>
                )}
            </CartConsumer>

        );
    }

}

export default CheckoutFracksatt;