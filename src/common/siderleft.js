import React,{Component} from 'react';
import { Link} from "react-router-dom";
import {Layout, Menu } from 'antd';
const MenuItem=Menu.Item;
class SiderLeft extends Component{
    constructor(props){
      super(props);
       this.state={
         defaultSelectedKeys:this.props.href=='/' || this.props.href=='/react'? ['/react/introduction']:[this.props.href]
       }
    }

    render(){
        let siderBar=this.props.siderBar;
        return (
          <Menu theme='dark' defaultSelectedKeys={this.state.defaultSelectedKeys}>
              {
                siderBar.map((item,index)=>{
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
export default SiderLeft;
