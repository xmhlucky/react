import React,{Component} from 'react';
import { Link} from "react-router-dom";
import {Layout, Menu } from 'antd';
import PropTypes from 'prop-types';
const MenuItem=Menu.Item;
const SubMenu = Menu.SubMenu;
class AntdSiderLeft extends Component{
    constructor(props){
      super(props);
       this.state={
         defaultSelectedKeys:this.props.href=='/' || this.props.href=='/antd'? ['/antd/table']:[this.props.href]
       }
       this.slide=this.slide.bind(this);
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
    static contextTypes = {
       href:PropTypes.string
    }
    render(){
        const { href }=this.context;
        let siderBar=this.props.siderBar;
        return (
          <Menu theme="dark" defaultSelectedKeys={[href]} mode="inline" defaultOpenKeys={['/antd/table']}>
              {
                 siderBar.map((item)=>this.slide(item))
              }
          </Menu>
        )
    }
}
export default AntdSiderLeft;
