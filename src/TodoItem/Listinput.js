import React,{Component} from 'react'
//import "./List"
export default class ListInput extends Component {
    render() {
        var {click} = this.props;
        return(
            <div className="header">
                <div><h2>TodoList</h2></div><input type='text' onKeyDown={(e)=>{click(e)}}></input>
            </div>
        )
    }
}