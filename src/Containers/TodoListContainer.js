import { connect } from 'react-redux';
import TodoList from '../Components/TodoList';
import { markAsCompleted } from '../Actions/TodoActions'

const mapStateToProps = (state) => {
    return {
        todos: state.todos
    };
};

const mapDispatchToProps = (dispatch) => {
    return {
        onMarkCompleted: (id) => {
            dispatch(markAsCompleted(id));
        }
    };
};

const TodoListContainer = connect(
  mapStateToProps,
  mapDispatchToProps  
)(TodoList);

export default TodoListContainer;