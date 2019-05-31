import React,{Component} from 'react';
import { Menu, Divider } from 'antd';
import Introduction from './introduction';
import HelloWrold from './hellowrold';
import Jsxgrammar from './jsxgrammar';
import LifeCycle from './lifecycle';
import Notice from './notice';
import State from './state';
import ListRender from './list';
import ReactForm from './form';
import ReactRef from './ref';
import ReactPropTypes from './propTypes';
import ReactContext from './context';
import ParentProps from './propsdemo/parent';
import { Switch,Route,Link} from "react-router-dom";
import PropTypes from 'prop-types';
const MenuItem=Menu.Item;
class ReactContentRight extends Component{
    static contextTypes={
      href:PropTypes.string
    }
    constructor(props){
      super(props);
      this.state={
        href:''
      }
    }
    componentWillReceiveProps(){
      let {href}=this.context;
      this.setState({
        href
      })
    }
    showRight=()=>{
      let {href}=this.state;
      switch (href) {
        case '/react/introduction':
              return  Introduction
              break;
        case '/react/hellowrold':
              return  HelloWrold
              break;
        case '/react/jsxgrammar':
              return  Jsxgrammar
              break;
        case '/react/lifecycle':
              return  LifeCycle
              break;
        case '/react/state':
            return  State
            break;
        case '/react/props':
            return  ParentProps
            break;
            case '/react/list':
            return  ListRender
            break;
        case '/react/form':
            return  ReactForm
            break;
        case '/react/proptypes':
            return  ReactPropTypes
            break;
        case '/react/ref':
            return  ReactRef
            break;
        case '/react/context':
            return  ReactContext
            break;
        case '/react/notice':
              return  Notice
              break;
        default:
              return Introduction
              break;
      }
    }
    render(){
      let {href}=this.state;
       return(
         <div>
            <Switch>
               <Route path={href}  component={this.showRight()}/>
            </Switch>
         </div>
       )
    }
}
ReactContentRight.contextTypes={
  href:PropTypes.string
}
export default ReactContentRight;
