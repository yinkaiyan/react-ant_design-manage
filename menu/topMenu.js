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

@withRouter

export default class topMenu extends Component{
    componentWillMount (){
        console.log(this.props)
    }
    handleClick=(index)=>{
        console.log(this.props)
        this.props.history.push('/navigation')
    }
    render(){
        return (
            <div>
                <Header className="header">
                    <div className="logo" style={top.logo}></div>
                    <Menu
                        theme="dark"
                        mode="horizontal"
                        defaultSelectedKeys={['']}
                        style={{ lineHeight: '64px' }}
                    >
                        <Menu.Item key="1">nav 1</Menu.Item>
                        <Menu.Item key="2"  onClick={this.handleClick.bind(this,'/navigation')}>嵌套路由</Menu.Item>
                        <Menu.Item key="3">nav 3</Menu.Item>
                    </Menu>
                </Header>
            </div>
        )
    }
}
