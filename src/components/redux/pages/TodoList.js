import React from 'react';
import store from '../store/store'
import { connect} from 'react-redux'
import {initListAction,getTodoList,additem,changeValue,deleteItem} from '../store/actionCreater'


 class TodoList extends React.Component{
    constructor(){
        super();
        this.state=store.getState();
    }
     componentDidMount(){
       const action=getTodoList();
       store.dispatch(action.todoList);
     }
    render(){
        const {list,inputValue,changeInputValue,handleAddClick,handleDelete} = this.props;
        return(
            <div>
                <div>
                    <input value={inputValue} onChange={changeInputValue}></input>
                    <button onClick={handleAddClick}>提交</button>
                </div>
                <ul>
                        {
                          list && list.map((item,index)=> (<li onClick={()=>{handleDelete(index)}} key={index}> {item} </li>))
                        }
                </ul>
            </div>
        )
    }
}


const mapStateToProps =(state)=>{
    return {
        inputValue:state.todoList.inputValue,
        list:state.todoList.list
    }
}

const mapDispatchToProps =(dispatch)=>{
    return{
        changeInputValue(e){
            const action=changeValue(e.target.value)
             dispatch(action)
        },
        //新增数据
        handleAddClick(){
            const action =additem()
            dispatch(action)
        },
        //删除数据
        handleDelete(index){
          const action=deleteItem(index)
          dispatch(action)
        }
    }
}
export default connect(mapStateToProps,mapDispatchToProps)(TodoList);//和store做连接
