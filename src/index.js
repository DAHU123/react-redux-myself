import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import {Provider} from 'react-redux';
import {store} from './store';
import {HashRouter, Route} from 'react-router-dom';

ReactDOM.render(
    <Provider store={store}>
        <HashRouter>
            <Route path='/' component={App}/>
        </HashRouter>
    </Provider>,
document.getElementById('root'));
