import React,{Component} from 'react';
import TabTable from './antdtabtable';
import HorizontalForm from './antdHorizontalForm';
import AntdTree from './antdtree';
import EditTable from './edittable'
import PropTypes from 'prop-types';
class AntdContentRight extends Component{
    constructor(props){
      super(props);
    }
    showRight=(href)=>{
      switch (href) {
        case '/antd/table':
              return  <TabTable />
              break;
        case '/antd/form':
              return  <HorizontalForm />
              break;
        case '/antd/tree':
              return  <AntdTree />
              break;
        case '/antd/tabtable':
              return  <TabTable />
              break;
        case '/antd/edittable':
              return  <EditTable />
              break;
        default:
              return  <TabTable />
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
