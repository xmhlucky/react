import React,{Component} from 'react';
import AntdSiderLeft from '../components/antd/antdsiderleft';
import AntdContentRight from '../components/antd/antdcontentright';
import '../mock/siderleft.js';
import axios from 'axios';
import {Layout} from 'antd';
let {Sider,Content} = Layout;
class ContentAntd extends Component{
  constructor(props){
    super(props);
    this.state={
      antdSiderBar:[]
    }
  }
  componentWillMount(){
    axios.get('/siderbar')
         .then((result)=>{
            this.setState({
              antdSiderBar:result.data.antdsiderbar
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
                <AntdSiderLeft href={this.props.href} siderBar={this.state.antdSiderBar}/>
            </Sider>
            <Content style={{background:'#fff',padding:20}}>
                <AntdContentRight  href={this.props.href}/>
            </Content>
        </Layout>
    )
  }
}
export default ContentAntd;
