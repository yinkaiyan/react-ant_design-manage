import React, { Component } from 'react';
import {HashRouter as Router } from 'react-router-dom'
import TMenu from './menu/topMenu'
import LMenu from './menu/leftMenu'
import Content from './menu/Content'
import ReactDOM from 'react-dom';

const content = {
    left: {
        float: "left",
    },
    right: {
        float: "left",
        width:"calc(100% - 256px)"
    },
};

class App extends Component {
    componentWillMount (){
        console.log(this.props)
    }
    render() {
        return (
            <div>
                <Router>
                    <div>
                        <TMenu></TMenu>
                        <div style={content.left}>
                             <LMenu></LMenu>
                        </div>
                        <div style={content.right}>
                             <Content></Content>
                        </div>
                    </div>
                </Router>
            </div>

        );
    }
}
export default App;

