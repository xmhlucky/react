import React,{Component} from 'react';
import { Layout, Menu, Icon } from 'antd';
import HeaderM from './common/header';
import ContentM from './common/contentM';
import Router from './router';
import 'antd/dist/antd.css';
import './static/css/common.css';
const { Header, Content,Sider} = Layout;
class App extends Component{
  constructor(props){
      super(props);
  };

  render(){
    return (
      <div className="App">
          <Layout>
            <Header>
                <HeaderM />
            </Header>
            <ContentM />
          </Layout>
      </div>
    )
  }
}
export default App;
