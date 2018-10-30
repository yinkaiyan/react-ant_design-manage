import React,{Component} from 'react'

import { Route } from 'react-router-dom'

import { Pagination ,message} from 'antd';
var style={
  list:{
    margin:"20px",
  }
}
function Change(current, pageSize) {
    console.log(current, pageSize);
    message.info(current);
}
//
function onShowSizeChange(current, pageSize) {
    console.log(current, pageSize);
} 
//
function showTotal(total) {
    return `Total ${total} items`;
}
export default class page extends Component{

  state = {
    total: 120,
    activePage:2,
  }

  render() {
    return (
      <div>
        <div style={style.list}>
           <Pagination onChange={Change} defaultCurrent={this.state.activePage} total={this.state.total} />
        </div>
        <div style={style.list}>
           <Pagination onChange={Change} showSizeChanger onShowSizeChange={onShowSizeChange} defaultCurrent={3} total={500} />
        </div>
        <div style={style.list}>
           <Pagination onChange={Change} showQuickJumper defaultCurrent={2} total={500} />
        </div>
        <div style={style.list}>
           <Pagination size="small" total={50} />
        </div>
        <div style={style.list}>
           <Pagination size="small" total={50} showSizeChanger showQuickJumper />
        </div>
        <div style={style.list}>
           <Pagination size="small" total={50} showTotal={showTotal} />
        </div>
        <div style={style.list}>
           <Pagination simple defaultCurrent={2} total={50} />
        </div>
      </div>
    );
  }
}

