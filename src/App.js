import React, { Component } from 'react';
import Nav from './component/nav';
import Welcome from './page/welcome';
import Goods from './page/goods';
import MyPractice from './page/MyPractice';
import './App.css';
import 'antd/dist/antd.css'
import {Route} from 'react-router-dom';

const LIST = [{
    text: 'welcome',
    url: '/welcome'
}, {
    text: 'goods',
    url: '/goods'
}, {
    text: 'myPractice',
    url: '/myPractice'
}];

class App extends Component {
    render() {
        return (
            <div className="App">
                <div className="nav_bar">
                    <Nav list={LIST} />
                </div>
                <div className="conent">
                    <Route path='/welcome' component={Welcome} />
                    <Route path='/goods' component={Goods} />
                    <Route path='/myPractice' component={MyPractice} />
                </div>
            </div>
        );
    }
}

export default App;
