import  React,{Component} from 'react';
import promise01 from '../../static/images/es6/promise/promise01.png';
import promise02 from '../../static/images/es6/promise/promise02.png';
import promise03 from '../../static/images/es6/promise/promise03.png';
export default class EsPromise extends Component{
  constructor(props){
    super(props);
    this.state={
       bool:true
    }
  }
  componentDidMount(){
    const p1=new Promise((resolve,reject)=>{  //先获取
        if(true){
          var a=[1,2,3];
          resolve(a);
        }else{
          reject('错误');
        }
    })
    const p2=new Promise((resolve,reject)=>{  //先获取
        if(true){
          var b=[4,5,6]
          resolve(b)
        }else{
          reject('错误')
        }
      })
    const p = Promise.all([p1, p2]);
    p.then((value)=>{
      console.log(value[0].concat(value[1]))
    })
    .catch((error)=>{
      console.log(error)
    })
  }
  render(){
    return (
      <div>
          <p>
              Promise 是异步编程的一种解决方案，比传统的解决方案——回调函数和事件——更合理和更强大。
          </p>
          <h2>
              使用方法：
          </h2>
          <p>
             <img src={promise01} />
          </p>
          <p>
             <img src={promise02} />
          </p>
          <p>
             Promise.all方法用于将多个 Promise 实例，包装成一个新的 Promise 实例。
          </p>
          <p>
             <img src={promise03} />
          </p>
      </div>
    )
  }
}
