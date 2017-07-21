import { ADD_TODO, MARK_AS_COMPLETED } from '../Actions/TodoActions'

export const todoReducer = (state = {}, action) => {
    switch (action.type){
        case ADD_TODO:
            return Object.assign({}, this.state, {
                    todos: [
                        ...state.todos,
                        {
                            id: state.todos.length + 1,
                            task: action.todoText,
                            completed: false
                        }
                    ]
                });            
        case MARK_AS_COMPLETED:
            return Object.assign({}, state, {
                    todos: state.todos.map((todo) => {
                        if (todo.id === action.id) {
                            return Object.assign({}, todo, {
                                    completed: true
                                });
                            }

                        return todo;
                    })
                });
        default:
            return state;
    }
}