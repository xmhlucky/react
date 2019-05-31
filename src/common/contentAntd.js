import React,{Component} from 'react';
import AntdSiderLeft from '../components/antd/antdsiderleft';
import AntdContentRight from '../components/antd/antdcontentright';
import PropTypes from 'prop-types'

class ContentAntd extends Component{
  static contextTypes = {
     href:PropTypes.string
  }
  constructor(props){
    super(props);
    this.state={
      siderBar:[]
    }

  }


  render(){
return ('')

  }
}
export default ContentAntd;
