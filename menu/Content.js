import React,{Component} from 'react'
import { withRouter,Route } from 'react-router-dom'

import Btn from '../page/Btn'
import Drop from '../page/drop'
import navigation from '../page/navigation'
import page from '../page/page'
import list from '../page/list'
import collapse from '../page/collapse'
import form from '../page/form'
import day from '../page/date/day'
import date from '../page/date/date'
import skeleton from '../page/skeleton'
import baseUrl from '../page/config/env'
import information from '../page/config/fetch'
import personal from '../page/personal'
import score from '../page/score'
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
    componentDidMount(){
        console.log(baseUrl);
        information.setPost();
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
                <Route path={'/form'} component={form}></Route>
                <Route path={'/day'} component={day}></Route>
                <Route path={'/date'} component={date}></Route>
                <Route path={'/skeleton'} component={skeleton}></Route>
                <Route path={'/personal'} component={personal}></Route>
                <Route path={'/score'} component={score}></Route>
            </div>
        )
    }
}
