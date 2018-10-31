import React,{Component} from 'react'

import { Route } from 'react-router-dom'
import { Input, Select, Icon,message } from 'antd';
const Option = Select.Option;
const { TextArea } = Input;

const InputGroup = Input.Group;

const selectBefore = (
  <Select defaultValue="Http://" style={{ width: 90 }}>
    <Option value="Http://">Http://</Option>
    <Option value="Https://">Https://</Option>
  </Select>
);

const selectAfter = (
  <Select defaultValue=".com" style={{ width: 80 }}>
    <Option value=".com">.com</Option>
    <Option value=".jp">.jp</Option>
    <Option value=".cn">.cn</Option>
    <Option value=".org">.org</Option>
  </Select>
);

var style={
  list:{
    margin:"20px",
  }
}
function handleMenuClick(value) {
  console.log(value);
  message.info("选中"+value);
}
export default class form extends Component{
  componentWillMount (){
    console.log(this.props)
  }

  constructor(props) {
    super(props);
    this.state = {
      userName: '',
    };
  }
  emitEmpty = () => {
    this.userNameInput.focus();
    this.setState({ userName: '' });
  }

  onChangeUserName = (e) => {
    this.setState({ userName: e.target.value });
    console.log(e.target.value);
  }
  
  render() {
    const { userName } = this.state;
    const suffix = userName ? <Icon type="close-circle" onClick={this.emitEmpty} /> : null;
    return (
      <div>
        <div style={style.list}>
           <Input placeholder="Basic usage" />
        </div>
        <div style={style.list}>
          <div style={{ marginBottom: 16 }}>
            <Input addonBefore={selectBefore} addonAfter={selectAfter} defaultValue="" />
          </div>
        </div>
        <div style={style.list}>
          <TextArea placeholder="Autosize height based on content lines" autosize />
        </div>
        <div style={style.list}>
          <TextArea placeholder="Autosize height with minimum and maximum number of lines" autosize={{ minRows: 2, maxRows: 6 }} />
        </div>
        <div style={style.list}>
            <Input
              placeholder="Enter your username"
              prefix={<Icon type="user" style={{ color: 'rgba(0,0,0,.25)' }} />}
              suffix={suffix}
              value={userName}
              onChange={this.onChangeUserName}
              ref={node => this.userNameInput = node}
            />
        </div>
        <div style={style.list}>
          <InputGroup compact onChange={handleMenuClick}>
            <Select defaultValue="Option1-1" onChange={handleMenuClick}>
              <Option value="Option1-1">Option1-1</Option>
              <Option value="Option1-2">Option1-2</Option>
            </Select>
            <Select defaultValue="Option2-2">
              <Option value="Option2-1">Option2-1</Option>
              <Option value="Option2-2">Option2-2</Option>
            </Select>
          </InputGroup>
        </div>
      </div>
    );
  }
}

