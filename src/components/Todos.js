import React, { Component } from 'react'
import TodoItem from "./TodoItem";
import propTypes from 'prop-types';

export class Todos extends Component {

  

  render() {
    return this.props.todos.map((todo) => (
        <TodoItem key={todo.id} todo={todo} markComplete={this.props.markComplete} delTodo={this.props.delTodo} />
        
    ));
  }
}

// propTypes
Todos.propType ={
  todos: propTypes.array.isRequired,
  markComplete: propTypes.func.isRequired,
  delTodo: propTypes.func.isRequired,
  
}

export default Todos;