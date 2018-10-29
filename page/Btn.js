import React,{Component} from 'react'

import { Route } from 'react-router-dom'

import { Button,Radio, Icon } from 'antd';
const ButtonGroup = Button.Group;
var style={
  list:{
    margin:"20px",
  }
}
export default class Btn extends Component{
  componentWillMount (){
    console.log(this.props)
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
        <div style={style.list}>
          <Button type="primary" onClick={this.Click}>Primary</Button> 
          <Button>Default</Button> 
          <Button type="dashed">Dashed</Button> 
          <Button type="danger">Danger</Button> 
        </div>
        <div style={style.list}>
          <Button type="primary" shape="circle" icon="download" size={this.state.size} />
          <Button type="primary" icon="download" size={this.state.size}>Download</Button>
        </div>
        <div style={style.list}>
          <Button.Group size={this.state.size}>
            <Button type="primary">
              <Icon type="left" />Backward
            </Button>
            <Button type="primary">
              Forward<Icon type="right" />
            </Button>
          </Button.Group>
        </div>
        <div style={style.list}>
          <span>
            <Button type="primary" loading>
              Loading
            </Button>
            <Button type="primary" size="small" loading>
              Loading
            </Button>
            </span>
          </div>
          <div style={style.list}>
            <Button type="primary" loading={this.state.loading} onClick={this.enterLoading}>
              Click me!
            </Button>
            <Button type="primary" icon="poweroff" loading={this.state.iconLoading} onClick={this.enterIconLoading}>
              Click me!
            </Button>
          </div>
          <div style={style.list}>
            <Button shape="circle" loading />
            <Button type="primary" shape="circle" loading />
          </div>
          <div style={style.list}>
            <Button type="primary" block>Primary</Button>
            <Button block>Default</Button>
            <Button type="dashed" block>Dashed</Button>
            <Button type="danger" block>danger</Button>
          </div>
          <div style={style.list}>
            <ButtonGroup>
              <Button disabled>L</Button>
              <Button disabled>M</Button>
              <Button disabled>R</Button>
            </ButtonGroup>
          </div>
      </div>
    );
  }
}

