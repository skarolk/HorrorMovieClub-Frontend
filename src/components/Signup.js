import React from 'react';
import { connect } from 'react-redux';
import { withRouter, Redirect } from 'react-router';
import { createUser } from '../actions/user';
import { Button, Form } from 'semantic-ui-react';
import { NavLink } from 'react-router-dom';

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
      <Redirect to="/select-avatar" />
    ) : (
      <React.Fragment>
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
              <Button primary type="submit">Signup</Button>
            </div>
          </Form>
        </div>
        <div className="signupLoginLink">
          <NavLink to={'/login'} >
            <h4>Already have an account? Login.</h4>
          </NavLink>
        </div>
      </React.Fragment>
    )
  }
}

const mapStateToProps = (reduxStoreState) => {
  return {
    loggedIn: reduxStoreState.usersReducer.loggedIn
  }
}

export default withRouter(connect(mapStateToProps, { createUser })(SignupForm));
