import Dispatcher from '../Dispatcher/Dispatcher';

export const TodoActionConstants = {
    ADD_TODO: 'ADD_TODO',
    MARK_AS_COMPLETED: 'MARK_AS_COMPLETED',
    STATE_FORWARD: 'STATE_FORWARD',
    STATE_BACKWARD: 'STATE_BACKWARD'
}

export const TodoActions = {
    addTodo: (todoText) => {
        Dispatcher.dispatch({
            type: TodoActionConstants.ADD_TODO,
            todoText: todoText
        });
    },
    markAsCompleted: (id) => {
        Dispatcher.dispatch({
            type: TodoActionConstants.MARK_AS_COMPLETED,
            id: id
        });
    },
    stateForward: () => {
        Dispatcher.dispatch({
            type: TodoActionConstants.STATE_FORWARD
        });
    },
    stateBackward: () => {
        Dispatcher.dispatch({
            type: TodoActionConstants.STATE_BACKWARD
        });
    }

}

