import React,{Component}from 'react';
import "./tab.css";
import axios from 'axios';
import '../../mock/table.js';
import { Tabs,Table,Form, Radio,Divider } from 'antd';
const TabPane = Tabs.TabPane;
const FormItem = Form.Item;
const EditableContext = React.createContext();
class TabTable extends Component{
  constructor(props){
    super(props);
    this.state={
      activeKey:"1",
      commoncolumnstable:[],
      commondataSource:[], //数据数组
      checktable:[],
      rowSelection:{
          type:"radio", //checkbox or radio   默认checkbox
          onChange:(selectedRowKeys, selectedRows)=>{
              console.log(selectedRowKeys)
          },
          onSelect:(record, selected, selectedRows, nativeEvent)=>{
            console.log(record)
          }
      },
    }
  }
  
  componentWillMount(){
    axios.get('/tabtable')
         .then((result)=>{
           var commondataSource=result.data.commontable.dataSource
           this.setState({
             commondataSource:commondataSource,
             commoncolumnstable:[
               {
                title: '序号',
                width:80,
                render:(text,record,index)=>`${index+1}`
              },
               {
                 title: '姓名',
                 dataIndex: 'username'
              },
                {title: '年龄',
                 dataIndex: 'age'
               },
               {title: '年级',
                dataIndex: 'grade'
              },
              {
                title: 'Action', dataIndex: '',
                render: () => (<span><a href="javascript:;">编辑</a> <Divider type="vertical" /><a href="javascript:;">删除</a></span>)

              }

            ],
             checktablecolumnstable:[
                {
                  title: '序号',
                  width:80,
                  render:(text,record,index)=>`${index+1}`
                },

                {
                  title: '姓名',
                  dataIndex: 'username'
                },
                  {title: '年龄',
                  dataIndex: 'age'

                },
                {title: '年级',
                  dataIndex: 'grade'
                },
                {
                  title: 'Action', dataIndex: '',
                  render: (text, record) => (<span><a href="javascript:;" onClick={() => this.edit(record.key)}>编辑</a> <Divider type="vertical" />
                  <a href="javascript:;">删除</a></span>)

                }
              ],

           })

         })
         .catch((error)=>{

         })

  }
  onchangeradio(e){
    this.setState({
      activeKey:e.target.value
    });
  }

  render(){
    return (
      <div className="tabtable">
        <Radio.Group  style={{ marginBottom: 8 }} defaultValue="1"  onChange={this.onchangeradio.bind(this)}>
            <Radio.Button value="1">普通table</Radio.Button>
            <Radio.Button value="2">带多选框的table</Radio.Button>
            <Radio.Button value="3">table嵌套table</Radio.Button>
            
        </Radio.Group>
        <Tabs activeKey={this.state.activeKey} defaultActiveKey="1">
          <TabPane tab="" key="1">
              <Table columns={this.state.commoncolumnstable} dataSource={this.state.commondataSource}/>
          </TabPane>
          <TabPane  tab="" key="2">
              <Table rowSelection={this.state.rowSelection} columns={this.state.commoncolumnstable} dataSource={this.state.commondataSource}/>
          </TabPane>
          <TabPane  tab="" key="3">
          <Table columns={this.state.commoncolumnstable} dataSource={this.state.commondataSource}/>
          </TabPane>
          
        </Tabs>
      </div>
    )
  }
}

export default TabTable;
