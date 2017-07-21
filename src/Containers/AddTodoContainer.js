import { connect } from 'react-redux';
import AddTodo from '../Components/AddTodo';
import { addTodo } from '../Actions/TodoActions'

const mapStateToProps = (state) => {
    return {};
};

const mapDispatchToProps = (dispatch) => {
    return {
        onAdd: (todoText) => {
            dispatch(addTodo(todoText));
        }
    };
};

const AddTodoContainer = connect(
  mapStateToProps,
  mapDispatchToProps  
)(AddTodo);

export default AddTodoContainer;