import React from 'react';
import ReactDOM from 'react-dom';
import { Provider } from 'react-redux';

//store setup
import { createStore, applyMiddleware, compose } from 'redux';
import combinedReducers from './redux/reducers/combinedReducers';
import thunk from 'redux-thunk'

import './css/main.css';
import App from './App';


const initialState = {
}

const store = createStore(
    combinedReducers, 
    initialState,
    compose(
        applyMiddleware(thunk),
        window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__()
    )
)

ReactDOM.render(
<Provider store={store}>
    <App />
</Provider>,
document.getElementById('root')
);