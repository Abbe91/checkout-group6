import React, { Component } from 'react';
import { Form, Input, Radio, } from 'antd';

const FormItem = Form.Item

interface Frackt {
    fracktName: string,
    fracktSpeed: number,
    fracktCost: number
}
interface Props {

}
interface State {
    check1:boolean,
    check2:boolean,
     radio1: string
}

const fracktCheck: Frackt[] = [
    {
        fracktName: 'Postnord',
        fracktSpeed: 72,
        fracktCost: 50
    },
    {
        fracktName: 'Postnord1',
        fracktSpeed: 48,
        fracktCost: 50
    },
    {
        fracktName: 'Postnord2',
        fracktSpeed: 24,
        fracktCost: 50
    },
];

class CheckoutFracksatt extends Component<Props, State> {
    oncheckChange: any;
    constructor(props: Props) {
        super(props);
        this.state = {
            check1:true,
            check2:false,
             radio1: "72"
        };
       

    }
    render() {
        this.oncheckChange = (e:any) => {
            console.log(e.target.checked);
            
        }
        return (
            <div>
                <Form labelCol={{ span: 4 }}
        wrapperCol={{ span: 14 }}
        layout="vertical" >
                    <FormItem >
                        <Radio.Group onChange={this.oncheckChange} >
                            <Radio.Button name="radioFrackt" checked={this.state.check2} value="horizontal">72 Hour</Radio.Button>
                            <Radio.Button name="radioFrackt" value="vertical">48 Hour</Radio.Button>
                            <Radio.Button name="radioFrackt" value="inline">24 Hour</Radio.Button>
                        </Radio.Group>
                    </FormItem>
                </Form>
            </div>
        );
    }
}

export default CheckoutFracksatt;