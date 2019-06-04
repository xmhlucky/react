import React,{Component} from 'react';
import arr03 from '../../static/images/es6/arr/arr03.png';
import arr04 from '../../static/images/es6/arr/arr04.png';
import arr05 from '../../static/images/es6/arr/arr05.png';
import arr06 from '../../static/images/es6/arr/arr06.png';
import arr07 from '../../static/images/es6/arr/arr07.png';
import arr08 from '../../static/images/es6/arr/arr08.png';
import arr09 from '../../static/images/es6/arr/arr09.png';
import arr10 from '../../static/images/es6/arr/arr10.png';
export default class ArrExtends extends Component{
  constructor(props){
    super(props);
    this.state={

    }
  }
  arrFromFun=()=>{
    let obj={
      0:1,
      1:2,
      2:3,
      length: 3
    }
    console.log(Array.from(obj)) // [1, 2, 3]
  }
  arrOfFun=()=>{
    console.log(Array.of(4,5,6));//[4,5,6]
  }
  findFun=()=>{
    let arr=[1,2,3];
    console.log(arr.find((n)=> n>1)); //2
  }
  findIndexFun=()=>{
    let arr=[1,2,3]
    console.log(arr.findIndex((n)=> n>1)); //1
  }
  fillFun=()=>{
    let arr =[1,3,5];
    console.log(arr.fill(8)); //[8,8,8]
    let arr1=[1,2,3];
    console.log(arr1.fill(6,1,2));//[1, 6, 3]
  }
  includesFun=()=>{
    let arr =[1,3,5];
    console.log(arr.includes(8)); //false
    console.log(arr.includes(3));//true
    console.log(arr.includes(3,2));//false
  }
  flatFun=()=>{
    let arr =[1,[98,76],[3,[2,6],5,7,9]];
    console.log(arr.flat());//[1,98,76,3,[2,6],5,7,9]  默认只会拉平一个维度
    console.log(arr.flat(2));//[1,98,76,3,2,6,5,7,9]
    console.log(arr.flat(Infinity));//[1,98,76,3,2,6,5,7,9]
  }
  componentDidMount(){
     this.arrFromFun();
     this.arrOfFun();
     this.findFun();
     this.findIndexFun();
     this.fillFun();
     this.includesFun();
     this.flatFun();
  }
  render(){
    return (
      <div>
          <h1>1.Array.from()方法用于将两类对象转为真正的数组</h1>
          <p><img src={arr03}/></p>
          <p><img src={arr04}/></p>
          <div>
            <p>注意：要将一个类数组对象转换为一个真正的数组，必须具备以下条件：</p>
            <p>1、该类数组对象必须具有length属性，用于指定数组的长度。如果没有length属性，那么转换后的数组是一个空数组。</p>
            <p>2、该类数组对象的属性名必须为数值型或字符串型的数字</p>
            ps: 该类数组对象的属性名可以加引号，也可以不加引号
          </div>
          <h1>2.Array.of方法用于将一组值，转换为数组。</h1>
          <p><img src={arr05}/></p>
          <h1>3.find，用于找出第一个符合条件的数组成员。(返回值是数组中符合条件的第一项)</h1>
          <p>
              <img src={arr06} />
          </p>
          <h1>4.findIndex(返回值是数组中符合条件的第一项的索引值)</h1>
          <p>
              <img src={arr07} />
          </p>
          <h1>5.fill 方法使用给定值，填充一个数组。接受三个参数（第一个是填充值，第二个参数是开始的位置，第三个参数是结束的位置）</h1>
          <p>
              <img src={arr08} />
          </p>
          <h1>6.includes 方法返回一个布尔值，表示某个数组是否包含给定的值。接受两个参数（第一个参数是需要判断的值，第二个参数是开始的位置）</h1>
          <p>
              <img src={arr09} />
          </p>
          <h1>7.flat （有时候数组里面继续嵌套数组，所以这个方法是把数组改为一维数组的方法）
                用于将嵌套的数组“拉平”，变成一维的数组。该方法返回一个新数组，对原数据没有影响。
                默认只会拉平一层，如果想拉平多层可以是传递参数，或者使用Infinity;
          </h1>
          <p>
              <img src={arr10} />
          </p>
      </div>
    )
  }
}
