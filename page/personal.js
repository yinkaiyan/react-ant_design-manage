import React,{Component} from 'react'

import { Route } from 'react-router-dom'
import {Avatar  } from 'antd';
var style={
  list:{
    margin:"10px 20px",
  },
  style:{
    lineHeight:"64px",
  },
  label:{
    fontSize:"14px"
  }
}

export default class personal extends Component{

  state = {
    total: 120,
    activePage:2,
  }

  render() {
    return (
      <div>
        <div style={style.list}>
            <div style={style.style}>
               <span style={style.label}>头像: </span>
               <Avatar size={64} src="https://zos.alipayobjects.com/rmsportal/ODTLcjxAfvqbxHnVXCYX.png" />
            </div>
        </div>
        <div style={style.list}>
            <div style={style.style}>
               <span style={style.label}>姓名: </span>
               <span>尹开彦</span>
            </div>
        </div>
        <div style={style.list}>
            <div style={style.style}>
               <span style={style.label}>性别: </span>
               <span>男</span>
            </div>
        </div>
        <div style={style.list}>
            <div style={style.style}>
               <span style={style.label}>手机: </span>
               <span>15138551395</span>
            </div>
        </div>
        <div style={style.list}>
            <div style={style.style}>
               <span style={style.label}>微信: </span>
               <span>15138551395</span>
            </div>
        </div>
        <div style={style.list}>
            <div style={style.style}>
               <span style={style.label}>邮箱: </span>
               <span>1617768751@qq.com</span>
            </div>
        </div>
        <div style={style.list}>
            <div style={style.style}>
               <span style={style.label}>生日: </span>
               <span>1994/12/14</span>
            </div>
        </div>
        <div style={style.list}>
            <div style={style.style}>
               <span style={style.label}>现居地: </span>
               <span>江西南昌</span>
            </div>
        </div>
      </div>
    );
  }
}

