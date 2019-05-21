import React,{Component} from 'react';
import axios from 'axios';
import { Table ,Input,Button,Divider,Icon,Modal,Menu, Dropdown} from 'antd';
import ActionModel from './actionModel';
import '../../../mock/table/tabledata';
import '../../../static/css/table/antdTable.css';
const Search = Input.Search;
const confirm = Modal.confirm;
export default class CheckTable extends Component{
    constructor(props){
      super(props);
      this.state={
        dataSource:[],
        visible:false,   //控制table展示隐藏
        curItem:[],
        curIndex:'',
        type:'',
        selectedRowKeys:["1","2"] //table选中状态值

      }
      this.getData.bind(this);
      this.getColumns.bind(this);
      this.onSearch.bind(this); //搜搜内容
      this.handleOk.bind(this);

    }
    handleMenuClick=(item, key, keyPath)=>{
      console.log(item.key);
    }
    getMenu(){
        return (
          <Menu onClick={this.handleMenuClick}>
            <Menu.Item key="1">更多1</Menu.Item>
            <Menu.Item key="2">更多2</Menu.Item>
            <Menu.Item key="3">更多3</Menu.Item>
          </Menu>
        )
    }
    handleVisibleChange=(visible)=>{
      console.log(visible)
    }
    //获取table数据
    getData =()=>{
      axios.get('/table')
           .then((result)=>{
               if(result.status){
                 console.log(result.data)
                 this.setState({
                   dataSource:result.data.checkTable
                 })
               }
           })
           .catch((error)=>{
              console.log(error)
           })
    }
    getColumns = ()=>{
      return ([
         {
            title: 'username',
            dataIndex: 'username',
            key: 'username',
            width: 150
          },
          {
            title: 'Age',
            dataIndex: 'age',
            key: 'age',
            width: 70,
          },
          {
            title: 'Address',
            dataIndex: 'address',
            key: 'address',
          },
          {
            title: 'Action',
            key: 'action',
            width: 360,
            render: (text, record,index) => (
              <span>
                <a href="javascript:;" onClick={()=>this.editRow('editRow',record,index)}>编辑</a>
                <Divider type="vertical" />
                <a href="javascript:;" onClick={()=>this.deleteRow(index)}>删除</a>
                <Divider type="vertical" />
                <Dropdown overlay={this.getMenu()}
                          onVisibleChange={this.handleVisibleChange}
                    >
                    <a className="ant-dropdown-link" href="#">
                       更多<Icon type="down" />
                    </a>
                </Dropdown>
              </span>
            ),
          }]
      )
    }
    editRow = (type,record,index)=>{
       this.setState({
         visible:true,
         type,
         curIndex:index,
         curItem:record
       })
    }
    addRow=(type)=>{
      this.setState({
        visible:true,
        type,
        curItem:{
          username:'',
          age:'',
          address:''
        }
      })
    }
    deleteRow=(index)=>{

      let { dataSource }=this.state;
      let self=this;
      confirm({
        title: '确定删除吗?',
        onOk(){
          dataSource.splice(index,1);
          self.setState({
            dataSource
          })
        }
      })
      this.setState({
        dataSource
      })
    }
    componentDidMount(){
        this.getData();
    }
    onSearch = (value)=>{

    }
    handleOk=(item)=>{
      let {type,dataSource,curIndex}=this.state;
      if(type=='addRow'){
         item.key=dataSource.length+1
          dataSource.push(item);
          this.setState({
            dataSource:dataSource,
            visible:false
          })
      }else{
         dataSource.splice(curIndex,1,item)
         this.setState({
           dataSource:dataSource,
           visible:false
         })
      }
    }

    handleCancel=()=>{
      this.setState({
        visible:false
      })
    }
    render(){
      let { dataSource,visible,curItem,selectedRowKeys}=this.state;
      const rowSelection = {
        selectedRowKeys,
        onChange: (selectedRowKeys, selectedRows) => {
           this.setState({
             selectedRowKeys
           })
          console.log(`selectedRowKeys: ${selectedRowKeys}`, 'selectedRows: ', selectedRows);
        },
        onSelectAll:(selected, selectedRows, changeRows)=>{
           this.setState({
             selectedRows
           })
        },
        //这个可以控制默认 默认状态是选中还是未选中。
        //可以配置disabled checked   等
        getCheckboxProps: record => {
           return (
             {
               disabled: record.username === '胡彦祖',
               username: record.username,
             }
           )
        }
      };
      return (
        <div>
            <div className="tableHeader">
                <div>
                     <Search className="searchInput"  placeholder="请输入要搜索的内容" onSearch={this.onSearch}/>
                </div>
                <div>
                   <Button type="primary" onClick={()=>this.addRow('addRow')}>新增</Button>
                </div>
            </div>
            <div>
            <Table
              rowSelection={rowSelection}
              dataSource={dataSource}
              columns={this.getColumns()}
            />
            </div>
            <ActionModel
               visible={visible}
               onOk={this.handleOk}
               onCancel={this.handleCancel}
               curItem={curItem}
            />
        </div>
      )
    }
}
