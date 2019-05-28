import React,{Component} from 'react';
import axios from 'axios';
import {Table} from 'antd';
import '../../../mock/table/tabledata';
export default class NestTable extends Component{
  constructor(props){
    super(props);
    this.state={
      dataSource:null,
      nestDataSource:{}
    }
  }
  componentDidMount(){
    axios.get('/table')
         .then((result)=>{
           if(result.status==200){
               this.setState({
                 dataSource:result.data.checkTable
               })
           }

         })
  }
  getColumns(){
      return [
          {
           key:"username",
           dataIndex:"username",
           title:"username"
         },
         {
          key:'age',
          dataIndex:'age',
          title:"age"
         },
         {
           key:'address',
           dataIndex:'address',
           title:"address"
         }
       ]
    }
    nestGetColumns(){
        return [
            {
             key:"username",
             dataIndex:"username",
             title:"username"
           },
           {
            key:'age',
            dataIndex:'age',
            title:"age"
           },
           {
             key:'address',
             dataIndex:'address',
             title:"address"
           },
           {
              key:'gender',
              dataIndex:'gender',
              title:"gender"
           }
         ]
      }
      //这个方法可以解决点击的时候  请求数据  实现每个table展示的内容不一样的问题
      // 注意这时的table数据 使用的对象格式 {key：value}
  onExpand=(expanded, record)=>{
    //第一个参数反应的是true false  true代表打开  false代表合起    record代表展开行的相应的信息
    //所以可以使用这个方法，分别请求各自的数据。
    //所以可以使用这个方法，分别请求各自的数据。
    //所以可以使用这个方法，分别请求各自的数据。
    let key=record.key;
    let {nestDataSource}=this.state;
    if(key==1){
      axios.get('/table')
           .then((result)=>{
             if(result.status==200){
                 nestDataSource[key]=result.data.unfoldTable;
                 this.setState({
                   nestDataSource:nestDataSource
                 });
             }
           })
    }else{
      axios.get('/table')
           .then((result)=>{
             if(result.status==200){
                 nestDataSource[key]=result.data.sunTableHead
                 this.setState({
                   nestDataSource:nestDataSource
                 })
             }

           })
    }
     this.expandedRowRender(record);

  }
  expandedRowRender=(record)=>{
    let {nestDataSource}=this.state;
    let key=record.key;
    return <Table columns={this.nestGetColumns()} dataSource={nestDataSource[key]} pagination={false} />;
  }
  expandedRows=(expandedRows)=>{
    //返回结果是第几行展开了
    // console.log(expandedRows)
  }
  render(){
    let {dataSource} =this.state;

    return (
      <div>
         <Table
            dataSource={dataSource}
            expandedRowRender={this.expandedRowRender}
            columns={this.getColumns()}
            onExpand={(expanded, record)=>this.onExpand(expanded, record)}
            onExpandedRowsChange={this.expandedRows}
         />
      </div>
    )
  }
}
