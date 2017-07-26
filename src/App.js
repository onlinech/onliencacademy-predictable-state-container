import React, { Component } from 'react';
import logo from './logo.svg';
import TodoList from './Components/TodoList';
import AddTodo from './Components/AddTodo';
import StateHistory from './Components/StateHistory';
import './App.css';

class App extends Component {
  
  constructor(props){
    super(props);
    this.store = this.props.store;
    this.state = {
        todos: this.props.store.getTodos()
    } 
  }

  componentDidMount(){
    this.store.addChangeListener(this.onChange.bind(this));
  }

  componentWillUnmount(){
    this.store.removeEventListener(this.onChange.bind(this));
  }

  onChange(){
    this.setState({
      todos: this.store.getTodos()
    });
  }

  render() {
    return (
      <div className="App">
        <div className="App-header">
          <img src={logo} className="App-logo" alt="logo" />
          <h2>Welcome to React</h2>
        </div>
        <div className="container">
          <StateHistory/>
          <TodoList todos={this.state.todos} />
          <AddTodo />
        </div>
      </div>
    );
  }
}

export default App;
