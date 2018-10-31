import React,{Component} from 'react'

import { Route } from 'react-router-dom'

import { Rate ,message,Icon } from 'antd';

var style={
  list:{
    margin:"20px",
  }
}
export default class page extends Component{

  state = {
    value:2.5
  }
  handleChange = (value) => {
    this.setState({ value });
    message.info(value);
  }
  render() {
    const { value } = this.state;
    return (
      <div>
        <div style={style.list}>
           <Rate />
        </div>
        <div style={style.list}>
           <Rate allowHalf defaultValue={this.state.value} />
        </div>
        <div style={style.list}>
           <Rate onChange={this.handleChange} value={value} />
            {value && <span className="ant-rate-text">{value} stars</span>}
        </div>
        <div style={style.list}>
           <Rate character={<Icon type="heart" />} allowHalf />
        </div>
        <div style={style.list}>
           <Rate character="A" allowHalf style={{ fontSize: 24 }} />
        </div>
        <div style={style.list}>
           <Rate character="好" allowHalf />
        </div>
      </div>
    );
  }
}

