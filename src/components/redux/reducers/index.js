import { combineReducers } from 'redux';
import {todoList} from './TodoList';
import {shoppingCart} from './shoppingCartReducer';
// 合并管理
const reducer = combineReducers({
    todoList,
    shoppingCart
});
export default reducer;
