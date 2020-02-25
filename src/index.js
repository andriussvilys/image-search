import React from 'react';
import ReactDOM from 'react-dom';
import './css/main.css';
import App from './App';
import { createStore } from 'redux';
import combinedReducers from './redux/reducers/combinedReducers';
import { Provider } from 'react-redux'

//ACTION
const query = () => {
    return{
        type: 'QUERY'
    }
}

//REDUCER

const store = createStore(combinedReducers, window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__())

//display in console
store.subscribe(() => {
    console.log(store.getState())
})

//DISPATCH
store.dispatch(query())


ReactDOM.render(
<Provider store={store}>
    <App />
</Provider>,
document.getElementById('root')
);