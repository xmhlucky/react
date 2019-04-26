import React,{Component} from 'react';
import { Link } from "react-router-dom";
 import PrimaryReact from './primaryreact'
import { Menu } from 'antd';
const MenuItem=Menu.Item;
class ContentM extends Component{
   constructor(props){
     super(props);
     this.state={
       href:''
     }
   };
   getLocationHref(){
     var href =window.location.pathname;
     this.setState({
       href:href
     });
   }
   componentWillMount(){
        this.getLocationHref();
   }
  componentWillReceiveProps(){
        this.getLocationHref();
    };
    render(){
        return (
              <PrimaryReact  href={this.state.href}/>
        )
    }
}
export default ContentM;
