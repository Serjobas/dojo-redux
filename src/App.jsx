import React from 'react';

import Header from './components/Header';
import List from './components/List';
import Form from './components/Form';

import { addTodo, deleteTodo, editTodo, toggleTodo } from './actions';


class App extends React.Component {
    constructor(props) {
        super(props);


        this.store  = this.props.store

        this.handleAdd = this.handleAdd.bind(this);
    }

    componentDidMount() {
      this.unsubscribe = this.store.subscribe( () => this.forceUpdate());
    }

    componentWillUnmount(){
      this.unsubscribe();
    }

    nextId() {
        return this._nextId += 1;
    }

    handleAdd(title) {
        this.store.dispatch(addTodo(title));
    }


    render() {
        const todos = this.store.getState();

        return (
            <main>
                <Header todos={todos} />

                <List  />

                <Form onAdd={this.handleAdd} />
            </main>
        );
    }
}

App.propTypes = {
    initialData: React.PropTypes.arrayOf(React.PropTypes.shape({
        id: React.PropTypes.number.isRequired,
        title: React.PropTypes.string.isRequired,
        completed: React.PropTypes.bool.isRequired
    })).isRequired
};

export default App;
