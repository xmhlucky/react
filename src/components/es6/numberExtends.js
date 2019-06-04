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
           <h1>数值的扩展(常用)</h1>
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
           <h1>Math对象的扩展(常用)</h1>
           <p>1.Math.trunc方法用于去除一个数的小数部分，返回整数部分。(只要小数点前面的，后面的一概不要)</p>
           <p>2.Math.sign方法用来判断一个数到底是正数、负数、还是零。对于非数值，会先将其转换为数值。</p>

      </div>
    )
  }
}
