import React,{Component} from 'react';
import myRef from '../../static/images/react/ref/myRef.png'
class ReactRef extends Component{
  constructor(props){
    super(props);
     this.myRef=React.createRef();
  }
  demo=()=>{
    //document.getElementById('div').innerHTML='';
  }
  emptyBox =() =>{
    console.log(this.refs.div.onClick)
  }
    componentDidMount(){
        console.log(this.myRef.current);
    }
    inputDemo = ()=>{
      console.log(this.myRef.current.value);
    }
  render(){
    return (
      <div id="div" ref="div" onClick={this.demo}>
        <input ref={this.myRef} onBlur={this.inputDemo}/>
          <p>ref的使用方法：</p>
          <div>
               <p>1.获取值</p>
               <p>
                  <img src={myRef} alt="myRef" />
               </p>
          </div>
          <div>
               <p>2.回调函数</p>
          </div>

      </div>
    )
  }
}
export default ReactRef;
