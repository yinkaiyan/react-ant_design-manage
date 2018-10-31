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
//生命周期

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
  state = {
   
  }
  constructor(props,context) {
    super(props,context);
    console.log("接收父组件传值最先执行");
    console.log(this.props);
  }
  componentWillMount (){
    console.log(this.props.comment);
    console.log("组件将要挂载");
  }
  componentDidMount(){
    console.log(this.props.comment);
    console.log("组件第一次渲染完成，此时dom节点已经生成，可以在这里调用ajax请求，返回数据setState后组件会重新渲染");
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

