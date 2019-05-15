import React,{Component} from 'react';
import { Link} from "react-router-dom";
import { Menu } from 'antd';
const MenuItem=Menu.Item;
class HeaderM extends Component{
  constructor(props){
    super(props);
    this.state={
      defaultSelectedKeys:{}
    }

  }
  getLocationHref(){
    let href =window.location.pathname.split('/')[1];
    this.setState({
      defaultSelectedKeys:href ? [href] : 'react'
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
            <div className="headerM">
              <Link to="/react" className="logo">前端分享</Link>
              <Menu mode="horizontal" theme="light" defaultSelectedKeys={this.state.defaultSelectedKeys}>
                <MenuItem key="react">
                    <Link to="/react">初识react </Link>
                </MenuItem>
                
              </Menu>
            </div>
        )
    }
}
export default HeaderM;
