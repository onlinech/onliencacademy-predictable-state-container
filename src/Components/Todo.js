import React, {Component} from 'react';
import { TodoActions } from '../Actions/TodoActions';

class Todo extends Component{

    onMarkCompleted(){
        TodoActions.markAsCompleted(this.props.todo.id);
    }

    render(){
        return (
            <div className="panel panel-default">
                <div className={ this.props.todo.completed ? "panel-body bg-success" : "panel-body"}>
                    {this.props.todo.task}
                    {!this.props.todo.completed && (
                    <div className="pull-right">
                        <small><a href="#" onClick={ this.onMarkCompleted.bind(this) } >Complete</a></small>
                    </div>)}
                </div>
            </div>
        );
    }
}

export default Todo;