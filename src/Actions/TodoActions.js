
export const ADD_TODO = 'ADD_TODO';
export const addTodo = (todoText) => {
    return {
        type: ADD_TODO,
        todoText: todoText
    };
}

export const MARK_AS_COMPLETED = 'MARK_AS_COMPLETED';
export const markAsCompleted = (id) => {
    return {
        type: MARK_AS_COMPLETED,
        id: id
    }
}

