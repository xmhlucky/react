import React,{Component} from 'react';
import { Switch, Route, Redirect } from 'react-router-dom';
import PropTypes from 'prop-types';
import EditTable from './editTable'
class TableOpen extends Component{
      // 声明需要使用的Context属性
      static contextTypes = {
        href: PropTypes.string
      }
      render(){
        const {
           href
         } = this.context;
         let urlParams=href.split('/')[4];
         return (
           <div>
               <Switch>
                  <Route path="/antd/table/edittable" component={EditTable} />
               </Switch>
           </div>
         )
      }
}
export default TableOpen;
