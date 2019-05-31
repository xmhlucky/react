import React, { Component } from 'react';
import PropTypes from 'prop-types';
import ReactContentRight from '../components/react';
import AntdContentRight from '../components/antd';
class ContentRight extends Component{
  static contextTypes = {
     href:PropTypes.string
  }
  constructor(props){
    super(props);
    this.state={
       href:''
    }
  }
  componentWillReceiveProps(){
    const {href}=this.context;
    this.setState({
      href
    })
  }
  showRight=()=>{
     const {href}=this.state;
     const hrefurl=href.split('/')[1];
       switch (hrefurl) {
         case 'react':
           return <ReactContentRight />
           break;
         case 'antd':
           return <AntdContentRight href={href}/>
           break;
         case 'es6':

           break;
         default:

       }

  }
  render(){
    return (
      <div>
        {
          this.showRight()
        }
      </div>
    )
  }
}
export default ContentRight
