import React,{Component,Fragment} from 'react';

// 类定义组件
export  default class ShowTime extends Component{
    constructor(props){
        super(props);
        this.state = {
            time: new Date().toLocaleString()
        }
        this.handleClick = this.handleClick.bind(this);
        
        console.log('constructor',this.props.word);
    }
    componentDidMount(){
        console.log('componentDidMount');
        setTimeout(()=>{
            console.log(1)
            this.setState({
                time: new Date().toLocaleString()
            })
        },1000)
    }
    shouldComponentUpdate(){
        return true;
    }
    getSnapshotBeforeUpdate(){
        console.log('getsnapshot');
    }
    componentDidUpdate(){
        console.log('didupdate');
        
    }
    handleClick(num,e){
        console.log(num,e);
        console.log('点击成功');
    }
    divClick(num,e){
        console.log(num,e);
        console.log('点击实现')
    }
    render(){
        console.log('render');

        return (
            <Fragment>
                <div onClick={(ev)=>{this.handleClick(1,ev)}}>{this.state.time}</div>
                <div onClick={this.divClick.bind(this,233)}>hello{this.props.word}</div>
            </Fragment>
        );
    }
}

//导出
//export default ShowTime;
// export {ShowTime}