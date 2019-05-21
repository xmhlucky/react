import React,{Component} from 'react';
import {Table} from 'antd';
import axios from 'axios';
import '../../../mock/table/tabledata'
export default class UnfoldTable extends Component{
  constructor(props){
    super(props);
    this.state={
      dataSource:[]
    }
  }
  componentDidMount(){
     this.getData();
  }
  getColumns=()=>{
    return [{
      key:'username',
      title:'username',
      dataIndex:'username'
    },{
      key:'age',
      title:'age',
      dataIndex:'age'
    },{
      key:'address',
      title:'address',
      dataIndex:'address'
    }]
  }
  getData=()=>{
    axios.get('/table')
         .then((result)=>{
           this.setState({
             dataSource:result.data.unfoldTable
           })
         })
         .catch((result)=>{

         })
  }
  render(){
    let {dataSource} = this.state;
    return(
      <div>
        <Table
           expandedRowRender={record => <p style={{ margin: 0 }}>{record.description}</p>}
           dataSource={dataSource}
           columns={this.getColumns()}
        />
      </div>
    )
  }
}
