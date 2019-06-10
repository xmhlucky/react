import React,{Component} from 'react';
import { Link } from "react-router-dom";
import PropTypes from 'prop-types'
import '../mock/siderleft.js';
import ContentRight from './contentright';
import SiderLeft from './siderleft';
import axios from 'axios';
import {Layout,Menu} from 'antd';
let {Sider,Content} = Layout;
const MenuItem=Menu.Item;
class ContentM extends Component{
   constructor(props){
     super(props);
     this.state={
       href:'',
       siderBar:[]
     }
   };
   getLocationHref=()=>{
     var href =window.location.pathname;
     this.setState({
       href:href
     },()=>{
       this.setLeftBar();
     });
   }
    static contextTypes = {
       href:PropTypes.string
    }
    getChildContext () {
        let { href } = this.state;
        return { href };
    }
    setLeftBar=()=>{
      const {href,siderBar} =this.state;
      const hrefurl=href.split('/')[1];
      let bar=[];
      axios.get('/siderbar')
           .then((result)=>{
              switch (hrefurl) {
                case 'react':
                  bar=result.data.reactsiderbar;
                  break;
                case 'antd':
                  bar=result.data.antdsiderbar;
                  break;
                case 'es6':
                  bar=result.data.essiderbar;
                  break;
                case 'redux':
                  bar=result.data.reduxsiderbar;
                  break;
                case 'router':
                  bar=result.data.reactRouter;
                  break;
                default:
                 bar=result.data.reactsiderbar;
              }
              this.setState({
                siderBar:bar
              });
           })
           .catch((error)=>{
              console.log(error)
           })
    }
   componentDidMount(){
     this.getLocationHref();
   }
   componentWillReceiveProps(){
     this.getLocationHref();
   }
    render(){
        return (
            <Layout>
                <Sider>
                    <SiderLeft siderBar={this.state.siderBar}/>
                </Sider>
                <Content style={{background:'#fff',padding:20}}>
                    <ContentRight />
                </Content>
            </Layout>
        )

    }
}
ContentM.childContextTypes ={
  href: PropTypes.string
}
export default ContentM;
