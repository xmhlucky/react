import React,{Component} from 'react';
import { Link} from "react-router-dom";
import SiderLeft from './siderleft'
import ContentRight from './contentright'
import {Layout, Menu } from 'antd';
import axios from 'axios';
import '../mock/siderleft.js'
let {Sider,Content} = Layout;
const MenuItem=Menu.Item;
class PrimaryReact extends Component{
  constructor(props){
    super(props);
    this.state={
      siderBar:[]
    }
  }
  componentWillMount(){
    axios.get('/siderbar')
         .then((result)=>{
            this.setState({
              siderBar:result.data.reactsiderbar
            });
         })
         .catch((error)=>{
            console.log(error)
         })
  }
    render(){
        return (
            <Layout>
                <Sider>
                    <SiderLeft href={this.props.href} siderBar={this.state.siderBar}/>
                </Sider>
                <Content style={{background:"#fff",margin:"20px",padding:20}}>
                    <ContentRight  href={this.props.href}/>
                </Content>
            </Layout>
        )
    }
}
export default PrimaryReact;
