import React,{Component} from 'react';
import {Form} from 'antd';
const FormItem=Form.Item;
class BindForm extends Component{
  constructor(props){
    super(props);
    this.state={
      names:props.name,
      initialValue:props.initialValue

    }
  }
  componentWillReceiveProps(nextprops){
     this.setState({
         names:nextprops.name,
         initialValue:nextprops.initialValue,
         label:nextprops.label
     })
  }
  render(){
      let {names,initialValue,label}=this.state;
      let {rules}=this.props;
      const formItemLayout ={
        labelCol:{span:4},
        wrapperCol:{span:18}
      }
      const { getFieldDecorator } = this.props.form;
      return(
        <Form>
           <FormItem
            label={label}
            {...formItemLayout}
           >
              {getFieldDecorator(names, {
                 rules,
                 initialValue
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
