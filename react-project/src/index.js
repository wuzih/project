import React from 'react';
import ReactDOM from 'react-dom';
import './stylesheets/main.scss'
import './modules/rem';

import App from './App';
import registerServiceWorker from './registerServiceWorker';

import { Provider } from 'react-redux';
import store from './store'

import { BrowserRouter as Route } from 'react-router-dom'

ReactDOM.render(
    <Provider store = {store} >
        <Route>
            <App />
        </Route>
    </Provider>, document.getElementById('root'));
registerServiceWorker();
