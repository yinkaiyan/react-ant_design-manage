import React,{Component} from 'react'

import { Route } from 'react-router-dom'

import { DatePicker } from 'antd';

const { MonthPicker, RangePicker, WeekPicker } = DatePicker;
import moment from 'moment';
function onChange(date, dateString) {
  console.log(date, dateString);
}
const dateFormat = 'YYYY/MM/DD';
const monthFormat = 'YYYY/MM';
var style={
  list:{
    margin:"20px",
  }
}

export default class date extends Component{
  componentWillMount (){
    console.log(this.props)
  }

  state = {
    value: "2018/10/31",
    value1: "2018/10",
    value2: "2018/10/31",
    value3: "2019/10/31",
    active:[10,17,20,28,30],
  }
  
  render() {
    return (
      <div>
        <div style={style.list}>
           <DatePicker defaultValue={moment(this.state.value, dateFormat)} onChange={onChange} />
        </div>
        <div style={style.list}>
           <MonthPicker defaultValue={moment(this.state.value1, monthFormat)} onChange={onChange} />
        </div>
        <br/>
        <div style={style.list}>
           <RangePicker onChange={onChange} />
        </div>
        <div style={style.list}>
            <RangePicker
                defaultValue={[moment(this.state.value2, dateFormat), moment(this.state.value3, dateFormat)]}
                format={dateFormat}
            />
        </div>
        <br/>
        <div style={style.list}>
            <DatePicker
                dateRender={(current) => {
                    const style = {};
                    var len=this.state.active.length;
                    for(var i=0;i<len;i++){
                        if (current.date() === this.state.active[i]) {
                            style.border = '1px solid #1890ff';
                            style.borderRadius = '50%';
                        }
                    };
                    return (
                    <div className="ant-calendar-date" style={style}>
                        {current.date()}
                    </div>
                    );
                }}
            />
        </div>
        <div style={style.list}>
            <RangePicker
                dateRender={(current) => {
                    const style = {};
                    if (current.date() === 1) {
                        style.border = '1px solid #1890ff';
                        style.borderRadius = '50%';
                    }
                    return (
                    <div className="ant-calendar-date" style={style}>
                        {current.date()}
                    </div>
                    );
                }}
            />
        </div>
      </div>
    );
  }
}

