import React,{Component} from 'react';
import { BrowserRouter, Route ,Switch, Redirect } from "react-router-dom";
import App from '../App';
import ContentM from '../common/contentM';
import ContentEs from '../common/contentEs';
import ContentAntd from '../common/contentAntd';
class Routers extends Component{
    render(){
        return (
            <BrowserRouter>
                <Switch>
                    <Route exact path="" component={App}></Route>
                    <Route exact path="/react:name" component={ContentM}></Route>
                    <Route exact path="/es6" component={ContentEs}></Route>
                    <Route exact path="/antd:name" component={ContentAntd}></Route>
                    <Redirect from="/react" to="/react/introduction" />
                    <Redirect from="/antd" to="/antd/table" />
                    <Redirect from="/" to="/react/introduction" />
                </Switch>
            </BrowserRouter>
        )
    }
}
export default Routers;
