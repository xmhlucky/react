import React,{Component} from 'react';
import { BrowserRouter, Route ,Switch, Redirect } from "react-router-dom";
import App from '../App';
import ContentM from '../common/contentM';
class Routers extends Component{
    render(){
        return (
            <BrowserRouter>
                <Switch>
                    <Redirect exact from="/react" to="/react/introduction" />
                    <Redirect exact  from="/antd" to="/antd/table/edittable" />
                    <Redirect exact  from="/es6" to="/es6/promise" />
                    <Redirect exact from="/" to="/react/introduction" />
                    <Redirect exact from="/router" to="/router/history" />
                    <Route exact path="" component={App}></Route>
                </Switch>
            </BrowserRouter>
        )
    }
}
export default Routers;
