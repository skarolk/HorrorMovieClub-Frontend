import React from 'react';
import { connect } from 'react-redux';
import { withRouter, Redirect } from 'react-router';
import { createUser } from '../actions/user';
import { Button, Form, Segment, Message } from 'semantic-ui-react';

class SignupForm extends React.Component {
  state = { username: '', email: '', password: '' }

  handleChange = (e, semanticInputData) => {
    this.setState({ [semanticInputData.name]: semanticInputData.value })
  }

  handleSignupSubmit = () => {
    this.props.createUser(this.state.username, this.state.email, this.state.password)
    this.setState({ username: '', email: '', password: '' })
  }

  render() {
    return this.props.loggedIn ? (
      <Redirect to="/avatars" />
    ) : (
      <div className="signupForm">
        <Form
          className="ui large form"
          onSubmit={this.handleSignupSubmit}
          size="mini"
          key="mini"
        >
          <div>
            <Form.Input
              placeholder="username"
              name="username"
              onChange={this.handleChange}
              value={this.state.username}
            />
            <Form.Input
              type="email"
              placeholder="email"
              name="email"
              onChange={this.handleChange}
              value={this.state.email}
            />
            <Form.Input
              type="password"
              placeholder="password"
              name="password"
              onChange={this.handleChange}
              value={this.state.password}
            />
          </div>
          <div className="loginButton">
            <Button primary type="submit">Login</Button>
          </div>
        </Form>
      </div>
    )
  }
}

const mapStateToProps = (reduxStoreState) => {
  return {
    loggedIn: reduxStoreState.usersReducer.loggedIn
  }
}

export default withRouter(connect(mapStateToProps, { createUser })(SignupForm));
