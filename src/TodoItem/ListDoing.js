import React, { Component } from 'react'

export default class ListDoing extends Component {

    render() {
        var {del,change,doing,done} = this.props;
        return (
            <div style={{marginTop:'100px'}}>
                <ul>
                    <h2>正在进行<span>{doing.length}</span></h2>
                    {doing.map((item)=>{
                        return <li key={item+(new Date()).toLocaleString()+Math.random()}><input type="checkbox" onClick={()=>{change(item,false)}}/>{item}<button onClick={()=>{del(item,false,true)}}>删除</button></li>
                    })}
                    <h2>已完成<span>{done.length}</span></h2>
                    {done.map((item)=>{
                        return <li key={item+(new Date()).toLocaleString()+Math.random()}><input type="checkbox" readOnly={true} checked="checked" onClick={()=>{change(item,true)}}/>{item}<button onClick={()=>{del(item,true,true)}}>删除</button></li>
                    })}
                </ul>
            </div>
        )
    }
}
