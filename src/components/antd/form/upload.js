import React,{Component} from 'react';
import { Upload, Icon, Modal,message } from 'antd';
function getBase64(file) {
  return new Promise((resolve, reject) => {
    const reader = new FileReader();
    reader.readAsDataURL(file);
    reader.onload = () => resolve(reader.result);
    reader.onerror = error => reject(error);
  });
}
export default class UploadForm extends Component{
  constructor(props){
    super(props);
    this.state={
        previewVisible: false,
        previewImage: '',
        fileList: [
          {
            uid: '-1',
            name: 'xxx.png',
            status: 'done',
            url: 'https://zos.alipayobjects.com/rmsportal/jkjgkEfvpUPVyRjUImniVslZfWPnJuuZ.png',
          },
        ],
    }
  }
  handlePreview=async file => {
    if (!file.url && !file.preview) {
      file.preview = await getBase64(file.originFileObj);
    }
    this.setState({
      previewImage: file.url || file.preview,
      previewVisible: true,
    });
  }
  beforeUpload=(file,fileD)=>{
    let {fileList}=this.state;
    let isIncluede=fileList.some((item)=>item.name == file.name);
    if(isIncluede){
      message.error('已经上传过了');
      return new Promise((resolve,reject)=>{
        reject();
      });
    }
    return new Promise((resolve,reject)=>{
      resolve();
    });;

  }
  handleChange=({fileList})=>{
    this.setState({fileList})
  }
  handleCancel=()=>{
    this.setState({
      previewVisible:false
    })
  }
  render(){
    const { previewVisible,previewImage,fileList}=this.state;
    const uploadButton = (
      <div>
        <Icon type="plus" />
        <div className="ant-upload-text">Upload</div>
      </div>
    );
    return (
       <div>
            <Upload
               action="https://www.mocky.io/v2/5cc8019d300000980a055e76"
               listType="picture-card"
               fileList={fileList}
               onPreview={this.handlePreview}
               onChange={this.handleChange}
               beforeUpload={this.beforeUpload}
               multiple
             >
               {fileList.length >= 3 ? null : uploadButton}
           </Upload>
          <Modal visible={previewVisible} footer={null} onCancel={this.handleCancel}>
            <img alt="example" style={{ width: '100%' }} src={previewImage} />
          </Modal>
       </div>

    )
  }
}
