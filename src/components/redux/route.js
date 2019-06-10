import React,{Component} from 'react';
import { Switch,Route,Link} from "react-router-dom";
import TodoList from './pages/TodoList';
import ShoppingCart from './pages/shoppingCart';
class ReduxRoute extends Component{
  constructor(props){
    super(props);
  }
  render(){
     return (
       <div>
            <Switch>
                 <Route path="/redux/todolist"  component={TodoList}/>
                 <Route path="/redux/shoppingcart"  component={ShoppingCart}/>
            </Switch>
        </div>
     )
  }
}
export default ReduxRoute;
