import React, { Component } from 'react'
import { Button, Form, Message } from 'semantic-ui-react'
import InlineError from './InlineError'
import PropTypes from 'prop-types'
import {Redirect} from 'react-router-dom'
class NewUserFrom extends Component {
    state = {
        id:this.props.user ? this.props.user.id : '',
        username:this.props.user ? this.props.user.userName : '',
        lastname:this.props.user ? this.props.user.lastName : '',
        errors: {}
    }

    static propTypes = {
        newUserSubmit: PropTypes.func.isRequired
    }
    handleChange = (e) => {
        this.setState({
            [e.target.name]: e.target.value
        })
    }
    componentWillReceiveProps(nextProps){
        console.log(nextProps.newUser.user.userName)
        if(nextProps.newUser.user.userName && nextProps.newUser.user.userName!== this.state.username){
            this.setState({
                username:nextProps.newUser.user.userName,
                lastname:nextProps.newUser.user.lastName
            })
        }
    }

    onSubmit = () => {
        const errors = this.validate();
        this.setState({
            errors
        })

        const id=this.state.id || this.props.newUser.user.id;
     

        if (Object.keys(errors).length === 0) {
            if(!id)
            this.props.newUserSubmit(this.state)
            else
            this.props.onUpdateMovieSubmit({...this.state,id})
        }
    }

    validate = () => {
        const errors = {};
        if (!this.state.username) errors.username = "Username girilmedi"
        if (!this.state.lastname) errors.lastname = "Lastname girilmedi"
        return errors;
    }

    render() {
        const { errors } = this.state
        console.log(this.props.newUser.fetching , this.props.newUser.user.fetching)
        const form = (
            <Form onSubmit={this.onSubmit} loading={this.props.newUser.fetching || this.props.newUser.user.fetching}>
                <Form.Field error={!!errors.username}>
                    <label>User Name</label>
                    {errors.username && <InlineError message={errors.username}></InlineError>}
                    <input id="username" name="username" value={this.state.username} onChange={this.handleChange} placeholder='First Name' />
                </Form.Field>
                <Form.Field error={!!errors.lastname}>
                    <label>Last Name</label>
                    {errors.lastname && <InlineError message={errors.lastname}></InlineError>}
                    <input id="lastname" name="lastname" value={this.state.lastname} onChange={this.handleChange} placeholder='Last Name' />
                </Form.Field>
                <Button primary type='submit'>New User</Button>
                {
                    this.props.newUser.error.request
                    &&
                    (
                        <Message negative>
                            <Message.Header>We're Sorry</Message.Header>
                            <p>A problem occured while recording.</p>
                        </Message>
                    )
                }
            </Form>

        );
        return (
            <div>
                {
                    this.props.newUser.done ? <Redirect to="/" ></Redirect> : form
                }
            </div>
        );
    }


}

export default NewUserFrom;