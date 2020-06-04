import React from 'react';
import './App.css';
import { Layout } from 'antd';
import Radiobutton from './Radio'
import Sider from './Sider';
import Header from './Header';
import Footer from './Footer';
import Content from './Content';
import { BrowserRouter } from 'react-router-dom';






function App() {
  return (
    <div className="App">
ensar-routing-test
      <BrowserRouter>
        <Layout>
          <Header />

          <Layout>
            <Sider />
            <Layout>

              <Content />
              <Radiobutton />
              <Footer />
            </Layout>
          </Layout>
        </Layout>
      </BrowserRouter>

    </div>
  );
}

export default App;
