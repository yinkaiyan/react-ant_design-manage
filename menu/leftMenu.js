import React,{Component} from 'react'
import { withRouter,NavLink,Route } from 'react-router-dom'
import { Menu, Icon } from 'antd';

const SubMenu = Menu.SubMenu;
const MenuItemGroup = Menu.ItemGroup;

import drop from '../page/drop'

export default class leftMenu extends Component{
    state = {
        key: "0",
    }
    componentWillMount (){
        console.log(this.props)
    }
    handleClick = (e) => {
        if(this.state.key==e.key){
            return
        };
        this.setState({
            key: e.key
        });
    }
    render(){
        return (
            <div>
                <Menu
                    onClick={this.handleClick}
                    style={{ width: 232 }}
                    defaultSelectedKeys={['1']}
                    defaultOpenKeys={['sub1']}
                    mode="inline"
                >
                    <Menu.Item key="1">
                        <NavLink to={'/'}>
                            <Icon type="bold" theme="outlined" />
                            <span>
                                按钮
                            </span>
                        </NavLink>
                    </Menu.Item>

                    <Menu.Item key="2">
                        <NavLink to={'/drop'}>
                            <Icon type="down-circle" theme="outlined" />
                            <span>
                                下拉菜单
                            </span>
                        </NavLink>
                    </Menu.Item>

                    <Menu.Item key="3">
                        <NavLink to={'/navigation'}>
                            <Icon type="menu-unfold" theme="outlined" />
                            <span>
                                导航菜单
                            </span>
                        </NavLink>
                    </Menu.Item>

                    <Menu.Item key="4">
                        <NavLink to={'/page'}>
                            <Icon type="shop" theme="outlined" /> 
                            <span>
                                分页
                            </span>
                        </NavLink>
                    </Menu.Item>

                    <Menu.Item key="5">
                        <NavLink to={'/list'}>
                            <Icon type="pic-left" theme="outlined" />
                            <span>
                                列表
                            </span>
                        </NavLink>
                    </Menu.Item>

                    <Menu.Item key="6">
                        <NavLink to={'/collapse'}>
                            <Icon type="up-square" theme="outlined" />
                            <span>
                                折叠面板
                            </span>
                        </NavLink>
                    </Menu.Item>

                    <SubMenu key="sub1" title={<span><Icon type="clock-circle" /><span>时间选择</span></span>}>

                        <Menu.Item key="7">
                            <NavLink to={'/day'}>
                               <Icon type="clock-circle" />
                                <span>
                                    时间(时间选择)
                                </span>
                            </NavLink>
                        </Menu.Item>
                        <Menu.Item key="8">
                            <NavLink to={'/date'}>
                                <Icon type="clock-circle" />
                                <span>
                                    时间(日期选择)
                                </span>
                            </NavLink>
                        </Menu.Item>

                    </SubMenu>

                    <Menu.Item key="9">
                        <NavLink to={'/skeleton'}>
                            <Icon type="border-inner" theme="outlined" />
                            <span>
                                文章模版
                            </span>
                        </NavLink>
                    </Menu.Item>

                    <Menu.Item key="10">
                        <NavLink to={'/score'}>
                            <Icon type="star" theme="outlined" />
                            <span>
                                评分
                            </span>
                        </NavLink>
                    </Menu.Item>

                    {/* <SubMenu key="sub1" title={<span><Icon type="clock-circle" /><span>时间选择</span></span>}>

                        <Menu.Item key="7">
                            <NavLink to={'/'}>按钮</NavLink>
                        </Menu.Item>
                        <Menu.Item key="8">
                            <NavLink to={'/page/Profile'}>个人中心</NavLink>
                        </Menu.Item>

                        <SubMenu key="sub2" title="Submenu">
                            <Menu.Item key="9">Option 7</Menu.Item>
                            <Menu.Item key="10">Option 8</Menu.Item>
                        </SubMenu>

                    </SubMenu> */}

                </Menu>
                
            </div>
        )
    }
}
