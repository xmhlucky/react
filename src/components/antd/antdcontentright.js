import React,{Component} from 'react';
import TableOpen from './table';
import HorizontalForm from './antdHorizontalForm';
import AntdTree from './antdtree';
import EditTable from './table/editTable';
import FilterTable from './table/filterTable';
import PropTypes from 'prop-types';
class AntdContentRight extends Component{
    constructor(props){
      super(props);
    }
    showRight=(href)=>{
      switch (href) {
        case '/antd/table':
              return  <TableOpen />
              break;
        case '/antd/form':
              return  <HorizontalForm />
              break;
        case '/antd/tree':
              return  <AntdTree />
              break;
        case '/antd/tabtable':
              return  <TableOpen />
              break;
        case '/antd/filtertable':
              return  <FilterTable />
              break;
        case '/antd/edittable':
              return  <EditTable />
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
