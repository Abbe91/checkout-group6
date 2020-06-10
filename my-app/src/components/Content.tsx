import React from 'react';
import './App.css';

import { Layout, Typography } from 'antd';

import Views from './Views'

// import Form from './CardForm';
const { Content } = Layout;
const { Text } = Typography;



function content() {
    return (
        <Content >
            <Text type="warning"></Text>


            <div style={{ borderRadius :'15px'}}>


                <Views />

            </div>

        </Content>
    );

}
export default content;