import React,{Component} from 'react';
import { Link} from "react-router-dom";
import {Layout, Menu } from 'antd';
const MenuItem=Menu.Item;
const SubMenu = Menu.SubMenu;
class AntdSiderLeft extends Component{
    constructor(props){
      super(props);
       this.state={
         defaultSelectedKeys:this.props.href=='/' || this.props.href=='/antd'? ['/antd/table']:[this.props.href]
       }
    }
    // slide=(item,index)=>{
    //   if(item.children && item.children.length>0){
    //     return (
    //       <MenuItem key={item.key}>
    //       {this.slide(item,index).bind(this)}
    //       </MenuItem>
    //     )
    //   }
    //   return ()
    // }
    render(){
        let siderBar=this.props.siderBar;
        return (
          <Menu theme='dark' defaultSelectedKeys={this.state.defaultSelectedKeys}>
              {
                siderBar.map((item,index)=>{
                  if(item.children && item.children.length>0){
                      item.children.map((items,index)=>{
                          return (
                            <SubMenu key={item.router} title={item.text}>
                              <MenuItem key={items.key}>
                                  <Link to={items.router}>{items.text}</Link>
                              </MenuItem>
                            </SubMenu>
                          )
                      })
                  }
                  return (
                    <MenuItem key={item.key}>
                        <Link to={item.router}>{item.text}</Link>
                    </MenuItem>
                  )
                })
              }

          </Menu>
        )
    }
}
export default AntdSiderLeft;
