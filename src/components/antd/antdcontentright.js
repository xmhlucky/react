import React,{Component} from 'react';
import TableOpen from './table';
import HorizontalForm from './antdHorizontalForm';
import AntdTree from './antdtree';
import AntdTransfer from './transfer';
import PropTypes from 'prop-types';
class AntdContentRight extends Component{
    constructor(props){
      super(props);
    }
    showRight=(href)=>{
      let arrHref=href.split('/');
      let newHref=arrHref[1]+'/'+arrHref[2];
      switch (newHref) {
        case 'antd/table':
              return  <TableOpen />
              break;
        case 'antd/form':
              return  <HorizontalForm />
              break;
        case 'antd/tree':
              return  <AntdTree />
              break;
        case 'antd/transfer':
              return  <AntdTransfer />
              break;
        default:
              return  <TableOpen />
              break;
      }
    }
    render(){
       return(
       <div>
        {
          this.showRight(this.props.href)
        }
       </div>

       )

    }
}
AntdContentRight.contextTypes={
  href:PropTypes.string
}
export default AntdContentRight;
