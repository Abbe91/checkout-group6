import React, { Component } from 'react';
import { Drawer, Button, Alert } from 'antd';

class Knapp extends React.Component {
    state = { visible: false };
  
    showDrawer = () => {
      this.setState({
        visible: true,
      });
    };
  
    onClose = () => {
      this.setState({
        visible: false,
      });
    };

  render() {
    return (
      <div className="site-drawer-render-in-current-wrapper">
        <p className="paragraph-on-div">Re-read all your information and then click on send..........</p>
        <div style={{ marginTop: 16 }}>
          <Button type="primary" onClick={this.showDrawer} htmlType="submit">
            Send
          </Button>
        </div>
       
          
        <Drawer
          title="Your message"
          placement="right"
          closable={false}
          onClose={this.onClose}
          visible={this.state.visible}
          getContainer={false}
          style={{ position: 'absolute' }}
        >
        <p className="paragraph-on-div">You miss the required information.</p>
        </Drawer>
      </div>
    );
  }
}
export default Knapp;
