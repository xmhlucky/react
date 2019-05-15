import React,{Component} from 'react';
import ReactContextImg1 from '../../static/images/react/context/ReactContextImg1.png';
import ReactContextImg2 from '../../static/images/react/context/ReactContextImg2.png';
import ReactContextImg3 from '../../static/images/react/context/ReactContextImg3.png';
import ReactContextImg4 from '../../static/images/react/context/ReactContextImg4.png';
export default class ReactContext extends Component{

  render(){
    return (
        <div>
            <h2>Context介绍</h2>
            <p>官网对于使用Context的场景是这样描述的：</p>
            <p>单说就是，当你不想在组件树中通过逐层传递props或者state的方式来传递数据时，
            可以使用Context来实现跨层级的组件数据传递。</p>
            <p>
             <img src={ReactContextImg1} alt="ReactContextImg1" style={{width:500}}/>
            </p>
            <p>
             <img src={ReactContextImg2} alt="ReactContextImg2" style={{width:500}}/>
            </p>
            <h2>Context使用方法</h2>
            <div>
                <p>
                   1.在父组件声明传递给子组件的变量，并规定传递变量的名称，如下图：
                </p>
                <p>
                   <img src={ReactContextImg3} alt="ReactContextImg3"/>
                </p>
                <p>
                   2.在使用变量的子组件中，获取所需要的值
                </p>
                <p>
                   <img src={ReactContextImg4} alt="ReactContextImg4"/>
                </p>
            </div>
        </div>

    )
  }
}
