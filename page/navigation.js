import React,{Component} from 'react'

import { Route,NavLink,Link } from 'react-router-dom'

import { Menu, Icon } from 'antd';
//
import navTest1 from '../page/nav/navTest1'
import navTest2 from '../page/nav/navTest2'
import navTest3 from '../page/nav/navTest3'
import navTest4 from '../page/nav/navTest4'
//
const SubMenu = Menu.SubMenu;
const MenuItemGroup = Menu.ItemGroup;

var style={
    list:{
      margin:"32px",
    },
    left:{
        float:"left",
    },
    right:{
        float:"right",
        width:"calc(100% - 256px)",
    }
}

export default class navigation extends Component{
  componentWillMount (){
    console.log(this.props)
  }
  state = {
    current: 'mail',
  }
  handleClick = (e) => {
    console.log('click ', e);
    this.setState({
        current: e.key,
    });
  }
  handleClickLeft = (e) => {
    console.log('click ', e);
  }
  render() {
    return (
        <div>
            <div style={style.list}>
                <Menu
                    onClick={this.handleClick}
                    selectedKeys={[this.state.current]}
                    mode="horizontal"
                >
                    <Menu.Item key="mail">
                    <Icon type="mail" />Navigation One
                    </Menu.Item>
                    <SubMenu title={<span className="submenu-title-wrapper"><Icon type="setting" />Navigation Three - Submenu</span>}>
                    <MenuItemGroup title="Item 1">
                        <Menu.Item key="setting:1">Option 1</Menu.Item>
                        <Menu.Item key="setting:2">Option 2</Menu.Item>
                    </MenuItemGroup>
                    <MenuItemGroup title="Item 2">
                        <Menu.Item key="setting:3">Option 3</Menu.Item>
                        <Menu.Item key="setting:4">Option 4</Menu.Item>
                    </MenuItemGroup>
                    </SubMenu>
                    <Menu.Item key="alipay">
                       Navigation Four - Link
                    </Menu.Item>
                </Menu>
            </div>
            <div style={style.list}>
                <div style={style.left}>
                    <Menu
                        onClick={this.handleClickLeft}
                        style={{ width: 256 }}
                        defaultSelectedKeys={['1']}
                        defaultOpenKeys={['sub1']}
                        mode="inline"
                    >
                        <SubMenu key="sub1" title={<span><Icon type="setting" /><span>嵌套路由test</span></span>}>
                        <Menu.Item key="1">
                            <NavLink to={'/navigation/navTest1'} value="000">
                                嵌套路由navTest01测试
                            </NavLink>
                        </Menu.Item>
                        <Menu.Item key="2">
                            <NavLink to={'/navigation/navTest2'}>
                                嵌套路由navTest02测试
                            </NavLink>
                        </Menu.Item>
                        <Menu.Item key="3">
                            <NavLink to={'/navigation/navTest3'}>
                                嵌套路由navTest03测试
                            </NavLink>
                        </Menu.Item>
                        <Menu.Item key="4">
                            <NavLink to={'/navigation/navTest4'}>
                                嵌套路由navTest04测试
                            </NavLink>
                        </Menu.Item>
                        </SubMenu>
                    </Menu>
                </div>
                <div style={style.right}>
                    <Route path={'/navigation/navTest1'} component={navTest1}></Route>
                    <Route path={'/navigation/navTest2'} component={navTest2}></Route>
                    <Route path={'/navigation/navTest3'} component={navTest3}></Route>
                    <Route path={'/navigation/navTest4'} component={navTest4}></Route>
                </div>
            </div>
        </div>
    )
  }
}

