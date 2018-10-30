import React,{Component} from 'react'
import { withRouter,Route } from 'react-router-dom'

import Btn from '../page/Btn'
import Drop from '../page/drop'
import navigation from '../page/navigation'
import page from '../page/page'
import list from '../page/list'
import collapse from '../page/collapse'
var style={
    list:{
      margin:"20px",
      overflow:"auto",
    }
}
export default class Content extends Component{
    state={
        
    }
    componentWillMount (){
        console.log(this.props)
    }
    componentDidMount(){
        console.log(this.state.aaa);
    }
    //this.props.history.push('/user/list')
    //onClick={this.handleClick.bind(this,index)}
    render(){
        return (
            <div style={style.list}>
                <Route path='/' exact={true} component={Btn}></Route>
                <Route path={'/drop'} component={Drop}></Route>
                <Route path={'/navigation'} component={navigation}></Route>
                <Route path={'/page'} component={page}></Route>
                <Route path={'/list'} component={list}></Route>
                <Route path={'/collapse'} component={collapse}></Route>
            </div>
        )
    }
}
