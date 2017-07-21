import React, { Component } from 'react';
import Todo from './Todo'

class TodoList extends Component{
    onMarkCompleted(id){
        this.props.onMarkCompleted(id);
    }

    render() {
        var todos = [];
        for (var index in this.props.todos){
            todos.push(<Todo key={index} todo={this.props.todos[index]} onMarkCompleted={this.onMarkCompleted.bind(this)}></Todo>);
        }

        return (
            <div>
                {todos}
            </div>
        );
    }
}

export default TodoList;