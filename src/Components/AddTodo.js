import React, {Component} from 'react';

class AddTodo extends Component{
    constructor(props){
        super(props);
        this.state = {
            todo: ''
        };
    }
    
    onChange(event){
        var newState = {
            todo: event.target.value
        };

        this.setState(newState);
    }

    onAdd(){
        this.props.onAdd(this.state.todo);
        this.setState({
            todo: ''
        });
    }
    
    render(){
        return (
            <div>
                <input id="addTodo" onChange={this.onChange.bind(this)} value={this.state.todo}></input>
                &nbsp;<input type="button" className="btn btn-primary" value="Add" onClick={this.onAdd.bind(this)} />
            </div>
        );
    }
}

export default AddTodo;