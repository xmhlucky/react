import React,{Component} from 'react';
import { Switch, Route, Redirect } from 'react-router-dom';
import PropTypes from 'prop-types';
import EditTable from './editTable';
import FilterTable from './filterTable';
import UnfoldTable from './unfoldTable';
import SumTableHead from './sumTableHead';
import NestTable from './nestTable';
import TableParams from './tableParams';
import CheckTable from './checkTable';
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
                  <Route path="/antd/table/checktable" component={CheckTable} />
                  <Route path="/antd/table/filtertable" component={FilterTable} />
                  <Route path="/antd/table/unfoldtable" component={UnfoldTable} />
                  <Route path="/antd/table/sumtablehead" component={SumTableHead} />
                  <Route path="/antd/table/nesttable" component={NestTable} />
               </Switch>
           </div>
         )
      }
}
export default TableOpen;
