import React,{Component} from 'react';
import {
  Button
} from 'antd';
class SonProps extends Component{
  constructor(props){
    super(props);
    this.state={
      sontext:'我是子组件',
      number:10,
      parentNumber:props.number

    }
    this.changeSelfNumber.bind(this);
  }
    componentWillMount(){
        console.log('componentWillMount')
    }
    componentDidMount(){
        console.log('componentDidMount')
    }
    componentWillReceiveProps(nextProps){
      this.setState({
        parentNumber:nextProps.number
      })
      console.log('componentWillReceiveProps');      
    }
    shouldComponentUpdate(nextProps, nextState){
      console.log('shouldComponentUpdate')
        if(nextProps.number !== this.state.parentNumber) return true;
        if(nextProps.number !==this.state.number) return true;       
        return false;
    }
    componentWillUpdate(nextProps, nextState){
        console.log('componentWillUpdate')
    }
      componentDidUpdate(){
          console.log('componentDidUpdate');
      }
      componentWillUnmount(){
          console.log('componentWillUnmount')
      }
      changeSelfNumber=()=>{
        this.setState({
          number:this.state.number+1
        })
      }
      changeParentNumber=()=>{
          this.props.changeNumber()
      }
    render(){
      return (
        <div className="sonprops">
        <p onClick={this.changeSelfNumber}>我是子组件的数值：{this.state.number}</p>
        <p onClick={this.changeParentNumber}>我是父组件传递过来的值(我在子组件里面)：{this.state.parentNumber}</p>
        </div>
      )
  }
}
export default SonProps;
