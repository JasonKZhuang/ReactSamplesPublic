//npm add formik
//npm add moment
import React, { Component } from 'react';
import moment from 'moment';
import { Formik, Form, Field, ErrorMessage } from 'formik';
import TodoDataService from './api/TodoDataService.js';
import AuthenticationService from './api/AuthenticationService.js';

class TodoFormComponent extends Component {
    constructor(props) {
        super()
        //console.log(props.match.params.id);
        this.state = {
            id: props.match.params.id,
            description: '',
            targetDate: moment(new Date()).format('YYYY-MM-DD'),
        }

    }

    componentDidMount() {
        if (this.state.id === -1) {
            return;
        }

        let username = AuthenticationService.getSessionUsername();
        TodoDataService.retrieveTodo(username, this.state.id)
            .then(
                response => this.setState({
                    description: response.data.description,
                    targetDate: moment(response.data.targetDate).format('YYYY-MM-DD')
                })

            )
    }

    validate = (values) => {
        //let errors = { description: "Should have at least 5 characters" }
        let errors = {}
        //
        if (!values.description) {
            errors.description = "Enter a description";
        } else if (values.description.length < 5) {
            errors.description = "Enter at least 5 Characters";
        }
        //
        if (!moment(values.targetDate).isValid) {
            errors.targetDate = 'Enter a valid Target Date';
        }

        return errors;
    }

    onSubmit = (values) => {
        let username = AuthenticationService.getSessionUsername();
        let todo = {
            id: this.state.id,
            description: values.description,
            targetDate: values.targetDate
        };
        if (this.state.id === '-1') {
            TodoDataService.createTodo(username, todo).then(
                () => {
                    this.props.history.push('/todos');
                }
            )
        } else {
            TodoDataService.updateTodo(username, this.state.id, todo).then(
                () => {
                    this.props.history.push('/todos');
                }
            )
        }
    }


    render() {
        // let description = this.state.description;    
        // let targetDate = this.state.targetDate;
        let { description, targetDate } = this.state;
        return (
            <div>
                <h1>Welcome {this.props.match.params.id} TODO </h1>
                <div className='container'>
                    <Formik initialValues={{ description: description, targetDate: targetDate }}
                        onSubmit={this.onSubmit}
                        validateOnChange={false}
                        validateOnBlur={false}
                        validate={this.validate}
                        enableReinitialize={true}
                    >
                        {
                            (props) => (
                                <Form>
                                    <ErrorMessage name='description' component='div' className='alert alert-warning' />
                                    <ErrorMessage name='targetDate' component='div' className='alert alert-warning' />
                                    <fieldset className='form-group'>
                                        <label>Description</label>
                                        <Field className='form-control' type='text' name='description' />
                                    </fieldset>
                                    <fieldset className='form-group'>
                                        <label>Target Date</label>
                                        <Field className='form-control' type='date' name='targetDate' />
                                    </fieldset>
                                    <button className='btn btn-success' type='submit'>Save</button>
                                </Form>
                            )
                        }
                    </Formik>

                </div>
            </div>
        )
    }
}

export default TodoFormComponent
