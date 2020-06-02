import React from 'react';
import './App.css';
import { Layout } from 'antd';
import Form from './CardForm'
import Sider from './Sider';
import Header from './Header';
import Footer from './Footer';
import Content from './Content';






function App() {
  return (
    <div className="App">
      <Layout>
      <Header />
      <Layout>
      <Sider />
      <Layout>
        <Content />
          <Form />
        <Footer />
      </Layout>
      </Layout>
    </Layout>
    </div>
  );
}

export default App;
