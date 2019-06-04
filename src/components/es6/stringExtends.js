import React,{Component} from 'react';
import string01 from '../../static/images/es6/string/string01.png';
import string02 from '../../static/images/es6/string/string02.png';
class StringExtends extends Component{
  constructor(props){
    super(props);
    this.state={
        firstname:"张",
        lastname:"三"
    }
  }
  forOfFun=()=>{
    let str='forof';
    for(let item of str ){
      console.log(item)
    }
  }
  componentDidMount(){
     this.forOfFun()
  }
  render(){
    let {firstname,lastname}=this.state;
    return (
      <div>
          <h1>字符串的扩展</h1>
          <p>
              1.for of 循环
          </p>
          <p>
             <img src={string01} alt=''/>
          </p>
          <p>2.模板字符串 (使用的是这个符号 ``)</p>
          <p>
             {
               `Hello  ${firstname}${lastname},
                how are you?
               `
             }
          </p>
          <p>
             <img src={string02} alt=''/>
          </p>
      </div>
    )
  }
}
export default StringExtends;
