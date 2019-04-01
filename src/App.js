import React, { Component } from 'react';
import './App.css';
import Header from './components/layout/Header';
import Todos from "./components/Todos";
import AddTodo from "./components/AddTodo";

class App extends Component {
  state = {
    todos: [
      {
        id: 1,
        title: 'Take out the trash',
        completed: false
      },
      {
        id: 2,
        title: 'Clean the house',
        completed: true
      },
      {
        id: 3,
        title: 'Meeting with friends',
        completed: false
      }
    ]
  }

  // Toggle complete
  markComplete = (id) => {
    this.setState({ todos: this.state.todos.map(todo => {
      if(todo.id === id){
        todo.completed = !todo.completed
      }
      return todo;
    }) });
  } 

//del Todo
delTodo = (id) => {
  this.setState({ todos: [...this.state.todos.filter(todo => todo.id !== id)] });
}

  render() {
  
    return (
      <div className="App">
        <div className="container" >
          <Header />
          <AddTodo />
          <Todos todos={this.state.todos} markComplete={this.markComplete} delTodo={this.delTodo} />
        </div>
      
      </div>
    );
  }
}

export default App;
