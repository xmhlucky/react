const defaultState={
    inputValue:11
}
const shoppingCart=(state=defaultState,action)=>{
    switch(action.type){
        case "plus":
        {
            const newState =JSON.parse(JSON.stringify(state))
            newState.inputValue=newState.inputValue+1;
            console.log(newState)
            return newState;
        }
        break;
        case "minus":
        {
            const newState =JSON.parse(JSON.stringify(state))
            newState.inputValue=newState.inputValue-1;
            return newState
        }
        break;
        default:
        return state
    }

}
export {shoppingCart}
