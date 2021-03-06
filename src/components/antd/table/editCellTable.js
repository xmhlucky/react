import React,{Component} from 'react';
import BindForm from './bindForm';
import { Input ,Tooltip,InputNumber,Select} from 'antd';
const Option =Select.Option;
export default class EditCellTable extends Component{
  constructor(props) {
    super(props);
    this.state={
       editing:props.editing,
       value:props.value,
       type:props.type,
       options:props.options,
       names:props.names,
       rules:props.rules
    }
  }
  componentWillReceiveProps(nextProps){
     this.setState({
       value:nextProps.value,
       editing:nextProps.editing,
       type:nextProps.type,
       options:nextProps.options,
       names:nextProps.names,
       rules:nextProps.rules
     })
  }
  onChange=(value)=>{
     let { names }=this.props;
     this.props.onChange(names,value);
     this.setState({
       [names]:value
     })
  }
  editRowContent=()=>{
     let {type,value,options,names,rules}=this.state;
     let props=this.props;
     switch (type) {
       case 'input':
         return <Input {...props} value={value} onChange={(e)=>{this.onChange(e.target.value)}}/>
         break;
       case 'number':
          return <InputNumber {...props}  value={value} onChange={(val)=>{this.onChange(val)}}/>
          break;
       case 'select':
         return <Select {...props} value={value} onChange={(val)=>{this.onChange(val)}}>
                   {
                     options && options.map((item)=><Option key={item.value} value={item.value}>{item.text}</Option>)
                   }
                </Select>
         break;
       default:
         return <Input value={value} {...props} onChange={(e)=>{this.onChange(e.target.value)}}/>

     }
  }
  render(){
    let {editing,value} =this.state;
    return (
      <div>
       {
         editing ?
         this.editRowContent() :
         (<Tooltip title={value}>
            <span>{value}</span>
          </Tooltip>)
       }
      </div>
    )
  }
}
