import React,{Component} from 'react';
import { Button } from 'antd';
class State extends Component{
  constructor(props){
    super(props);
    this.state={
      number:1
    }
    this.addNumber.bind(this);
    this.reduceNumber.bind(this);
  }
  addNumber = ()=>{
    this.setState({
      number:this.state.number+1
    })
  };
  reduceNumber=()=>{
      this.setState({
        number:this.state.number-1
      })
  }
  render(){
    return (
      <div className="state">
          我当前的数字是：{this.state.number}
          <br/>
          <Button type="primary" onClick={this.addNumber}>
            增加
          </Button>
          <Button type="primary" onClick={this.reduceNumber}>
            减少
          </Button>
      </div>
    )
  }
}
export default State;
