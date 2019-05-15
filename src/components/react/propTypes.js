import React,{Component} from 'react';
import propTypesFile1 from '../../static/images/react/propTypes/propTypesFile1.png';
import propTypesFile2 from '../../static/images/react/propTypes/propTypesFile2.png';
import propTypesImg from '../../static/images/react/propTypes/propTypes.png';
import propDetaultImg from '../../static/images/react/propTypes/propDefault.png';
class ReactPropTypes extends Component{
    constructor(props){
      super(props);
    }
    render(){
      return (
        <div>
            <h2>propTypes介绍</h2>
            <p>
                随着你的应用程序不断增长，你可以通过类型检查捕获大量错误。对于某些应用程序来说，
                你可以使用 Flow 或 TypeScript 等 JavaScript 扩展来对整个应用程序做类型检查。
                但即使你不使用这些扩展，React 也内置了一些类型检查的功能。要在组件的 props 上进行类型检查，你只需配置特定的 propTypes 属性：
            </p>
            <div>
                <h2>propTypes</h2>
                <p>
                  <img src={propTypesFile1} alt="propTypesFile1" />
                </p>
                <p>
                  <img src={propTypesFile2} alt="propTypesFile2" />
                </p>
            </div>
            <div>
               <h2>教程</h2>
               <div>
                     <h3>使用方法：</h3>
                     <p>1.需要先安装：npm install prop-types</p>
                     <p>2.组件中引入{`import PropTypes from 'prop-types'`}</p>
               </div>
               <p>
                 <img src={propTypesImg} alt="propTypesImg" />
               </p>
               <p>
                 <img src={propDetaultImg} alt="propDetaultImg" />
               </p>
            </div>
        </div>
      )
    }
}
export default ReactPropTypes;
