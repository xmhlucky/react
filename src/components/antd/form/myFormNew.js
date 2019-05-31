import React,{Component} from 'react';
import {Row,Col,Form,Input,Button,Radio,Checkbox,Switch,Select,DatePicker,Icon} from 'antd';
import BindForm from './bindForm';
import UploadForm from './upload';
import moment from 'moment';

import locale from 'antd/lib/date-picker/locale/zh_CN';
import '../../../static/css/form/index.css';
const { TextArea } = Input;
const  RadioGroup=Radio.Group;
const  RadioButton=Radio.Button;
const  CheckboxGroup=Checkbox.Group;
const  Option=Select.Option;
const  {RangePicker}= DatePicker
const FormItem = BindForm.Item;
moment.locale('zh-cn');
export default class MyFormNew extends Component{
  constructor(props){
    super(props);
    this.state={
      radioOption:[{value:1,label:'男'},{value:0,label:'女'}],
      checkboxOption:[{value:'banana',label:'香蕉'},{value:'orange',label:'橘子'},{value:'pear',label:'梨'},{value:'apple',label:'苹果'}],
      radioGroup:[{value:'bj',label:'北京'},{value:'tj',label:'天津'},{value:'hb',label:'河北'},{value:'sh',label:'上海'}],
      selectOption:[{value:'mon',text:'星期一'},{value:'tue',text:'星期二'},{value:'wed',text:'星期三'},
      {value:'stu',text:'星期四'},{value:'fri',text:'星期五'}],
      passwordSee:false
    }
    this.handleSubmit=this.handleSubmit.bind(this);
  }
  handlePassword=()=>{
    let {passwordSee}=this.state;
    this.setState({
       passwordSee:!passwordSee
    })
  }
  handleSubmit=()=>{
     this.refs.myForm.validateFields((errors, values)=>{
        if(!errors){
          console.log(values);
        }
     })
  }
  disabledDate=(current)=>{
      return current && current < moment().endOf('day');
  }
  render(){
    const layout={
      labelCol:{span:6},
      wrapperCol:{span:18}
    }
    const {radioOption,checkboxOption,radioGroup,selectOption,passwordSee}=this.state;
    return (
      <div>
          <Row>
              <Col span={8}>
                  <BindForm ref="myForm">
                     <FormItem
                         label="用户名"
                         value='1'
                         name="username"
                         rules={[
                           {
                             required:true,
                           }
                         ]}
                         {...layout}
                     >
                          <Input allowClear/>
                     </FormItem>
                     <FormItem
                         label="密码"
                         value='1'
                         name="password"
                         rules={[
                           {
                             required:true,
                             message:"请输入密码"
                           },
                           {
                             validator:(rule, value, callback)=>{
                               if(value){
                                 if(value.length<6){
                                   callback('密码长度不够');
                                 }else if(value.length>16){
                                   callback('密码长度太长');
                                 }else{
                                   if(!(/^(?![0-9]+$)(?![a-zA-Z]+$)[0-9A-Za-z]{6,16}$/.test(value))){
                                      callback('请输入6-16位密码');
                                   }else{
                                     callback()
                                   }
                                 }
                               }
                             }
                           }
                         ]}
                         {...layout}
                     >
                          <Input type={passwordSee?'text':"password"} suffix={<Icon onClick={this.handlePassword} type={ passwordSee ? "eye-invisible":"eye"} />}/>
                     </FormItem>
                     <FormItem
                         label="描述"
                         name="describe"
                         rules={[
                           {
                             required:true
                           }
                         ]}
                         {...layout}
                     >
                          <TextArea />
                     </FormItem>
                     <FormItem
                         label="性别"
                         name="sex"
                         rules={[
                           {
                             required:true
                           }
                         ]}
                         {...layout}
                     >
                          <RadioGroup  options={radioOption}/>
                     </FormItem>
                     <FormItem
                         label="水果"
                         name="fruit"
                         {...layout}
                     >
                          <CheckboxGroup  options={checkboxOption}/>
                     </FormItem>
                     <FormItem
                         label="来自"
                         name="from"
                         value='bj'
                         {...layout}
                     >
                          <RadioGroup>
                          {
                              radioGroup && radioGroup.map((item)=><RadioButton value={item.value} key={item.value}>{item.label}</RadioButton>)
                          }
                          </RadioGroup>
                     </FormItem>
                     <FormItem
                         label="switch"
                         name="switch"

                         {...layout}
                     >
                          <Switch />
                     </FormItem>
                     <FormItem
                         label="select"
                         name="select"

                         {...layout}
                     >
                          <Select>
                          {
                            selectOption&& selectOption.map(item=><Option key={item.value} value={item.value}>{item.text}</Option>)
                          }
                          </Select>
                     </FormItem>
                     <FormItem
                         label="datepicker"
                         name="datepicker"

                         {...layout}
                     >
                          <DatePicker locale={locale} showTime={{ defaultValue: moment('00:00:00') }} format="YYYY-MM-DD" disabledDate={this.disabledDate}/>
                     </FormItem>
                     <FormItem
                         label="rangepicker"
                         name="rangepicker"
                         {...layout}
                     >
                          <RangePicker />
                     </FormItem>
                     <FormItem
                         label="footerRangepicker"
                         name="footerRangepicker"
                         {...layout}
                     >
                          <RangePicker />
                     </FormItem>
                     <FormItem
                         label="upload"
                         name="upload"
                         {...layout}
                     >
                         <UploadForm />
                     </FormItem>

                      <Button type="primary" onClick={this.handleSubmit}>
                          提交
                      </Button>
                  </BindForm>

              </Col>
          </Row>
      </div>
    )
  }
}
