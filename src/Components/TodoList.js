import React, { Component } from 'react';
import Todo from './Todo'

class TodoList extends Component{
    render() {
        var todos = [];
        for (var index in this.props.todos){
            todos.push(<Todo key={index} todo={this.props.todos[index]} ></Todo>);
        }

        return (
            <div>
                {todos}
            </div>
        );
    }
}

export default TodoList;