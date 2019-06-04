import React,{Component} from 'react';
export default class NumberExtends extends Component{
  constructor(props){
    super(props);
    this.state={

    }
  }
  render(){
    return(
      <div>
           <h1>数值的扩展</h1>
           <p>
               1.Number.isFinite() 检查一个值是否是有限的。
           </p>
           <p>
               2.Number.isNaN() 检查一个值是否为NaN。
           </p>
           <p>
               3.Number.parseInt() 取整。
           </p>
           <p>
               4.Number.parseFloat()。取数值。
           </p>
           <p>
               5.Number.isInteger() 用来判断一个数值是否为整数。
           </p>
            <h1>Math对象的扩展</h1>
            
      </div>
    )
  }
}
