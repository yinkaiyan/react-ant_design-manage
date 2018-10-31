import React,{Component} from 'react'

import { Route } from 'react-router-dom'

import { TimePicker } from 'antd';
import moment from 'moment';

function onChange(time, timeString) {
  console.log(time, timeString);
}
var style={
  list:{
    margin:"20px",
  }
}
const format = 'HH:mm';
export default class day extends Component{
  componentWillMount (){
    console.log(this.props)
  }
  state = {
    value: null,
  }

  onChange = (time) => {
    console.log(time);
    this.setState({ value: time });
  }
  
  render() {
    return (
      <div>
        <div style={style.list}>
          <TimePicker onChange={onChange} defaultOpenValue={moment('00:00:01', 'HH:mm:ss')} />
        </div>
        <div style={style.list}>
          <TimePicker value={this.state.value} defaultValue={moment('12:08:23', 'HH:mm:ss')} onChange={this.onChange} />
        </div>
        <div style={style.list}>
           <TimePicker defaultValue={moment('12:08', format)} format={format} />
        </div>
      </div>
    );
  }
}

