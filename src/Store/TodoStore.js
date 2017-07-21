import Store from './Store';

class TodoStore extends Store{
    constructor(initialState){
        super();
        this.state = initialState;
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
        this.emitChange();
    }
}

export default TodoStore;