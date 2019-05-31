import React,{Component} from 'react';
import { Switch,Route,Link} from "react-router-dom";
import TableOpen from './table';
import AntdTree from './antdtree';
import AntdTransfer from './transfer';
import AntdForm from './form';
import PropTypes from 'prop-types';
class AntdContentRight extends Component{
    constructor(props){
      super(props);
    }
    render(){
       return(
           <div>
              <Switch>
                 <Route path="/antd/form/:name"  component={AntdForm}/>
                 <Route path="/antd/table/:name"  component={TableOpen}/>
                 <Route path="/antd/tree/:name"  component={AntdTree}/>
                 <Route path="/antd/transfer/:name"  component={AntdTransfer}/>
              </Switch>
           </div>
       )

    }
}
AntdContentRight.contextTypes={
  href:PropTypes.string
}
export default AntdContentRight;
