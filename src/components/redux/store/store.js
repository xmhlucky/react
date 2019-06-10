import { createStore,applyMiddleware,compose} from 'redux';
import reducer from '../reducers';
import thunk from 'redux-thunk';



const enhancerss = compose(
    applyMiddleware(thunk)
);
const store=createStore(reducer,enhancerss);

export default store;
