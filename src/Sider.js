import React, { Component } from 'react'
import {Link,NavLink} from 'react-router-dom'
export default class Sider extends Component {
    render() {
        return (
            <ul style={{float: 'left'}}>
                <li><NavLink exact activeStyle={{background:'red',color:'#fff',fontSize:30}} to='/'>Todolist</NavLink></li> 
                <li><NavLink activeStyle={{background:'red',color:'#fff',fontSize:30}}  to='/hoc'>Hoc</NavLink></li>
                <li><NavLink activeStyle={{background:'red',color:'#fff',fontSize:30}}  to='/request'>Request</NavLink></li>   
                <li><Link to={'/userinfor/1'}>userinfor1</Link></li>   
                <li><Link to={'/userinfor/2'}>userinfor2</Link></li>   
                {
                    [1,2,3,4,5,6].map((item)=>(
                        <li key={item}><Link to={'/topic/'+item}>topic{item}</Link></li>   
                    ))
                }

            </ul>
        )
    }
}

//\？
//\q
//psql -U hello -d hello
//\dt 显示表
//\dS 显示列信息
//npm i pg

// const pg = require('pg');

// var pdb = new pg.Pool({//new pg.Pool//提升性能 
//     host : '127.0.01',
//     port : 5432,
//     user : 'yangfan',
//     database : "yangfan",
//     password : 'yangfan123'
// });

// pdb.on('error',err =>{
//     console.log(err);
//     process.exit(1);
// });

// //pdb.connect();

// ;(async()=>{
//     let sql = 'SELECT username,email FROM users WHERE id>1';
//     // let sql = 'INSERT INTO users(username,passwd)'+'VALUES($1,$2)';
//     let retdata = await pdb.query(sql,[
//         `u${Date.now()}`,'123456'
//     ]);

//     console.log(retdata);
// })();

// //cd pgdb
// //node pg
// //select * from users;