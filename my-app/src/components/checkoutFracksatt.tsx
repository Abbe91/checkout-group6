import React, { Component, MouseEvent } from 'react';

import { Typography, Space, Card ,Button} from 'antd';
import { Meta } from 'antd/lib/list/Item';

const { Title } = Typography;
const { Text } = Typography;


interface Frackt {
    fracktId: number,
    fracktName: string,  
    fracktSpeed: number,
    fracktCost: number
}
interface Props {

}
interface State {
    check1: boolean,
    check2: boolean,
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
            check1: true,
            check2: false,
            value: 1,
        };
    }


    handleClick(event: MouseEvent) {
        event.preventDefault();
        alert(event.currentTarget.tagName); // alerts BUTTON
    }


    render() {
     
        return (
            <div>
                <br />
                <Title level={4}>Freight Options</Title>
                {fracktCheck.map((shipping) => {
                    return (
                        <Space direction="horizontal">
                            <Card key={shipping.fracktId} title={shipping.fracktName}
                                style={{ width: 160, marginRight:'40px', borderRadius:'15px' }} actions={[]} >
                                <Text type="warning">Time for delivery:{shipping.fracktSpeed * 24} hours</Text><br /><br />
                                <Text type="warning">Shipping date:</Text>
                                <Meta description={new Date(new Date().setDate(new Date().getDate() + shipping.fracktSpeed)).toISOString().substring(0, 10)} />
                                <br />
                                <Button value={shipping.fracktCost} type="primary" onClick={this.handleClick} >Add Shipping</Button>
                            </Card>
                        </Space>
                    )
                })}
            </div>


        );
    }

}

export default CheckoutFracksatt;