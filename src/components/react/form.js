
import React,{Component} from 'react';
import '../../static/css/reactform.css'
class ReactForm extends Component{
    constructor(props){
        super(props);
        this.state={
            checkboxArr:['read'],
            radioArr:'man',
            values:{custom:'primary'}
        }
        this.handleSubmit.bind(this);
        this.checkHandleChange.bind(this);
        this.radioChange.bind(this);
        this.onChange.bind(this);
        // this.input = React.createRef();
    }
    onChange =(e)=>{
       let {values} = this.state;
       let names=e.target.name;
       values[names]=e.target.value;
       this.setState({
         values:values
       })
    }
    //多选框
    checkHandleChange = (e)=>{
       let item =e.target.value;
       let checkbox=this.state.checkboxArr;
       let index=checkbox.indexOf(item);
       index>-1?checkbox.splice(index,1):checkbox.push(item);
       this.setState({
           checkboxArr:checkbox
       })
    }
    //单选
    radioChange =(e)=>{
        let item =e.target.value;
        this.setState({
            radioArr:item
        })
    }

    handleSubmit =(event)=>{
        event.preventDefault();
        let {values} =this.state;
        console.log(values)
    }
    render(){

        return (
            <form className="form" onSubmit={this.handleSubmit}>
                <div>
                    <label>用户名：</label>
                    <input type="text" name="username"   onChange={(e)=>this.onChange(e)}/>
                </div>
                <div>
                    <label>密码：</label>
                    <input type="password"  value={1}  name="password" onChange={(e)=>this.onChange(e)}/>
                </div>
                <div>
                    <label>用户：</label>
                    <select  name="custom" onChange={(e)=>this.onChange(e)}>
                        <option value="primary">
                            普通用户
                        </option>
                        <option value="vip">
                            VIP用户
                        </option>
                    </select>
                </div>
                <div>
                    <label>备注：</label>
                   <textarea name="memo" onChange={(e)=>this.onChange(e)}>

                   </textarea>
                </div>
                <div>
                    <label>文件：</label>
                   <input type="file" ref="file"/>
                </div>
                <div>
                    <label>性别：</label>
                    <label>man</label>
                   <input type="radio" name="mela" value="man" defaultChecked={this.state.radioArr=='man'?true:false} onChange={this.radioChange}/>
                   <label>woman</label>
                   <input type="radio" name="mela" value="woman" defaultChecked={this.state.radioArr=='woman'?true:false} onChange={this.radioChange}/>
                </div>
                <div>
                    <label>爱好：</label>
                    <label>read</label>
                     <input type="checkbox" name="hobby" value="read" defaultChecked={this.state.checkboxArr.includes('read')?true:false} onChange={this.checkHandleChange}/>
                     <label>play ball</label>
                     <input type="checkbox" name="hobby" value="play ball" defaultChecked={this.state.checkboxArr.includes('play ball')?true:false} onChange={this.checkHandleChange} />
                     <label>watch TV</label>
                     <input type="checkbox" name="hobby" value="watch TV" defaultChecked={this.state.checkboxArr.includes('watch TV')?true:false} onChange={this.checkHandleChange} />
                </div>
                <div>
                    <input type="submit" value="提交" />
                </div>
            </form>

        )
    }
}
export default ReactForm;
