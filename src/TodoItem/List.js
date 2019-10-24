import React, { Component } from 'react'
import ListDoing from './ListDoing'
import ListInput from './Listinput'

export default class List extends Component {
    constructor(){
        super();
        this.state={
            doing:[],
            done:[]
        }
    }

    componentDidMount(){
        let doingplus = localStorage.getItem("doing");
        let doneplus = localStorage.getItem("done");
        let doingobj = JSON.parse(doingplus);
        let doneobj = JSON.parse(doneplus);
        if(doingobj == null){
            if(doneobj == null){
                localStorage.setItem("doing",JSON.stringify(this.state.doing));
                localStorage.setItem("done",JSON.stringify(this.state.done));
            }else{
                localStorage.setItem("doing",JSON.stringify(this.state.doing));                    
            }
        }else{
            if(doneobj == null){
                localStorage.setItem("done",JSON.stringify(this.state.done));                    
            }else{
                this.setState((state)=>{
                    return{
                        doing:doingobj,
                        done:doneobj
                    }
                })
               
            }
        }


    }

    addItem=(data)=>{
        this.setState((state)=>{
            let doing = [...state.doing,data];
            return{
                doing:doing
            }
        },()=>{
            localStorage.setItem("doing",JSON.stringify(this.state.doing));            
        })
    }

    delItem=(item,flag,redel)=>{
        this.setState((state)=>{
        let doing =[...state.doing];
        let done =[...state.done];
        this.delete(item,redel);
        
        if(!flag){
            let idxing=doing.indexOf(item);
            doing.splice(idxing,1);
            return{
                doing:doing
            }
        }else{
            let idxdone=done.indexOf(item);
            done.splice(idxdone,1);
            return{
                done:done
            }
        }
        },()=>{
            localStorage.setItem("doing",JSON.stringify(this.state.doing));
            localStorage.setItem("done",JSON.stringify(this.state.done));
        })
    }

    delete=(item,redel)=>{
        if(redel){
            localStorage.removeItem(item);
        }
    }

    changeItem=(text,changeFlag)=>{
        if(changeFlag){
            this.setState((state)=>{
                let adddo=[...state.doing,text];
                return{
                    doing:adddo
                }
            })
            this.delItem(text,true,false);
            localStorage.setItem("done",JSON.stringify(this.state.done));
        }else{
            this.setState((state)=>{
                let adone=[...state.done,text];
                return{
                    done:adone
                }
            })
            this.delItem(text,false,false);
            localStorage.setItem("doing",JSON.stringify(this.state.doing));
        }
    }



    handleInput=(e)=>{
        if(e.keyCode === 13){
            this.addItem(e.target.value);
        }
    }



    render() {
        return (
            <div>
                <ListInput click={this.handleInput}/>
                <ListDoing del={this.delItem} change={this.changeItem} done={this.state.done} doing={this.state.doing}/>
            </div>
        )
    }
}
