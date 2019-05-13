
import React,{Component} from 'react';
class ReactForm extends Component{
    constructor(props){
        super(props);
        this.state={
            checkboxArr:['read'],
            radioArr:'man'
        }
        this.handleSubmit.bind(this);
        this.checkHandleChange.bind(this);
        this.radioChange.bind(this);
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
        console.log(item)
        this.setState({
            radioArr:item
        })
    }
    
    handleSubmit =(event)=>{
        event.preventDefault();
        let params={
            username:this.refs.username.value,
            password:this.refs.password.value,
            custom:this.refs.custom.value,
            textarea:this.refs.textarea.value,
            mela:this.state.radioArr,
            hobby:this.state.checkboxArr
        }
        console.log(params)
    }
    render(){

        return (
            <form className="form" onSubmit={this.handleSubmit}>
                <div>
                    <label>用户名：</label>
                    <input type="text" ref="username"/>
                </div>
                <div>
                    <label>密码：</label>
                    <input type="password" ref="password"/>
                </div>
                <div>
                    <label>用户：</label>
                    <select ref="custom">
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
                   <textarea ref="textarea">

                   </textarea>
                </div>
                <div>
                    <label>性别：</label>
                    <label>man</label>
                   <input type="radio" name="mela" value="man" defaultChecked={this.state.radioArr=='man'?true:false} onClick={this.radioChange}/>
                   <label>woman</label>
                   <input type="radio" name="mela" value="woman" defaultChecked={this.state.radioArr=='woman'?true:false} onClick={this.radioChange}/>
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