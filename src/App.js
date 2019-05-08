import React, {useState} from "react";
import { Row, Col } from "antd";
import { Menu, Dropdown, Button, Icon, message } from "antd";
import { PageHeader } from "antd";
import Product from "./Product";
import logo from "./logo.svg";
import "./App.css";



function App() {

  const [currency, setCurrency] = useState("INR") 

  function handleMenuClick({key}){

  }

  const menu = (
    <Menu onClick={handleMenuClick}>
      <Menu.Item key="INR"><Icon type="dollar" />INR</Menu.Item>
      <Menu.Item key="USD"><Icon type="dollar" />USD</Menu.Item>
    </Menu>
  );
  
  function handleMenuClick(e) {
    message.info('Click on menu item.');
    console.log('click', e);
  }

  return (
    <div className="">
      <PageHeader
        title="Design Exercise"
        extra={[
          <Dropdown overlay={menu}>
            <Button type="primary">
              Currency<Icon type="down" />
            </Button>
          </Dropdown>
        ]}
      />
      <Row>
        <Col sm={24} md={8} lg={4}>
          <Product />
        </Col>
        <Col sm={24} md={8} lg={4}>
          <Product />
        </Col>
        <Col sm={24} md={8} lg={4}>
          <Product />
        </Col>
        <Col sm={24} md={8} lg={4}>
          <Product />
        </Col>
        <Col sm={24} md={8} lg={4}>
          <Product />
        </Col>
        <Col sm={24} md={8} lg={4}>
          <Product />
        </Col>
      </Row>
    </div>
  );
}



export default App;
