import React,{Component} from 'react';
import {Switch,Route} from 'react-router-dom';
import PropTypes from 'prop-types';
import EsPromise from './promise';
import VariablesDeclarations from './variablesdeclarations';
import DestructuringAssignment from './destructuringAssignment';
import StringExtends from './stringExtends';
import StringAddFun from './stringAddFun';
import NumberExtends from './numberExtends';
class EsContentRight extends Component{
    constructor(props){
      super(props);
    }
    render(){
       return(
           <div>
              <Switch>
                 <Route path="/es6/variablesdeclarations"  component={VariablesDeclarations}/>
                 <Route path="/es6/destructuringssignment"  component={DestructuringAssignment}/>
                 <Route path="/es6/stringextends"  component={StringExtends}/>
                 <Route path="/es6/stringaddfun"  component={StringAddFun}/>
                  <Route path="/es6/numberextends"  component={NumberExtends}/>
                 <Route path="/es6/promise"  component={EsPromise}/>
              </Switch>
           </div>
       )

    }
}
EsContentRight.contextTypes={
  href:PropTypes.string
}
export default EsContentRight;
