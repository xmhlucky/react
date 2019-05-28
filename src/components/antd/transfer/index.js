import React,{Component} from 'react';
import { Switch, Route, Redirect } from 'react-router-dom';
import {Transfer} from 'antd';
import OrdinaryTransfer from './ordinaryTransfer';
import SearchTransfer from './searchTransfer';
import TransferTable from './tableTransfer';
import TransferTree from './treeTransfer';
export default class  AntdTransfer  extends Component{
    constructor(props){
      super(props);

    }
    render(){
      return(
        <div>
            <Switch>
               <Route path="/antd/transfer/ordinarytransfer"  component={OrdinaryTransfer}/>
               <Route path="/antd/transfer/searchtransfer"  component={SearchTransfer}/>
               <Route path="/antd/transfer/tabletransfer"  component={TransferTable}/>
               <Route path="/antd/transfer/treetransfer"  component={TransferTree}/>
            </Switch>
        </div>
      )
    }

}
