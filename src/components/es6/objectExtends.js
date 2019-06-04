import React,{Component} from 'react';
import obj01 from '../../static/images/es6/obj/obj01.png';
import obj02 from '../../static/images/es6/obj/obj02.png';
import obj03 from '../../static/images/es6/obj/obj03.png';
import obj04 from '../../static/images/es6/obj/obj04.png';
import obj05 from '../../static/images/es6/obj/obj05.png';
class ObjectExtends extends Component{
  constructor(props){
    super(props);
    this.state={

    }
  }
  assignFun=()=>{
    const target = { a: 1 };
    const source1 = { b: 2 };
    const source2 = { c: 3 };
    console.log(Object.assign(target,source1,source2))
    //{a:1,b:2,c：3}
  }
  objectKey=()=>{
    const target = { a: 1,b:2,c:3,d:4 };
    console.log(Object.keys(target)); //["a", "b", "c", "d"]  键名
  }
  objectValues=()=>{
    const target = { a: 1,b:2,c:3,d:4 };
    console.log(Object.values(target)); //[1, 2, 3, 4] 键值
  }
  objecteEtries=()=>{
    const target = { a: 1,b:2,c:3,d:4 };
    console.log(Object.entries(target)); //["a", 1] ["b", 2] ["c", 3] ["d", 4]
  }
  // objectFromEntries=()=>{
  //   const target = new Map([["a", 1],["b", 2],["c", 3],["d", 4]]);
  //   const obj = Object.fromEntries(target);
  //   console.log(obj) //{ a: 1,b:2,c:3,d:4 }
  // }
  componentDidMount(){
     this.assignFun();
     this.objectKey();
     this.objectValues();
     this.objecteEtries();
  }
  render(){
    return (
      <div>
          <h1>对象的扩展（常用）</h1>
          <h1>1.Object.assign 方法用于对象的合并</h1>
          <p>
             <img src={obj01} />
          </p>
          <h1>2.Object.keys 返回一个数组，成员是参数对象自身的（不含继承的）所有可遍历（enumerable）属性的键名。</h1>
          <p>
             <img src={obj02} />
          </p>
          <h1>3.Object.value 返回一个数组，成员是参数对象自身的（不含继承的）所有可遍历（enumerable）属性的键值。</h1>
          <p>
             <img src={obj03} />
          </p>
          <h1>4.Object.entries 返回一个数组，成员是参数对象自身的（不含继承的）所有可遍历（enumerable）属性的键值对数组。</h1>
          <p>
             <img src={obj04} />
          </p>
          <h1>5.Object.fromEntries() 法是Object.entries()的逆操作，返回一个对象，用于将一个键值对数组转为对象。(2019新增)</h1>
          <p>
             <img src={obj05} />
          </p>
      </div>
    )
  }
}
export default ObjectExtends;
