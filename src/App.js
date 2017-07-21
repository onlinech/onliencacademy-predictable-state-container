import React, { Component } from 'react';
import logo from './logo.svg';
import TodoList from './Components/TodoList';
import AddTodo from './Components/AddTodo';
import './App.css';

class App extends Component {
  
 constructor(props){
   super(props);
   this.state = this.props;
 }
  
  onMarkCompleted(id){
    var newState = Object.assign({}, this.state, {
      todos: this.state.todos.map((todo) => {
        if (todo.id === id) {
          return Object.assign({}, todo, {
            completed: true
          })
        }
        return todo;
      })
    });

    this.setState(newState);
  }

  onAdd(todo){
    var newState = Object.assign({}, this.state, {
      todos: [
        ...this.state.todos,
        {
          id: this.state.todos.length + 1,
          task: todo,
          completed: false
        }
      ]
    });
    this.setState(newState);
  }

  render() {
    return (
      <div className="App">
        <div className="App-header">
          <img src={logo} className="App-logo" alt="logo" />
          <h2>Welcome to React</h2>
        </div>
        <div className="container">
          <TodoList todos={this.state.todos} onMarkCompleted={this.onMarkCompleted.bind(this)}/>
          <AddTodo onAdd={this.onAdd.bind(this)}/>
        </div>
      </div>
    );
  }
}

export default App;
