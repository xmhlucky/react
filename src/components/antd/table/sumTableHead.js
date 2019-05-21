import React,{Component} from 'react';
import { Table } from 'antd';
import axios from 'axios';
import '../../../mock/table/tabledata';
export default class SumTableHead extends Component{
  constructor(props){
    super(props);
    this.state={
      dataSource:[]
    }
  }
  componentDidMount(){
    this.getData();
  }
  getData=()=>{
    axios.get('/table')
         .then((result)=>{
            this.setState({
              dataSource:result.data.sunTableHead
            })
         })
         .catch((result)=>{

         })
  }
  getColumns(){
    return [
      {
         key:"username",
         title:"username",
         dataIndex:'username',
         render:(value,record,index)=>{
           if(index<4){
             return <a href="javascipt:;">{value}</a>
           }
         }
      },
      {
         key:"age",
         title:"基本信息",
         colSpan: 2,
         dataIndex:'age'
      },
      {
         key:"gender",
         title:"gender",
         colSpan:0,
         dataIndex:'gender'         
      },
      {
         key:"address",
         title:"address",
         dataIndex:'address',
         render:(value,record,index)=>{
            const obj = {
              children: value,
              props: {},
            };
           if(index==2){
             obj.props.rowSpan=2
           }
           if(index==3){
             obj.props.rowSpan=0
           }
           return obj;
         }
      }

  ]
  }
  render(){
    let {dataSource}=this.state;
    return (
      <div>
          <Table
              dataSource={dataSource}
              columns={this.getColumns()}
          />
      </div>
    )
  }
}
