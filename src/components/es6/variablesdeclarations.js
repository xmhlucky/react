import React,{Component} from 'react';
import let01 from '../../static/images/es6/let/let01.png';
import let02 from '../../static/images/es6/let/let02.png';
import let03 from '../../static/images/es6/let/let03.png';
import let04 from '../../static/images/es6/let/let04.png'
export default class VariablesDeclarations extends Component{
  constructor(props){
    super(props);
    this.state={

    }
  }
  LetDeclaration=()=>{
     for(let i=0;i<3;i++){
        let i = 'abc';
        console.log(i);
     }
  }
  componentDidMount(){
    this.LetDeclaration();
  }
  render(){
    return (
      <div>
           <h1>let命令</h1>
           <p>ES6 新增了let命令，用来声明变量。它的用法类似于var，但是所声明的变量，只在let命令所在的代码块内有效。</p>
           <h2>特性：</h2>
           <p>1.块级作用域</p>
           <p><img src={let01} /></p>
           <p>2.不存在变量提升</p>
           <p><img src={let03} /></p>
           <p>3.暂时性死区</p>
           <p><img src={let02} /></p>
           <p>4.不允许重复声明 </p>
           <p><img src={let04} /></p>
           <h1>const命令</h1>
           <p>const声明一个只读的常量。一旦声明，常量的值就不能改变。</p>
           <h2>特性：</h2>
           <p>1.const声明的变量不得改变值，这意味着，const一旦声明变量，就必须立即初始化，不能留到以后赋值</p>
           <p>2.只在声明所在的块级作用域内有效</p>
           <p>3.const命令声明的常量也是不提升，同样存在暂时性死区，只能在声明的位置后面使用</p>
      </div>
    )
  }
}
