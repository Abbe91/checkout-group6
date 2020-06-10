import React, { Component, MouseEvent,useState } from 'react';
import { Form, Input, Radio, Button, } from 'antd';
import { RadioChangeEvent } from 'antd/lib/radio';
import { Typography, Space, Card } from 'antd';
import { Meta } from 'antd/lib/list/Item';
import ProductImage from './ProductImage';
import { threadId } from 'worker_threads';
const { Title } = Typography;
const { Text, Link } = Typography;


interface Frackt {
    fracktId: number,
    fracktName: string,  
    fracktSpeed: number,
    fracktCost: number
}
interface Props {

}
interface State {
    message:number,
    value: number
}

let fracktCheck: Frackt[] = [
    {
        fracktId: 1,
        fracktName: 'Postnord',        
        fracktSpeed: 3,
        fracktCost: 50
    },
    {
        fracktId: 2,
        fracktName: 'Parcel Select',
        fracktSpeed: 2,
        fracktCost: 100
    },
    {
        fracktId: 3,
        fracktName: 'Express Post',
        fracktSpeed: 1,
        fracktCost: 150
    },
];

type shipperType = 'Postnord' | 'Parcel Select' | 'Express Post';
class CheckoutFracksatt extends Component<Props, State> {

    constructor(props: Props) {
        super(props);
        this.state = {
            message:1,
            value: 1,
        };
       /*  this.handleClick =this.handleClick.bind(this) */
    }

/*     handleInput = (e: any) => {
        console.log('Radio button clicked ', e.target.value);
        this.setState({
            value: e.target.value,

        });
        const foundFract = fracktCheck.find((frackt) => {
            return frackt.fracktName == e.target.value;
        })
        if (foundFract) {
            this.oncheckChange(foundFract);
        }

    }; */
    handleClick() {
       // event.preventDefault();
       // alert(event.currentTarget.tagName); // alerts BUTTON
        console.log("Button cliked frackt    TEST:Frackt");
        this.setState({
              //  message: TEST.fracktCost
              message:3
        }
       
            );
          
    }


    render() {
        const { value } = this.state;
        return (
            <div>
                <br />
                <Title level={4}>Freight Options</Title>
                {fracktCheck.map((shipping) => {
                    return (
                        <Space direction="horizontal">
                            <Card key={shipping.fracktId} title={shipping.fracktName}
                                style={{ width: 160, marginRight:'30px', borderRadius:'15px' }} actions={[]} >
                                <Text type="warning">Time for delivery:{shipping.fracktSpeed * 24} hours</Text><br /><br />
                                <Text type="warning">Shpping Cost:{shipping.fracktCost} kr</Text><br /><br />
                                <Text type="warning">Shipping date:</Text>
                                <Meta description={new Date(new Date().setDate(new Date().getDate() + shipping.fracktSpeed)).toISOString().substring(0, 10)} />
                                <br />

                           
                              <Button onClick={()=>this.handleClick()}>Add Shipping</Button>
                     {/*          <Button onClick={()=>this.handleClick(shipping.fracktCost)}>Add Shipping</Button> */}
                            </Card>
                        </Space>
                    )
                })}
                <div>{this.state.message}</div>
            </div>


        );
    }

}

export default CheckoutFracksatt;