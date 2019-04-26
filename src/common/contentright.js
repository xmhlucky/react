import React,{Component} from 'react';
import { Menu, Divider } from 'antd';
import Introduction from '../components/react/introduction';
import HelloWrold from '../components/react/hellowrold';
import Jsxgrammar from '../components/react/jsxgrammar';
import LifeCycle from '../components/react/lifecycle';
import Notice from '../components/react/notice';
import State from '../components/react/state';
import ParentProps from '../components/react/propsdemo/parent';
import { Link} from "react-router-dom";
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
export default ContentRight;
