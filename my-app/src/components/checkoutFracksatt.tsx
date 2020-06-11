import React, { Component, MouseEvent, useState } from 'react';
import {ShippingConsumer, ContextState} from './context/shippingContext'
import { Form, Input, Radio, Button, } from 'antd';
import { RadioChangeEvent } from 'antd/lib/radio';
import { Typography, Space, Card } from 'antd';
import { Meta } from 'antd/lib/list/Item';
import ProductImage from './ProductImage';
import { threadId } from 'worker_threads';
const { Title } = Typography;
const { Text, Link } = Typography;



interface Props {

}
interface State {
    message: number,
    value: number
}



type shipperType = 'Postnord' | 'Parcel Select' | 'Express Post';

class CheckoutFracksatt extends Component<Props, State> {

    constructor(props: Props) {
        super(props);
        this.state = {
            message: 50,
            value: 1,
        };
    }

  



    render() {
        const { value } = this.state;
        return (

            <ShippingConsumer>
                    {(contextData: ContextState) => {
                        return(
                            <div>
                <br />
                <Title level={4}>Freight Options</Title>
                {contextData.fracktCheck.map((shipping) => {
                    return (
                        <Space direction="horizontal">
                            <Card key={shipping.fraktsatt.fracktId} title={shipping.fraktsatt.fracktName}
                                style={{ width: 160, marginRight: '30px', borderRadius: '15px' }} actions={[]} >
                                <Text type="warning">Time for delivery:{shipping.fraktsatt.fracktSpeed * 24} hours</Text><br /><br />
                                <Text type="warning">Shpping Cost:{shipping.fraktsatt.fracktCost} kr</Text><br /><br />
                                <Text type="warning">Shipping date:</Text>
                                <Meta description={new Date(new Date().setDate(new Date().getDate() + shipping.fraktsatt.fracktSpeed)).toISOString().substring(0, 10)} />
                                <br />


                                <Button onClick={() => contextData.setPrice(shipping.fraktsatt.fracktCost)}>Add Shipping</Button>

                            </Card>
                        </Space>
                    )
                })}
                
            </div>
                                    
                        )
                    }}
               
                </ShippingConsumer>

        );
    }

}

export default CheckoutFracksatt;
           /*  <div>
                <br />
                <Title level={4}>Freight Options</Title>
                {fracktCheck.map((shipping) => {
                    return (
                        <Space direction="horizontal">
                            <Card key={shipping.fracktId} title={shipping.fracktName}
                                style={{ width: 160, marginRight: '30px', borderRadius: '15px' }} actions={[]} >
                                <Text type="warning">Time for delivery:{shipping.fracktSpeed * 24} hours</Text><br /><br />
                                <Text type="warning">Shpping Cost:{shipping.fracktCost} kr</Text><br /><br />
                                <Text type="warning">Shipping date:</Text>
                                <Meta description={new Date(new Date().setDate(new Date().getDate() + shipping.fracktSpeed)).toISOString().substring(0, 10)} />
                                <br />


                                <Button onClick={() => this.handleClick(shipping)}>Add Shipping</Button>

                            </Card>
                        </Space>
                    )
                })}
                <div><h4>Shipping cost selected: {this.state.message}</h4></div>
            </div> */