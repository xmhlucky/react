import React,{Component} from 'react';
import { Card, Col, Row,Icon,Modal,message } from 'antd';
const confirm = Modal.confirm;
class Notice extends Component{
  constructor(props){
    super(props)
  }
  delete(){
     confirm({
        title: '温馨提示',
        content: '确定删除这条信息吗？删除后将永远不再显示哦~',
        okText:'确定',
        cancelText:'取消',
        onOk() {
            message.info('你已成功删除');
        }

      });
  }
  render(){
    return (
      <div>
          <Row gutter={16}>
              <Col span={6}>
                  <Card title="注意点1"   style={{height:220,marginBottom:10}} extra={<Icon type="delete" onClick={this.delete.bind(this)} title="删除" style={{cursor:'pointer'}}/>}>
                    <p>class要改为className</p>
                    <p>在使用style样式时,style应该是对象格式。即style=双花括号形式，并且里面的样式，使用驼峰命名法</p>
                  </Card>
               </Col>
             <Col span={6}>
                <Card title="注意点2"   style={{height:220,marginBottom:10}} extra={<Icon type="delete" onClick={this.delete.bind(this)} title="删除" style={{cursor:'pointer'}}/>}>
                  <p>修改state值的方法是：{"this.setState({属性名：属性值（修改后的)})"}</p>
                  <p>组件名称要开头字母大写</p>
                  <p>每个组件只允许有一个最大的容器</p>
                </Card>
              </Col>
              <Col span={6}>
                  <Card title="注意点1"   style={{height:220,marginBottom:10}} extra={<Icon type="delete" onClick={this.delete.bind(this)} title="删除" style={{cursor:'pointer'}}/>}>
                    <p>class要改为className</p>
                    <p>在使用style样式时,style应该是对象格式。即style=双花括号形式，并且里面的样式，使用驼峰命名法</p>
                  </Card>
               </Col>
               <Col span={6}>
                  <Card title="注意点1"   style={{height:220,marginBottom:10}} extra={<Icon type="delete" onClick={this.delete.bind(this)} title="删除" style={{cursor:'pointer'}}/>}>
                    <p>class要改为className</p>
                    <p>在使用style样式时,style应该是对象格式。即style=双花括号形式，并且里面的样式，使用驼峰命名法</p>
                  </Card>
                </Col>
                <Col span={6}>
                     <Card title="注意点1" style={{height:220,marginBottom:10}}  extra={<Icon type="delete" onClick={this.delete.bind(this)} title="删除" style={{cursor:'pointer'}}/>}>
                       <p>class要改为className</p>
                       <p>在使用style样式时,style应该是对象格式。即style=双花括号形式，并且里面的样式，使用驼峰命名法</p>

                     </Card>
                 </Col>
           </Row>
        </div>
    )
  }
};
export default Notice;
