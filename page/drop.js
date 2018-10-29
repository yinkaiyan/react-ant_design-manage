import React,{Component} from 'react'

import { Route } from 'react-router-dom'

import { Menu, Dropdown, Button, Icon, message } from 'antd';
var style={
    list:{
      margin:"20px",
    }
}
function handleMenuClick(e) {
    message.info("选中"+e.key);
}
function handleButtonClick(e) {
    message.info("选中"+e.key);
}
const menu01 = (
    <Menu onClick={handleMenuClick}>
      <Menu.Item>
        1st menu item
      </Menu.Item>
      <Menu.Item>
        2nd menu item
      </Menu.Item>
      <Menu.Item>
        3rd menu item
      </Menu.Item>
    </Menu>
);
const menu02 = (
    <Menu onClick={handleMenuClick}>
      <Menu.Item>
        1st menu item
      </Menu.Item>
      <Menu.Item>
        2nd menu item
      </Menu.Item>
      <Menu.Item>
        3rd menu item
      </Menu.Item>
    </Menu>
);
const menu03 = (
    <Menu onClick={handleMenuClick}>
      <Menu.Item key="1"><Icon type="user" />1st menu item</Menu.Item>
      <Menu.Item key="2"><Icon type="user" />2nd menu item</Menu.Item>
      <Menu.Item key="3"><Icon type="user" />3rd item</Menu.Item>
    </Menu>
);
export default class drop extends Component{
  componentWillMount (){
    console.log(this.props)
  }
  state = {
   
  }
  render() {
    return (
        <div>
            <div style={style.list}>
                <Dropdown overlay={menu01}>
                    <a className="ant-dropdown-link" href="javascript:;">
                    Hover me <Icon type="down" />
                    </a>
                </Dropdown>
            </div>
            <div style={style.list}>
                <Dropdown overlay={menu02} placement="bottomLeft">
                    <Button>bottomLeft</Button>
                </Dropdown>
            </div>
            <div style={style.list}>
                <Dropdown.Button overlay={menu03}>
                    Dropdown
                </Dropdown.Button>
            </div>
        </div>
    )
  }
}

