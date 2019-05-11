import React,{Component} from 'react';
import {
  Button
} from 'antd';
class SonProps extends Component{
  constructor(props){
    super(props);
    this.state={
      sontext:'我是子组件'
    }
  }
  render(){
    let {parenttext,number}=this.props.parentvalue;
    return (
      <div className="sonprops">
        我是子组件-{parenttext}-{number}
      </div>
    )
  }
}
export default SonProps;
