import React,{Component} from 'react'

import { Route } from 'react-router-dom'

import { Skeleton, Switch, List, Avatar, Icon } from 'antd';

const listData = [];
for (let i = 0; i < 3; i++) {
  listData.push({
    href: 'http://ant.design',
    title: `ant design part ${i}`,
    avatar: 'https://zos.alipayobjects.com/rmsportal/ODTLcjxAfvqbxHnVXCYX.png',
    description: 'Ant Design, a design language for background applications, is refined by Ant UED Team.',
    content: 'We supply a series of design principles, practical patterns and high quality design resources (Sketch and Axure), to help people create their product prototypes beautifully and efficiently.',
  });
}

const IconText = ({ type, text }) => (
  <span>
    <Icon type={type} style={{ marginRight: 8 }} />
    {text}
  </span>
);


var style={
  list:{
    margin:"20px",
  }
}
export default class skeleton extends Component{
  componentWillMount (){
    console.log(this.props)
  }
  state = {
    loading: false,
  }
  onChange = (checked) => {
    this.setState({ loading: !checked });
  }
  render() {
    return (
      <div>
        <div style={style.list}>
            <Switch checked={!this.state.loading} onChange={this.onChange} />
            <List
                itemLayout="vertical"
                size="large"
                dataSource={listData}
                renderItem={item => (
                    <List.Item
                        key={item.title}
                        actions={!this.state.loading && [<IconText type="star-o" text="156" />, <IconText type="like-o" text="156" />, <IconText type="message" text="2" />]}
                        extra={!this.state.loading && <img width={242} alt="logo" src="https://gw.alipayobjects.com/zos/rmsportal/mqaQswcyDLcXyDKnZfES.png" />}
                    >
                        <Skeleton loading={this.state.loading} active avatar>
                            <List.Item.Meta
                            avatar={<Avatar src={item.avatar} />}
                            title={<a href={item.href}>{item.title}</a>}
                            description={item.description}
                            />
                            {item.content}
                        </Skeleton>
                    </List.Item>
                )}
            />
        </div>
      </div>
    );
  }
}

