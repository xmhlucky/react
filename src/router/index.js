import React,{Component} from 'react';
import { BrowserRouter, Route ,Switch, Redirect } from "react-router-dom";
import App from '../App';
import ContentM from '../common/contentM';

class Routers extends Component{
    render(){
        return (
            <BrowserRouter>
                <Switch>
                    <Route exact path="" component={App}></Route>
                    <Route exact path="/react:name" component={ContentM}></Route>
                    <Redirect from="/" to="/react/introduction" />
                </Switch>
            </BrowserRouter>
        )
    }
}
export default Routers;
