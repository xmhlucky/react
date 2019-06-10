import React,{Component} from 'react';
import { Provider } from 'react-redux';
import ReduxRoute from './route';
import store from './store/store';
class ReduxContentRight extends Component{
    constructor(props){
      super(props);
    }
    render(){
      return (
        <div>
            <Provider store={store}>
                <ReduxRoute />
            </Provider>
        </div>
      )
    }
}
export default ReduxContentRight;
