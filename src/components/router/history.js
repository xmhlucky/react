import React,{Component} from 'react';
import {Button} from 'antd';
class HistoryRouter extends Component{
  constructor(props){
    super(props);
  }
  jumpRoute=(route)=>{
    this.props.history.push(route);
  }
  render(){
    return (
      <div>
          <Button type="primary" onClick={()=>{this.jumpRoute('/')}}>跳转到首页</Button>
          <Button type="primary" onClick={()=>{this.jumpRoute('/es6')}}>跳转到es6</Button>
      </div>
    )
  }
}
export default HistoryRouter;
