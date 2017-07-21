import React, { Component } from 'react';
import logo from './logo.svg';
import TodoListContainer from './Containers/TodoListContainer';
import AddTodoContainer from './Containers/AddTodoContainer';
import './App.css';

class App extends Component {
  
  constructor(props){
    super(props);
    
    this.state = {
        todos: {}
    } 
  }

  render() {
    return (
      <div className="App">
        <div className="App-header">
          <img src={logo} className="App-logo" alt="logo" />
          <h2>Welcome to React</h2>
        </div>
        <div className="container">
          <TodoListContainer />
          <AddTodoContainer />
        </div>
      </div>
    );
  }
}

export default App;
