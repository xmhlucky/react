import React,{Component} from 'react';
import { Form,Input ,Tooltip,InputNumber,Select} from 'antd';
const FormItem=Form.Item;
class BindForm extends Component{
  constructor(props){
    super(props);
    this.state={
      names:props.name,
      initialValue:props.initialValue,
      rules:props.rules?props.rules:[]
    }
  }
  componentWillReceiveProps(nextprops){

     this.setState({
         names:nextprops.name,
         initialValue:nextprops.initialValue,
         rules:nextprops.rules?nextprops.rules:[]
     })
  }
  render(){
      let {names,initialValue,rules}=this.state;
      const formItemLayout ={
        labelCol:{span:4},
        wrapperCol:{span:18}
      }
      const { getFieldDecorator } = this.props.form;
      return(
        <Form>
           <FormItem>
              { getFieldDecorator(names, {
                 initialValue,
                 rules
              })(
                 this.props.children
              )}
          </FormItem>
        </Form>
      )
  }
}
BindForm = Form.create({})(BindForm);
export default BindForm;
