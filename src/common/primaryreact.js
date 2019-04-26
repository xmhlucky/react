import React,{Component} from 'react';
import { Link} from "react-router-dom";
import SiderLeft from './siderleft'
import ContentRight from './contentright'
import {Layout, Menu } from 'antd';
let {Sider,Content} = Layout;
const MenuItem=Menu.Item;
class PrimaryReact extends Component{
  constructor(props){
    super(props);
  }
    render(){
      // let href=this.props.href;
      // console.log(href)
        return (
            <Layout>
                <Sider>
                    <SiderLeft href={this.props.href}/>
                </Sider>
                <Content style={{background:"#fff",margin:"20px",padding:20}}>
                    <ContentRight  href={this.props.href}/>
                </Content>

            </Layout>
        )
    }
}
export default PrimaryReact;
