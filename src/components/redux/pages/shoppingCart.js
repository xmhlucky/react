import React,{Component} from 'react';
import {Button,Input,Icon} from 'antd';
import store from '../store/store';
import { connect} from 'react-redux';
import {plus,minus} from '../store/shoppingCart'
class ShoppingCart extends Component{
  constructor(props){
    super(props);
    this.state=store.getState();
  }

  render(){
    let {inputValue,plusFun,minusFun}=this.props;
    return (
      <div>
          <Button type="primary" icon="plus" onClick={plusFun}/>
          <Input value={inputValue}/>
          <Button type="primary" icon="minus" onClick={minusFun}/>
      </div>
    )
  }

}
const mapStateToProps =(state)=>{
    return {
        inputValue:state.shoppingCart.inputValue
    }
}

const mapDispatchToProps =(dispatch)=>{
    return{
        plusFun(){
            const action=plus();  //
            dispatch(action)
        },
        minusFun(){
            const action=minus();
             dispatch(action)
        }
    }
}
export default connect(mapStateToProps,mapDispatchToProps)(ShoppingCart);
