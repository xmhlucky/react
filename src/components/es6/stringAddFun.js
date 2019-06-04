import React,{Component} from 'react';
import string03 from '../../static/images/es6/string/string03.png';
import string04 from '../../static/images/es6/string/string04.png';
import string05 from '../../static/images/es6/string/string05.png';
import repeat06 from '../../static/images/es6/string/repeat06.png';
class StringAddFun extends Component{
  constructor(props){
    super(props);
    this.state={

    }
  }
  includesFun=()=>{
    let str='hello wrold';
    console.log(str.includes('ll'))
    //ll包含在str里面吗
  }
  startsWithFun=()=>{
    let str='hello wrold';
    console.log(str.startsWith('ll')) //false
    //头部是否包含ll
  }
  endsWithFun=()=>{
    let str='hello wrold';
    console.log(str.endsWith('ll')) //false
    //尾部是否包含ll
  }
  repeatFun=()=>{
    let str='hello';
    console.log(str.repeat('5')) //5个hello
  }
  componentDidMount(){
     this.includesFun();
     this.startsWithFun();
     this.endsWithFun();
     this.repeatFun();
  }
  render(){
    return (
      <div>
           <h1>字符串新增方法--常用</h1>
           <p>1.includes,返回布尔值,可以用来确定一个字符串是否包含在另一个字符串中</p>
           <p>
              <img src={string03} alt='' />
           </p>
           <p>2.startsWith,返回布尔值,参数字符串是否在原字符串的头部</p>
           <p>
              <img src={string04} alt='' />
           </p>
           <p>3.endsWith,返回布尔值,参数字符串是否在原字符串的尾部</p>
           <p>
              <img src={string05} alt='' />
           </p>
           <p>4.repeat 方法返回一个新字符串，表示将原字符串重复n次。</p>
           <p>
               <img src={repeat06} alt='' />
           </p>
      </div>
    )
  }
}
export default StringAddFun;
