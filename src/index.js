import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import registerServiceWorker from './registerServiceWorker';
import TodoStore from './Store/TodoStore'
import Dispatcher from './Dispatcher/Dispatcher'
import { TodoActions, TodoActionConstants } from './Actions/TodoActions'

var initialState = 
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

var store = new TodoStore(initialState);

store.on('FAKE_EVENT', function(){
    console.log("Fake event raised");
});

store.emit('FAKE_EVENT');

Dispatcher.register(function(action){
    console.log('Action received: ' + action.type);
});

Dispatcher.register(function(action){
    switch (action.type){
        case TodoActionConstants.ADD_TODO:
            store.addTodo(action.todoText);
            break;
        case TodoActionConstants.MARK_AS_COMPLETED:
            store.markTodoAsCompleted(action.id);
            break;
        case TodoActionConstants.STATE_FORWARD:
            store.stateForward();
            break;
        case TodoActionConstants.STATE_BACKWARD:
            store.stateBackward();
            break;
    }
})


ReactDOM.render(<App store={store} />, document.getElementById('root'));
registerServiceWorker();