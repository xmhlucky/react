import React,{Component} from 'react';
import {
  Button
} from 'antd';
import SonProps from './son';
class ParentProps extends Component{
  constructor(props){
    super(props);
    this.state={
      parenttext:'我是父组件',
      number:1
    }
  }
  render(){
    return (
      <div className="parentprops">
          <SonProps parentvalue={this.state}/>
      </div>
    )
  }
}
export default ParentProps;
