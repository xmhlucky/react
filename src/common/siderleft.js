import React,{Component} from 'react';
import { Menu, Divider } from 'antd';
import { Link} from "react-router-dom";
const MenuItem=Menu.Item;
class SiderLeft extends Component{
    constructor(props){
      super(props);
       this.state={
         defaultSelectedKeys:this.props.href=='/' ? ['/react/introduction']:[this.props.href]
       }
    }
    render(){
        return (
          <Menu theme='dark' defaultSelectedKeys={this.state.defaultSelectedKeys}>
              <MenuItem key="/react/introduction">
                  <Link to="/react/introduction">react简介</Link>
              </MenuItem>
              <MenuItem key="/react/hellowrold">
                  <Link to="/react/hellowrold">HelloWrold</Link>
              </MenuItem>
              <MenuItem key="/react/jsxgrammar">
                  <Link to="/react/jsxgrammar">jsx语法</Link>
              </MenuItem>
              <MenuItem key="/react/state">
                  <Link to="/react/state">state</Link>
              </MenuItem>
                <MenuItem key="/react/props">
                    <Link to="/react/props">props</Link>
                </MenuItem>
              <MenuItem key="/react/notice">
                  <Link to="/react/notice">注意事项</Link>
              </MenuItem>
                <MenuItem key="/react/lifecycle">
                    <Link to="/react/lifecycle">生命周期</Link>
                </MenuItem>
          </Menu>
        )
    }
}
export default SiderLeft;
