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
  onChange=(e)=>{
     let { names }=this.props;
     this.props.onChange(names,e.target.value);
  }
  editRowContent=()=>{
     let {type,value,options,names}=this.state;
     let {rules}=this.props;
     switch (type) {
       case 'input':
         return <BindForm  names={names} initialValue={value} rules={rules}>
                   <Input onChange={(e)=>{this.onChange(e)}}/>
                </BindForm>
         break;
       case 'number':
          return <InputNumber value={value}/>
          break;
       case 'select':
         return <Select>
                   {
                     options && options.map((item)=><Option key={item.value} value={item.value}>{item.text}</Option>)
                   }
                </Select>
         break;
       default:
         return <Input value={value}/>

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
