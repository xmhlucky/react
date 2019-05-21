import React,{Component} from 'react';
import {Table,Divider} from 'antd';
import axios from 'axios';
import '../../../mock/table/tabledata';
import EditCellTable from './editCellTable';
export default class EditTable extends Component{
  constructor(props){
    super(props);
    this.state={
      dataSource:[],
      curIndex:'',

    }
    this.number=0;
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
         .catch((error)=>{
           console.log(error)
         })
  }
  editRow=(type,index)=>{
       let { dataSource }=this.state;
       let curItem=dataSource[index];
       let hasEditing=dataSource.filter((item)=>item.editing);
       if(hasEditing.length==0 && !this.number){
         curItem.editing=true;
         this.setState({
             dataSource,
             type,
             curIndex:index
         });
         this.number=1
       }
  }
  onChange=(key,value)=>{
    console.log(key,value)
  }
  getColumns(){
     return [
           {
              key:"username",
              title:"username",
              dataIndex:'username',
              render:(value,record,index)=>{
                return <EditCellTable
                          type="input"
                          editing={record.editing}
                          value={value}
                          names="username"
                          onChange={this.onChange}
                          rules={{
                                    require:true,
                                    max:3
                                  }
                                }
                       />
              }
           },
           {
              key:"age",
              title:"age",
              dataIndex:'age',
              render:(value,record,index)=>{
                return <EditCellTable
                          editing={record.editing}
                          value={value}
                          type="number"
                       />
              }
           },
           {
              key:"gender",
              title:"gender",
              dataIndex:'gender',
              render:(value,record,index)=>{
                return <EditCellTable
                          editing={record.editing}
                          value={value}
                          type="select"
                          options={[{
                            text:'保密',
                            value:''
                          },{
                            text:'男',
                            value:'man'
                          },{
                            text:'女',
                            value:'woman'
                          }]}
                       />
              }
           },
           {
             key:"address",
             title:"address",
             dataIndex:'address',
             render:(value,record,index)=>{
               return <EditCellTable
                         editing={record.editing}
                         value={value}
                      />
             }
           },
           {
            title: 'operation',
            dataIndex: 'operation',
            render: (text, record,index) =>{
               return (
                 <div>
                     <a href="javascipt:;" onClick={()=>this.editRow('edit',index)}>编辑</a>
                     <Divider type="vertical"/>
                     <a href="javascipt:;">删除</a>
                 </div>
               )
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
