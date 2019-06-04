import React,{Component} from 'react';
import module01 from '../../static/images/es6/module/module01.png';
import module02 from '../../static/images/es6/module/module02.png';
import module03 from '../../static/images/es6/module/module03.png';
class EsModule extends Component{
  constructor(props){
    super(props)
  }
  render(){
    return(
      <div>
           <h1>1.export 命令</h1>
           <p>export命令用于规定模块的对外接口。一种是直接输出变量名。也可以使用as取个别名</p>
           <p>
               <img src={module01} />
           </p>
           <h1>2.import 命令</h1>
           <p>import命令用于输入其他模块提供的功能。</p>
           <p>1、如果输出的是变量名，则引入的方法是：import {'{变量名}'} from 文件名</p>
           <p>
               <img src={module02} />
           </p>
           <h1>3.export default命令</h1>
           <p>为了给用户提供方便，让他们不用阅读文档就能加载模块，就要用到export default命令，为模块指定默认输出。</p>
           <p>如果用户输出的是匿名函数，在引入的时候可以取任意名字。<span style={{color:'red'}}>注意：此时import引入时不用使用大括号</span></p>
           <p>
               <img src={module03} />
           </p>
      </div>
    )
  }
}
export default EsModule
