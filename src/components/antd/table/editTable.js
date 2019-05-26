import React,{Component} from 'react';
import {Table,Divider,Modal} from 'antd';
import axios from 'axios';
import '../../../mock/table/tabledata';
import EditCellTable from './editCellTable';
const confirm = Modal.confirm;
const _ = require('lodash');
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
  //编辑
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
    let {curIndex,dataSource}=this.state;
    let curItem=dataSource[curIndex];
    curItem[key]=value;
    dataSource.splice(curIndex,1,curItem);
    this.setState({
        dataSource
    })
  }
  //保存
  onSaveData=(record,index)=>{
    let {dataSource}=this.state;
    delete record.editing;
    dataSource.splice(index,1,record);
    this.setState({
      dataSource
    });
    this.number=0;
  }
  //删除
  deleteRow=(index)=>{
    let {dataSource,curIndex}=this.state;
    confirm({
        title: '确定的删除吗？',
        onOk:()=>{
          dataSource.splice(index,1);
          if(this.number){
            curIndex=index<curIndex ?curIndex-1 :curIndex;

          }
          this.setState({
            dataSource,
            curIndex
          })
        }
      });

  }
  //取消
  onCancel=(index)=>{
    let {dataSource,curIndex}=this.state;
    delete dataSource[curIndex].editing;
    this.setState({
      dataSource
    });
    this.number=0;

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
                          names="age"
                          type="number"
                          onChange={this.onChange}
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
                          names="gender"
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
                          onChange={this.onChange}
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
                         names="address"
                         onChange={this.onChange}
                      />
             }
           },
           {
            title: 'operation',
            dataIndex: 'operation',
            render: (text, record,index) =>(
                <div>
                      {
                        record.editing ?
                         (<div><a href="javascipt:;" onClick={()=>this.onSaveData(record,index)}>保存</a>
                         <Divider type="vertical"/>
                         <a href="javascipt:;" onClick={()=>{this.onCancel(index)}}>取消</a></div>)
                     :
                         (<div><a href="javascipt:;" onClick={()=>{this.editRow('edit',index)}}>编辑</a>
                         <Divider type="vertical"/>
                         <a href="javascipt:;" onClick={()=>this.deleteRow(index)}>删除</a></div>)
                       }
                </div>
              )
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
