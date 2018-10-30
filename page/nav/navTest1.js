import React,{Component} from 'react'

import { Route } from 'react-router-dom'

import { Button,Radio, Icon } from 'antd';
const ButtonGroup = Button.Group;

var style={
  list:{
    margin:"20px",
  }
}

export default class navTest extends Component{
  constructor(props,context) {
    super(props,context);
    console.log("接收父组件传值最先执行");
    console.log(this.props);
  }
  componentWillMount (){
    console.log(this.props.value);
    console.log("组件将要挂载");
  }
  componentDidMount(){
    console.log(this.props.value);
    console.log("组件第一次渲染完成，此时dom节点已经生成，可以在这里调用ajax请求，返回数据setState后组件会重新渲染");
  }
  Click() {
    console.log("click");
  }
  state = {
    size: 'large',
    loading: false,
    iconLoading: false,
  }
  enterLoading = () => {
    this.setState({ loading: true });
  }
  enterIconLoading = () => {
      this.setState({ iconLoading: true });
  }
  render() {
    return (
      <div>
        嵌套路由navTest01测试<br/>
        001路由内容
      </div>
    );
  }
}

