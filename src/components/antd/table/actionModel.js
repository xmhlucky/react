import React,{Component} from 'react';
import { Modal, Button,Form,Icon,InputNumber , Input,DatePicker } from 'antd';
const FormItem =Form.Item;

export default class ActionModel extends Component{
    constructor(props){
      super(props);
      this.state=({
        visible:props.visible,
        curItem:props.curItem,
      })
    }
    handleSubmit(){
    }
    handleOk  =()=>{
      this.props.form.validateFields((error,values)=>{
         if(!error){
            this.props.onOk(values);
            this.props.form.resetFields();
         }
      })
    }
    handleCancel=()=>{
      this.props.onCancel();
      this.props.form.resetFields();
    }
    componentWillReceiveProps(nextProps){
       let { visible }=this.state;
         this.setState({
           visible:nextProps.visible,
           curItem:nextProps.curItem
         })
    }
    render(){

      let { visible,curItem }=this.state;
      const formItemLayout ={
        labelCol:{span:4},
        wrapperCol:{span:18}
      }
      const { getFieldDecorator } = this.props.form;
      return (
            <Modal
                title="Basic Modal"
                visible={visible}
                onOk={(item)=>this.handleOk(item)}
                onCancel={this.handleCancel}
            >
                 <Form onSubmit={this.handleSubmit}
                       layout="vertical"
                 >
                      <FormItem
                          label="姓名："
                          {...formItemLayout}
                      >
                          {getFieldDecorator('username', {
                                initialValue:curItem.username,
                                rules: [{ required: true,
                                  message: '请输入用户名' }],
                              })(
                                <Input
                                  placeholder="用户名"
                                />
                          )}
                      </FormItem>
                      <FormItem
                          label="年龄："
                          {...formItemLayout}
                          value={curItem.age}
                      >
                          {getFieldDecorator('age', {
                                initialValue:curItem.age,
                                rules: [{ required: true,
                                  message: '请输入年龄' }],
                              })(
                                <InputNumber
                                  placeholder="用户名"

                                  style={{width:'100%'}}
                                />
                          )}
                      </FormItem>
                      <FormItem
                          label="地址："
                          {...formItemLayout}
                          value={curItem.address}
                      >
                          {getFieldDecorator('address', {
                                initialValue:curItem.address,
                                rules: [{ required: true,
                                  max:50,
                                  message: '请输入地址' }],
                              })(
                                <Input

                                  placeholder="请输入地址"
                                />
                          )}
                      </FormItem>
                 </Form>
              </Modal>
      )
    }
}
ActionModel = Form.create({})(ActionModel);
