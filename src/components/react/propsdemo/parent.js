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
    this.changeNumber.bind(this);
  }
  changeNumber =()=>{
    this.setState({
      number:this.state.number+1
    })
  }
  render(){
    return (
      <div className="parentprops">
          <p onClick={this.changeNumber}>我是父组件的数值：{this.state.number}</p>
          <SonProps number={this.state.number} changeNumber={this.changeNumber}/>
        </div>
    )
  }
}
export default ParentProps;
