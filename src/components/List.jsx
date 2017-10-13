import React from 'react';

import Todo from './Todo';

class List extends React.Component {
  constructor(props){
    super(props);

    this.handleDelete = this.handleDelete.bind(this);
    this.handleToggle = this.handleToggle.bind(this);
    this.handleEdit = this.handleEdit.bind(this);
  }

  handleDelete(id) {
      this.store.dispatch(deleteTodo(id));
  }

  handleToggle(id) {
      this.store.dispatch(toggleTodo(id));
  }

  handleEdit(id, title) {
      this.store.dispatch(editTodo(id, title));
  }

  render(){
      return (
          <section className="todo-list">
              {props.todos.map(todo =>
                  <Todo
                      key={todo.id}
                      id={todo.id}
                      title={todo.title}
                      completed={todo.completed}
                      onDelete={props.onDelete}
                      onToggle={props.onToggle}
                      onEdit={props.onEdit}
                  />)
              }
          </section>
      );
    }
}

List.propTypes = {
    todos: React.PropTypes.arrayOf(React.PropTypes.shape({
        id: React.PropTypes.number.isRequired,
        title: React.PropTypes.string.isRequired,
        completed: React.PropTypes.bool.isRequired
    })).isRequired,
    onDelete: React.PropTypes.func.isRequired,
    onToggle: React.PropTypes.func.isRequired,
    onEdit: React.PropTypes.func.isRequired
};

export default List;
