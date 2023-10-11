import React, { Component } from 'react';
import TodoDataService from './api/TodoDataService.js';
import AuthenticationService from './api/AuthenticationService.js';
import moment from 'moment';

class TodoListComponent extends Component {

    constructor(props) {
        console.log("Constructor method");
        super()
        this.state = {
            message: null,
            todos: []
        }
    }

    componentDidMount() {
        console.log("ComponentDidMount method");
        this.refreshTodos();
    }

    refreshTodos = () => {
        let username = AuthenticationService.getSessionUsername();
        TodoDataService.retrieveAllTodos(username)
            .then(
                response => {
                    //console.log(rsponse);
                    this.setState({
                        todos: response.data
                    })
                }
            )
    }

    componentWillUnmount() {
        console.log("ComponentWillUnmount method");
    }

    // shouldComponentUpdate(nextProps, nextState) {
    //     console.log("ShouldComponentUpdate method");
    //     console.log(nextProps);
    //     console.log(nextState);
    //     //return true; // this means to render the HTML component
    //     //return false;  // this means do not to render the HTML component
    // }


    deleteTodoClicked = (id) => {
        let username = AuthenticationService.getSessionUsername();
        //console.log("=======" + username + id);
        TodoDataService.deleteTodoById(username, id)
            .then(
                response => {
                    this.setState({ message: `Delete todo ${id} successfully` })
                    this.refreshTodos();
                }
            )
    }

    updateTodoClicked = (id) => {
        this.props.history.push(`/todos/${id}`);
    }

    addTodoClicked = () => {
        this.props.history.push('/todos/-1');
    }

    render() {
        console.log("Render method");
        return (
            <div>
                <h2>Todo List Example</h2>
                {this.state.message && <div className="alert alert-success">{this.state.message}</div>}
                <div className="container">
                    <table className='table'>
                        <thead>
                            <tr>
                                <th>Descrition</th>
                                <th>Done</th>
                                <th>Target Date</th>
                                <th>Edit</th>
                                <th>Delete</th>
                            </tr>
                        </thead>
                        <tbody>
                            {
                                this.state.todos.map(
                                    item =>
                                        <tr key={item.id}>
                                            <td>{item.description}</td>
                                            <td>{item.done.toString()}</td>
                                            <td>{moment(item.targetDate).format('YYYY-MM-DD')}</td>
                                            <td>
                                                <button className='btn btn-success'
                                                    onClick={() => this.updateTodoClicked(item.id)}
                                                >
                                                    Update
                                                </button>
                                            </td>
                                            <td>
                                                <button className='btn btn-warning'
                                                    onClick={() => this.deleteTodoClicked(item.id)}
                                                >
                                                    Delete
                                                </button>
                                            </td>
                                        </tr>
                                )
                            }

                        </tbody>
                    </table>
                    <div className="row">
                        <button className='btn btn-success'
                            onClick={() => this.addTodoClicked()}
                        >
                            Add
                        </button>
                    </div>
                </div>
            </div>
        )
    }
}


export default TodoListComponent
