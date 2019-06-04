import React,{Component} from 'react';
import arr01 from '../../static/images/es6/arr/arr01.png';
import arr02 from '../../static/images/es6/arr/arr02.png';
class DestructuringAssignment extends Component{
  constructor(props){
    super(props);
    this.state={

    }
  }
  render(){
   return (
     <div>
         <h1>数组的解构赋值</h1>
         <p>ES6 允许按照一定模式，从数组和对象中提取值，对变量进行赋值，这被称为解构</p>
         <h2>使用方法</h2>
         <p>1.最简单的解构赋值</p>
         <p>
            <img src={arr01} />
         </p>
         <p>2.默认值（严格等于undefined的情况下才会使用默认值） </p>
         <p>
            <img src={arr02} />
         </p>
         <h1>对象的解构赋值</h1>
         <p>和数组类似</p>
     </div>
   )
  }
}
export default DestructuringAssignment;
