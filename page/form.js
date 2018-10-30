import React,{Component} from 'react'

import { Route } from 'react-router-dom'

var style={
  list:{
    margin:"20px",
  }
}
export default class form extends Component{
  componentWillMount (){
    console.log(this.props)
  }
  state = {
    
  }
  render() {
    return (
      <div>
        <div style={style.list}>
           form
        </div>
      </div>
    );
  }
}

