import React,{Component} from 'react';
import hellowroldimg from '../../static/images/react/hellowrold/hellowrold01.png'
class HelloWrold extends Component{
  constructor(props){
    super(props);
    this.state={
      locationPath:window.location.origin
    }
  }
  render(){
    return (
      <div className="HelloWrold">
        <p>
            一个最简单的React组件实例
        </p>
        <p>
            <img src={hellowroldimg}/>
        </p>
          Hello Wrold
      </div>
    )
  }
}
export default HelloWrold;
