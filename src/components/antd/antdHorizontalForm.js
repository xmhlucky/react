import React, { Component } from 'react';
import {
  Form, Icon, Input, Button,Switch,InputNumber,DatePicker, Alert
} from 'antd';
import moment from 'moment';
const FormItem=Form.Item;
class HoriztalForm  extends Component {
  constructor(props){
    super(props);
    this.state={
      value:moment('2019-01-01')
    }
  }
  hasErrors=(fieldsError)=> {
    return Object.keys(fieldsError).some(field => fieldsError[field]);
  };
  handleSubmit = (e) => {
    e.preventDefault();
    this.props.form.validateFields((err, values) => {   //values 是用户提交的信息
      if (!err) {
        console.log('Received values of form: ', values);
      }
    });
  };
  onChange(date, dateString){
    console.log(date)
  }
  render() {
    const {
      getFieldDecorator, getFieldsError, getFieldError, isFieldTouched
    } = this.props.form;
     const formItemLayout = {
        wrapperCol: {
          xs: { span: 5 },
          sm: { span: 5 }
        }
      };
    return (
      <div className="form">
        <Form {...formItemLayout}  onSubmit={this.handleSubmit}>
          <FormItem>
            {
              getFieldDecorator('userName', {
                rules: [{ required: true, message: '请填写姓名!' }],
              })(
                <Input prefix={<Icon type="user" style={{ color: 'rgba(0,0,0,.25)' }} />} placeholder="Username" />
              )
            }
          </FormItem>
          <FormItem>
           {
              getFieldDecorator('password', {
                rules: [{ required: true, message: '请填写密码!' }],
              })(
                <Input prefix={<Icon type="lock" style={{ color: 'rgba(0,0,0,.25)' }} />} placeholder="password" />
              )
            }

          </FormItem>
          <FormItem>
           {
              getFieldDecorator('switch', {
                rules: [{ message: '请填写密码!' }],
              })(
                <Switch />
              )
            }

          </FormItem>
            <FormItem>
            {
               getFieldDecorator('datepicker', {
                 rules: [{ required: true, message: '请选择日期' }],
               })(
                  <DatePicker onChange={this.onChange} />
                )
             }
            </FormItem>
          <FormItem>
          {
             getFieldDecorator('age', {
               rules: [{ required: true, message: '请选择年龄' }],
             })(
                <InputNumber min={1} max={10}  onChange={this.onChange}  placeholder="age"/>
              )
           }
          </FormItem>
          <FormItem>
          {
             getFieldDecorator('price', {
               rules: [{ required: false, message: '' }],
             })(
                <InputNumber min={1} max={10}  onChange={this.onChange}  placeholder="price"/>
              )
           }
          </FormItem>
          <Button
            type="primary"
            htmlType="submit"

          >
            Login
          </Button>
        </Form>
      </div>
    );
  }
}
const HorizontalForm =Form.create({})(HoriztalForm);
export default HorizontalForm;
//表单属性介绍
