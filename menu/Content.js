import React,{Component} from 'react'
import { withRouter,Route } from 'react-router-dom'

import Btn from '../page/Btn'
import Drop from '../page/drop'
import navigation from '../page/navigation'

export default class Content extends Component{
    componentWillMount (){
        console.log(this.props)
    }
    render(){
        return (
            <div>
                <Route path='/' exact={true} component={Btn}></Route>
                <Route path={'/drop'} component={Drop}></Route>
                <Route path={'/navigation'} component={navigation}></Route>
            </div>
        )
    }
}
