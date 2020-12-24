// ./src/components/todos/TodosContainer.js
 
import React, { Component } from 'react';
import { connect } from 'react-redux'
import Todo from './Todo'
 
class TodosContainer extends Component {
 
    //ow our TodosContainer is mapping over the todos it received from Redux, passing the value of each todo into a child component, 
    //Todo. Todo in this case doesn't have any Redux related code, and is a regular, functional component.
  renderTodos = () => this.props.todos.map((todo, id) => <Todo key={id} text={todo} />)
 
  render() {
    return(
      <div>
        {this.renderTodos()}
      </div>
    );
  }
};
 
const mapStateToProps = state => {
  return {
    todos: state.todos
  }
}
 
export default connect(mapStateToProps)(TodosContainer);

  //we aren't worried about dispatching actions here, only getting state from Redux, 
  //so we'll need to write out a mapStateToProps() function and include it as an argument for connect():