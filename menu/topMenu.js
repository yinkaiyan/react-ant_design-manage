import React,{Component} from 'react'
import { withRouter } from 'react-router-dom'

import { Layout, Menu, Breadcrumb, Icon } from 'antd';

const { SubMenu } = Menu;
const { Header, Content, Footer, Sider } = Layout;

const top = {
    logo: {
        width: "120px",
        height: "31px",
        background: "rgba(255,255,255,.2)",
        margin: "16px 24px 16px 0",
        float: "left",
        borderRadius:"4px",
    },
};
export default class topMenu extends Component{
    componentWillMount (){
        console.log(this.props)
    }
    render(){
        return (
            <div>
                <Header className="header">
                    <div className="logo" style={top.logo}></div>
                    <Menu
                        theme="dark"
                        mode="horizontal"
                        defaultSelectedKeys={['2']}
                        style={{ lineHeight: '64px' }}
                    >
                        <Menu.Item key="1">nav 1</Menu.Item>
                        <Menu.Item key="2">nav 2</Menu.Item>
                        <Menu.Item key="3">nav 3</Menu.Item>
                    </Menu>
                </Header>
            </div>
        )
    }
}
