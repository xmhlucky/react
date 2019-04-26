import React,{Component} from 'react';
import { Link} from "react-router-dom";
import { Menu } from 'antd';
const MenuItem=Menu.Item;
class HeaderM extends Component{
    render(){
        return (
            <div className="headerM">
              <Link to="/introduction" className="logo">前端分享</Link>
              <Menu mode="horizontal" theme="light" defaultSelectedKeys={['1']}>
                <MenuItem selectable="true" key="1">
                    <Link to="/introduction">初识react </Link>
                </MenuItem>
              </Menu>
            </div>
        )
    }
}
export default HeaderM;
