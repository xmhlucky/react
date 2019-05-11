import React,{Component} from 'react';
import { Link } from "react-router-dom";
import PrimaryReact from './primaryreact'
import { Menu } from 'antd';
import ContentEs from './contentEs';
import ContentAntd from './contentAntd';
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
   showContent=(href)=>{
     let hrefurl=href.split('/')[1];
       switch (hrefurl) {
         case 'react':
               return  <PrimaryReact href={href}/>
               break;
         case 'es6':
               return  <ContentEs href={href}/>
               break;
        case 'antd':
              return  <ContentAntd href={href}/>
              break;
         default:
               return  <PrimaryReact  href={href}/>
               break;
       }
   }
    componentWillReceiveProps(){
        this.getLocationHref();
    };
    render(){
        return this.showContent(this.state.href)

    }
}
export default ContentM;
