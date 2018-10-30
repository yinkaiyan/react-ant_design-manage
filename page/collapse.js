import React,{Component} from 'react'

import { Route } from 'react-router-dom'

import { Collapse } from 'antd';

const Panel = Collapse.Panel;

const text = `
  A dog is a type of domesticated animal.
  Known for its loyalty and faithfulness,
  it can be found as a welcome guest in many households across the world.
`;

var style={
  list:{
    margin:"20px",
  }
}
export default class collapse extends Component{
  componentWillMount (){
    console.log(this.props)
  }
  state = {
    
  }
  render() {
    return (
      <div>
        <div style={style.list}>
            <Collapse accordion>
                <Panel header="This is panel header 1" key="1">
                <p>{text}</p>
                </Panel>
                <Panel header="This is panel header 2" key="2">
                <p>{text}</p>
                </Panel>
                <Panel header="This is panel header 3" key="3">
                <p>{text}</p>
                </Panel>
            </Collapse>
        </div>
      </div>
    );
  }
}

