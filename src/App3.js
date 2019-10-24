import React, { Component } from 'react';
import Header from './components/header'
import {BrowserRouter as Router,Route}from 'react-router-dom'
import Home from './container/home';
import Api from './container/api';
import Start from './container/start';
import About from './container/about';

export default class App extends Component {
    render() {
        return (
            <Router>
                <div> 
                    <Header/>
                    <div className='main'>
                        <div className='content'>
                            <Route path='/home' component={Home}/>
                            <Route path='/api' component={Api}/>
                            <Route path='/start' component={Start}/>
                            <Route path='/about' component={About}/>
                        </div>
                        <div className='sider'>

                        </div>

                    </div>
                </div>
            </Router>
            
        )
    }
}
