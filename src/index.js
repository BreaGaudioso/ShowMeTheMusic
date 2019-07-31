import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from '../src/components/app/App';
import { HashRouter } from 'react-router-dom';
import { createStore } from 'redux';
import { Provider } from 'react-redux';
import rootReducer from './reducers/index';
import * as serviceWorker from './serviceWorker';

// const dotenv = require('dotenv');
// dotenv.config();
// module.exports = {
//     endpoint: process.env.API_URL,
//     masterKey: process.env.API_KEY,
//     port: process.env.PORT
// };


const store = createStore(rootReducer);

const render = (Component) => {
    ReactDOM.render(
    <HashRouter>
        <Provider store={store}>
            <Component/>
        </Provider>
    </HashRouter>, document.getElementById('root')
    );
};

render(App);




// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA
serviceWorker.unregister();
