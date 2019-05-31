import React,{Component} from 'react';
import {Row,Col,Form,Select,Input,InputNumber,Switch,Radio,Checkbox,DatePicker,Button} from 'antd';
import '../../../static/css/form/index.css';
const FormItem =Form.Item;
const Option =Select.Option;
const RadioGroup=Radio.Group;
const CheckboxGroup=Checkbox.Group;
class PrimaryForm extends Component{
  constructor(props){
    super(props);
    this.state={
       optionList:['36','37','38','39'],
       radioGroup:['A','B','C','D'],
       checkboxGroup:['香蕉','苹果','西瓜','草莓']
    }
  }
  handleSubmit=(e)=>{
    e.preventDefault();
      console.log(1)
  }
  handleReset=()=>{
    console.log(3)
    this.props.form.resetFields();
  }
  onChange=(name,value,dateString)=>{
    console.log(value)
    console.log(name,value,dateString)
  }
  render(){
    const formItemLayout={
        labelCol: { span: 4 },
        wrapperCol: { span: 20 },
    }
    let { optionList,radioGroup,checkboxGroup}=this.state;
    return (
      <div>
         <Row>
             <Col span={6}>
                 <Form layout="vertical" ref='form' {...formItemLayout}  onSubmit={this.handleSubmit}>
                    <FormItem label="输入框">
                      <Input  onChange={(e)=>{this.onChange('text',e.target.value)}}/>
                    </FormItem>
                    <FormItem label="数字框">
                      <InputNumber   onChange={(value)=>{this.onChange('numbers',value)}} />
                    </FormItem>
                    <FormItem label="select框">
                        <Select onChange={(value)=>{this.onChange('select',value)}}>
                           {optionList && optionList.map(item=><Option key={item}>{item}</Option>)}
                        </Select>
                    </FormItem>
                    <FormItem label="switch">
                        <Switch onChange={(checked)=>{this.onChange('switchs',checked)}}/>
                    </FormItem>
                    <FormItem label="radio">
                        <RadioGroup onChange={(e)=>{this.onChange('radios',e.target.value)}}>
                            {
                              radioGroup && radioGroup.map(item=><Radio value={item} key={item}>{item}</Radio>)
                            }
                        </RadioGroup>
                    </FormItem>
                    <FormItem label="checkbox">
                        <CheckboxGroup onChange={(checkedValues)=>{this.onChange('checkboxs',checkedValues)}}>
                            {
                              checkboxGroup && checkboxGroup.map(item=><Checkbox value={item} key={item}>{item}</Checkbox>)
                            }
                        </CheckboxGroup>
                    </FormItem>
                    <FormItem label="date">
                        <DatePicker onChange={(date,dateString)=>{this.onChange('date',date,dateString)}}/>
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
 const PrimaryFormAll=Form.create({})(PrimaryForm);
 export default PrimaryFormAll;
