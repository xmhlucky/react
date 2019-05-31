import React,{Component} from 'react';
import {Row,Col,Form,Select,Input,InputNumber,Switch,Radio,Checkbox,DatePicker,Button} from 'antd';
import '../../../static/css/form/index.css';
const FormItem =Form.Item;
const Option =Select.Option;
const RadioGroup=Radio.Group;
const CheckboxGroup=Checkbox.Group;
class VerifyForm extends Component{
  constructor(props){
    super(props);
    this.state={
       optionList:['36','37','38','39'],
       radioGroup:['A','B','C','D'],
       checkboxGroup:['香蕉','苹果','西瓜','草莓'],
       text:'',
       numbers:'',
       select:'',
       switchs:false,
       radios:'',
       checkboxs:'',
       date:'',
       optionsList:[],  //这个就是select 切换的数据
       selects:'',
       curmessage:''
    }
  }
  handleSubmit=(e)=>{
    e.preventDefault();
    this.props.form.validateFields((errors,values)=>{
      console.log(errors)
      console.log(values)
    })
  }
  handleReset=()=>{
    this.props.form.resetFields();
  }
  onChange=(name,value,dateString)=>{
      if(name=='select'){
        if(value==36){
          var optionsList=['热','很热','非常热'];
        }else{
          var optionsList=['辣','很辣','非常辣'];
        }
        this.props.form.resetFields('selects','')
        this.setState({
          optionsList,
          selects:''
        })
      }
  }
  render(){
    const formItemLayout={
        labelCol: { span: 4 },
        wrapperCol: { span: 20 },
    }
    let {curmessage, optionList,radioGroup,checkboxGroup,text,numbers,select,switchs,radios,checkboxs,date,optionsList,selects}=this.state;
    const { getFieldDecorator } = this.props.form;
    return (
      <div>
         <Row>
             <Col span={6}>
                 <Form layout="vertical" ref='form' {...formItemLayout}  onSubmit={this.handleSubmit}>
                    <FormItem label="输入框">
                      { getFieldDecorator('text',{
                          initValue:text,
                          rules:[
                            {
                              required:true
                            },
                            {
                            validator:(rule, value, callback)=>{
                               if(value){
                                 callback('密码错误')
                               }
                            }}]
                        })
                        (
                          <Input  onChange={(e)=>{this.onChange('text',e.target.value)}}/>
                        )
                      }
                    </FormItem>
                    <FormItem label="数字框">
                      { getFieldDecorator('numbers',{
                            initValue:numbers,
                            rules: [{ required: true, message: '请填写' }],
                        })(
                          <InputNumber   onChange={(value)=>{this.onChange('numbers',value)}} />
                        )
                      }
                    </FormItem>
                    <FormItem label="select框">
                        { getFieldDecorator('select',{
                              initValue:select,
                              rules: [{ required: true, message: '请填写' }],
                          })(
                            <Select onChange={(value)=>{this.onChange('select',value)}}>
                             {optionList && optionList.map(item=><Option key={item}>{item}</Option>)}
                            </Select>
                          )
                        }
                    </FormItem>
                    <FormItem label="select框">
                        { getFieldDecorator('selects',{
                              initValue:selects,
                              rules: [{ required: true, message: '请填写' }],
                          })(
                            <Select onChange={(value)=>{this.onChange('select',value)}}>
                             {optionsList && optionsList.map(item=><Option key={item}>{item}</Option>)}
                            </Select>
                          )
                        }
                    </FormItem>
                    <FormItem label="switch">
                        { getFieldDecorator('switchs',{
                            valuePropName:'checked',
                            initialValue: switchs,
                            rules: [{ required: true, message: '请填写' }]
                          })(
                             <Switch onChange={(checked)=>{this.onChange('switchs',checked)}}/>
                          )
                        }
                    </FormItem>
                    <FormItem label="radio">
                        { getFieldDecorator('radios',{
                            initValue:radios,
                            rules: [{ required: true, message: '请填写' }],
                          })(
                            <RadioGroup onChange={(e)=>{this.onChange('radios',e.target.value)}}>
                                {
                                  radioGroup && radioGroup.map(item=><Radio value={item} key={item}>{item}</Radio>)
                                }
                            </RadioGroup>
                          )
                        }
                    </FormItem>
                    <FormItem label="checkbox">
                      { getFieldDecorator('checkboxs',{
                          initValue:checkboxs,
                          rules: [{ required: true, message: '请填写' }],
                        })(
                        <CheckboxGroup onChange={(checkedValues)=>{this.onChange('checkboxs',checkedValues)}}>
                            {
                              checkboxGroup && checkboxGroup.map(item=><Checkbox value={item} key={item}>{item}</Checkbox>)
                            }
                        </CheckboxGroup>
                      )}
                    </FormItem>
                    <FormItem label="date">
                      {getFieldDecorator('date',{
                          initValue:date,
                          rules: [{ required: true, message: '请填写' }],
                        })(
                        <DatePicker onChange={(date,dateString)=>{this.onChange('date',date,dateString)}}/>
                      )}

                    </FormItem>
                    <FormItem>
                       <Button htmlType="submit" type='primary'>
                            保存
                       </Button>
                       <Button onClick={this.handleReset}>
                            重置
                       </Button>
                    </FormItem>
                 </Form>
              </Col>
         </Row>
      </div>
    )
  }
}
 const VerifyFormAll=Form.create({})(VerifyForm);
 export default VerifyFormAll;
