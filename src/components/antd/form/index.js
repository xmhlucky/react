import React,{Component} from 'react';
import { Switch, Route, Redirect } from 'react-router-dom';
import PrimaryFormAll from './primaryForm';
import VerifyFormAll from './verifyForm';
import MyForm from './myForm';
import MyFormNew from './myFormNew';
import UploadForm from './upload';
export default class AntdForm extends Component{
  constructor(props){
    super(props);
    this.state={

    }
  }
  render(){
    return (
      <div>
          <Switch>
             <Route path="/antd/form/primaryform"  component={PrimaryFormAll}/>
             <Route path="/antd/form/verifyform"  component={VerifyFormAll}/>
             <Route path="/antd/form/myform"  component={MyForm}/>
             <Route path="/antd/form/myformnew"  component={MyFormNew}/>
             <Route path="/antd/form/upload"  component={UploadForm}/>
          </Switch>
      </div>
    )
  }
}
