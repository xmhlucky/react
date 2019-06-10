import { combineReducers } from 'redux';
import {todoList} from './todoList';
import {shoppingCart} from './shoppingCartReducer';
console.log(todoList)
// 合并管理
const reducer = combineReducers({
    todoList,
    shoppingCart
});
export default reducer;
