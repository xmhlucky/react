import React,{Component} from 'react';
import { Link} from "react-router-dom";
import {Layout, Menu } from 'antd';
import PropTypes from 'prop-types';
const MenuItem=Menu.Item;
const SubMenu = Menu.SubMenu;
class SiderLeft extends Component{
     static contextTypes={
       href:PropTypes.string
     }
    constructor(props){
      super(props);
       this.state={
         defaultSelectedKeys:''
       }
       this.slide=this.slide.bind(this);
    }
    componentWillReceiveProps(){
      let {href}=this.context;
      this.setState({
        defaultSelectedKeys:href
      })
    }
    slide=(item)=>{
      if(item.children && item.children.length>0){
         let itemChildren=item.children;
          return (
            <SubMenu key={item.key} title={item.text}>
               {
                 itemChildren.map((items)=>this.slide(items))
               }
            </SubMenu>
          )
      }else{
        return (
            <MenuItem key={item.key}>
                <Link to={item.router}>{item.text}</Link>
            </MenuItem>
        )
      }
    }
    render(){
        let { defaultSelectedKeys }=this.state;
        let siderBar=this.props.siderBar;
        return (
          <Menu theme="dark" defaultSelectedKeys={[defaultSelectedKeys]} mode="inline">
              {
                 siderBar && siderBar.map((item)=>this.slide(item))
              }
          </Menu>
        )
    }
}
export default SiderLeft;
