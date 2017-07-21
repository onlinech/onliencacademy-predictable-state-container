import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import registerServiceWorker from './registerServiceWorker';

var todos = [
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
];

ReactDOM.render(<App todos={todos} />, document.getElementById('root'));
registerServiceWorker();
