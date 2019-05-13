import React,{Component} from 'react';

class ListRender extends Component{
    constructor(props){
        super(props);
        this.state={
            list:[
                'list1',
                'list2',
                'list3',
                'list4'
            ]
        }
    }
    render(){
    return (
            <ul>
                {
                    this.state.list.map(item=>(<li>{item}</li>))
                }
            </ul>
        )

    }
}
export default ListRender;