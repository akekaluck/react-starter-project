import React, { Component} from "react";
import { connect } from 'react-redux'
import { app_init } from './actions';

import { Menu, Icon, Button, Row, Col  } from 'antd';
const { SubMenu } = Menu;

import "./App.less";

class App extends Component{
    constructor(){
        super();
        this.state = {
            current: 'mail',
            message: undefined
        };
    }

    render(){
        return(
            <div>
                <Menu onClick={this.handleClick} selectedKeys={[this.state.current]} mode="horizontal">
                    <Menu.Item key="mail">
                        <Icon type="mail" />
                        Navigation One
                    </Menu.Item>
                    <Menu.Item key="app" disabled>
                        <Icon type="appstore" />
                        Navigation Two
                    </Menu.Item>
                <SubMenu
                    title={
                        <span className="submenu-title-wrapper">
                        <Icon type="setting" />
                        Navigation Three - Submenu
                        </span>
                    }
                >
                <Menu.ItemGroup title="Item 1">
                    <Menu.Item key="setting:1">Option 1</Menu.Item>
                    <Menu.Item key="setting:2">Option 2</Menu.Item>
                </Menu.ItemGroup>
                <Menu.ItemGroup title="Item 2">
                    <Menu.Item key="setting:3">Option 3</Menu.Item>
                    <Menu.Item key="setting:4">Option 4</Menu.Item>
                </Menu.ItemGroup>
                </SubMenu>
                <Menu.Item key="alipay">
                    <a href="https://ant.design" target="_blank" rel="noopener noreferrer">
                        Navigation Four - Link
                    </a>
                </Menu.Item>
            </Menu>
                <div id="container">
                    <Row>
                        <Col span={12}>
                            <iframe className="appframe" src="http://localhost:8080/"></iframe>
                        </Col>
                        <Col span={12}>
                            <iframe className="appframe" src=""></iframe>
                        </Col>
                    </Row>
                </div>
                <div>
                    <Button onClick={this.props.app_init}>test</Button>
                </div>
                <div>
                    { this.props.name }
                </div>
            </div>
        );
    }
}

const mapStateToProps = (state /*, ownProps*/) => {
    return { ...state }
}
  
const mapDispatchToProps = { app_init }

export default connect(mapStateToProps, mapDispatchToProps)(App);