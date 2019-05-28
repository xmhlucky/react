import React,{Component} from 'react';
import {Transfer} from 'antd';
const mockData = [];
for (let i = 0; i < 20; i++) {
  mockData.push({
    key: i.toString(),
    title: `content${i + 1}`,
    description: `description of content${i + 1}`,
    disabled: i % 3==0,
  });
}
export default class OrdinaryTransfer extends Component{
  constructor(props){
    super(props);
    this.state={
       selectedKeys:[],//选中的行
       targetKeys:[]  //两侧展示的信息
    }
  }
  handleChange=(nextTargetKeys, direction, moveKeys)=>{
     this.setState({
       targetKeys:nextTargetKeys
     })
  }
  handleSelectChange=(sourceSelectedKeys, targetSelectedKeys)=>{
     this.setState({
       selectedKeys:[...sourceSelectedKeys,...targetSelectedKeys]
     })
  }
  render(){
    let {targetKeys,selectedKeys}=this.state;
    return (
      <div>
          <Transfer
              dataSource={mockData}
              titles={['Source', 'Target']}
              targetKeys={targetKeys}
              selectedKeys={selectedKeys}
              onChange={this.handleChange}
              onSelectChange={this.handleSelectChange}
              onScroll={this.handleScroll}
              render={item => item.title}
            />
      </div>
    )
  }
}
