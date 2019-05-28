import React,{Component} from 'react';
import {Table,Input,Button,Icon} from 'antd';
import axios from 'axios';
import '../../../mock/table/tabledata';
export default class FilterTable extends Component{
  constructor(props){
    super(props);
    this.state={
        dataSource:null
    }
  }
  componentDidMount(){
      this.getData();
  }
  getData=()=>{
    console.log(2)
     axios.get('/table')
          .then((result)=>{
            this.setState({
              dataSource:result.data.checkTable
            })
          })
          .catch((result)=>{
            console.log(result)
          })
  }
  handleSearch = (selectedKeys, confirm) => {
    confirm();
    this.setState({ searchText: selectedKeys[0] });
  };
  handleReset=(clearFilters )=>{
    clearFilters();
     this.setState({ searchText: '' });
  }

  getColumnSearchProps=(dataIndex)=>({
    filterDropdown:({setSelectedKeys, selectedKeys, confirm, clearFilters})=>(
        <div style={{ padding: 8 }}>
          <Input
            ref={node => {
              this.searchInput = node;
            }}
            placeholder={`Search ${dataIndex}`}
            value={selectedKeys[0]}
            onChange={e => setSelectedKeys(e.target.value ? [e.target.value] : [])}
            onPressEnter={() => this.handleSearch(selectedKeys, confirm)}
            style={{ width: 188, marginBottom: 8, display: 'block' }}
          />
          <Button
            type="primary"
            onClick={() => this.handleSearch(selectedKeys, confirm)}
            icon="search"
            size="small"
            style={{ width: 90, marginRight: 8 }}
          >
            Search
          </Button>
          <Button onClick={() => this.handleReset(clearFilters)} size="small" style={{ width: 90 }}>
            Reset
          </Button>
        </div>
    ),
    filterIcon: filtered => (
      <Icon type="search" style={{ color: filtered ? '#1890ff' : undefined }} />
    ),
    onFilter: (value, record) =>
      record[dataIndex]
        .toString()
        .toLowerCase()
        .includes(value.toLowerCase()),
        onFilterDropdownVisibleChange: visible => {
            if (visible) {
              setTimeout(() => this.searchInput.select());
            }
        },
    render: text => {
        return text
    }
  });
  getColumns(){
    return [{
       key:'username',
       dataIndex:'username',
       title: 'username',
       filters:[{
            text: '胡彦祖',
            value: '胡彦祖'
       }],
       onFilter:(value,curItem)=>(curItem.username.includes(value)) //用于本地筛选的时候
    },
    {
       key:'age',
       dataIndex:'age',
       title: 'age',
       sorter: (a, b) => a.age - b.age  //排序
    },{
       key:'address',
       dataIndex:'address',
       title: 'address',
        ...this.getColumnSearchProps('address')
    }]
  }
  render(){
    let {dataSource}=this.state;
    return (
      <div className="filterTable">
          <Table
             dataSource={dataSource}
             columns={this.getColumns()}
          />
      </div>
    )
  }

}
