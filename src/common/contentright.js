import React,{Component} from 'react';
import { Menu, Divider } from 'antd';
import Introduction from '../components/react/introduction';
import HelloWrold from '../components/react/hellowrold';
import Jsxgrammar from '../components/react/jsxgrammar';
import LifeCycle from '../components/react/lifecycle';
import Notice from '../components/react/notice';
import State from '../components/react/state';
import ListRender from '../components/react/list';
import ReactForm from '../components/react/form'
import ParentProps from '../components/react/propsdemo/parent';
import { Link} from "react-router-dom";
import PropTypes from 'prop-types';
const MenuItem=Menu.Item;
class ContentRight extends Component{
    constructor(props){
      super(props);
    }
    showRight=(href)=>{
      switch (href) {
        case '/react/introduction':
              return  <Introduction />
              break;
        case '/react/hellowrold':
              return  <HelloWrold />
              break;
        case '/react/jsxgrammar':
              return  <Jsxgrammar />
              break;
        case '/react/lifecycle':
              return  <LifeCycle />
              break;
        case '/react/state':
            return  <State />
            break;
        case '/react/props':
            return  <ParentProps />
            break;
            case '/react/list':
            return  <ListRender />
            break;
        case '/react/form':
            return  <ReactForm />
            break;
        case '/react/notice':
              return  <Notice />
              break;
        default:
              return  <Introduction />
              break;
      }
    }
    render(){
       return(
         <div>
          {
            this.showRight(this.props.href)
          }
         </div>

       )

    }
}
ContentRight.contextTypes={
  href:PropTypes.string
}
export default ContentRight;
