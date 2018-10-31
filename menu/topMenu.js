import React,{Component} from 'react'
import { withRouter } from 'react-router-dom'

import { Layout, Menu, Breadcrumb, Icon,Avatar  } from 'antd';
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
    formClick=(index)=>{
        console.log(this.props)
        this.props.history.push('/form')
    }
    headClick=(e)=>{
        this.props.history.push('/personal')
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
                        style={{ lineHeight: '64px',float:"left" }}
                    >
                        <Menu.Item key="1" onClick={this.formClick.bind(this,'/form')}>form表单</Menu.Item>
                        <Menu.Item key="2" onClick={this.handleClick.bind(this,'/navigation')}>嵌套路由</Menu.Item>
                        <Menu.Item key="3" onClick={this.headClick.bind(this,'/navigation')}>个人中心</Menu.Item>
                    </Menu>
                    <Avatar size={48} onClick={this.headClick.bind(this,'/personal')} style={{float:"right",margin:"6px -24px 0 0",cursor: "pointer"}} src="https://zos.alipayobjects.com/rmsportal/ODTLcjxAfvqbxHnVXCYX.png" />
                </Header>
            </div>
        )
    }
}
