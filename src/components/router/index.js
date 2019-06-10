import React,{Component} from 'react';
import {Switch,Link,Route} from 'react-router-dom';
import HistoryRouter from './history';
class RouterContentRight extends Component{
  constructor(props){
    super(props);
  }
  render(){
    console.log(1)
    return (
      <div>
          <Switch>
               <Route path="/router/history"  component={HistoryRouter}/>
          </Switch>
      </div>
    )
  }
}
export default RouterContentRight;
