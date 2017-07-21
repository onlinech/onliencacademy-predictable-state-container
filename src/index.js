import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import registerServiceWorker from './registerServiceWorker';
import { createStore } from 'redux';
import { Provider } from 'react-redux';
import { todoReducer } from './Reducers/TodoReducer';


const initialState = 
{
    todos: [
        {
            id: 1,
            task: 'Describe flux',
            completed: true
        },
        {
            id: 2,
            task: 'Introduce React',
            completed: false
        },
        {
            id: 3,
            task: 'Implement flux',
            completed: false
        },
        {
            id: 4,
            task: 'Show redux',
            completed: false
        }
    ]};

let store = createStore(todoReducer, initialState, window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__());

ReactDOM.render(<Provider store={store}><App /></Provider>, document.getElementById('root'));
registerServiceWorker();