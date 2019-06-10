import axios from 'axios'
import {CHANGE_INPUT_VALUE,ADD_ITEM,INIT_LIST_ACTION,DELETE_ITEM} from './actionType'


export const initListAction = (data)=>({
    type: INIT_LIST_ACTION,
    data
})


export const deleteItem =(value)=>({
    type:DELETE_ITEM,
    value
})
export const additem =(value)=>({
    type:ADD_ITEM,
    value
})

export const changeValue =(value)=>({
    type:CHANGE_INPUT_VALUE,
    value
})

export const getTodoList=()=>{
    return {
      todoList:(dispatch)=>{
            const data=["hello","nihao","haha"];
            const action =initListAction(data);
            dispatch(action);
        }
    }
}
