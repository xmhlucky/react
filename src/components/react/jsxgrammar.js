import React ,{Component} from 'react';
import jsxgrammar01 from '../../static/images/react/jsxgrammar/jsxgrammar01.png'
import jsxgrammar02 from '../../static/images/react/jsxgrammar/jsxgrammar02.png'
import jsxgrammar03 from '../../static/images/react/jsxgrammar/jsxgrammar03.png'
import jsxgrammar04 from '../../static/images/react/jsxgrammar/jsxgrammar04.png'
class Jsxgrammar extends Component{
  constructor(props){
    super(props)
  }
  render(){
    return (
        <div>
        <p>
            <img  src={jsxgrammar01}/>
        </p>
        <p>
            <img  src={jsxgrammar02}/>
        </p>
        <p>
            <img  src={jsxgrammar03}/>
        </p>
          <p>
              <img  src={jsxgrammar04}/>
          </p>
        </div>
    )
  }
}
export default Jsxgrammar;
