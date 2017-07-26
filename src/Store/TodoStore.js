import Store from './Store';
import Dispatcher from '../Dispatcher/Dispatcher';
import { TodoActionConstants } from '../Actions/TodoActions';

class TodoStore extends Store{
    constructor(initialState){
        super();
        this.state = initialState;
        this.addToHistory(initialState);
        this.initCallbacks();
    }

    emitChange(){
        this.emit('change');
    }

    addChangeListener(listener){
        this.on('change', listener);
    }

    getTodos(){
        return this.state.todos;
    }

    addTodo(todoText){
        var newState = Object.assign({}, this.state, {
            todos: [
                ...this.state.todos,
                {
                    id: this.state.todos.length + 1,
                    task: todoText,
                    completed: false
                }
            ]
        });
        
        this.state = newState;
        this.addToHistory(newState);
        this.emitChange();
    }

    markTodoAsCompleted(id){
        var newState = Object.assign({}, this.state, {
            todos: this.state.todos.map((todo) => {
                if (todo.id === id) {
                    return Object.assign({}, todo, {
                        completed: true
                        });
                    }

                return todo;
            })
        });

        this.state = newState;
        this.addToHistory(newState);
        this.emitChange();
    }

    initCallbacks(){
        Dispatcher.register(this.onAction.bind(this));
    }

    onAction(action){
        switch (action.type){
            case TodoActionConstants.ADD_TODO:
                this.addTodo(action.todoText);
                break;
            case TodoActionConstants.MARK_AS_COMPLETED:
                this.markTodoAsCompleted(action.id);
                break;
            case TodoActionConstants.STATE_FORWARD:
                this.stateForward();
                break;
            case TodoActionConstants.STATE_BACKWARD:
                this.stateBackward();
                break;
        }
    }
}

export default TodoStore;