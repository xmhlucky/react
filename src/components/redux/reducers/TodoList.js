const defaultState={
    inputValue:'',
    list:[]
}
const todoList=(state=defaultState,action)=>{
    switch(action.type){
        case "change_input_value":
        {
            const newState =JSON.parse(JSON.stringify(state))
            newState.inputValue=action.value;
            return newState;
        }
        break;
        case "add_item":
        {
            const newState =JSON.parse(JSON.stringify(state))
            newState.list.push(newState.inputValue)
            return newState
        }
        break;
        case "init_list_action":
        {
            const newState=JSON.parse(JSON.stringify(state));
            newState.list=action.data;
            return newState;
        }
        break;
        case "delete_item":
        {
            const newState=JSON.parse(JSON.stringify(state));
            newState.list.splice(action.value, 1)
            return newState;
        }
        break;
        default:
        return state
    }

}

export {todoList};
