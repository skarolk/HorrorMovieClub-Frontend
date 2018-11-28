import React from 'react';
import { connect } from 'react-redux';
import { withRouter, Redirect } from 'react-router';
import { loginUser } from '../actions/user';
import { Button, Form, Segment, Message } from 'semantic-ui-react';

class LoginForm extends React.Component {
  state = { username: '', password: '' }

  handleChange = (e, semanticInputData) => {
    this.setState({ [semanticInputData.name]: semanticInputData.value })
  }

  handleLoginSubmit = () => {
    this.props.loginUser(this.state.username, this.state.password)
    this.setState({ username: '', password: '' })
  }

  render() {
    return this.props.loggedIn ? (
      <Redirect to="/ratings" />
    ) : (
      <div className="signupForm">
        <Form
          className="ui large form"
          onSubmit={this.handleLoginSubmit}
          size="mini"
          key="mini"
          loading={this.props.authenticatingUser}
          error={this.props.failedLogin}
        >
          <Message error header={this.props.failedLogin ? this.props.error : null} />
          <div>
            <Form.Input
              // label="username"
              placeholder="username"
              name="username"
              onChange={this.handleChange}
              value={this.state.username}
            />
            <Form.Input
              type="password"
              // label="password"
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
    authenticatingUser: reduxStoreState.usersReducer.authenticatingUser,
    failedLogin: reduxStoreState.usersReducer.failedLogin,
    error: reduxStoreState.usersReducer.error,
    loggedIn: reduxStoreState.usersReducer.loggedIn
  }
}

export default withRouter(connect(mapStateToProps, { loginUser })(LoginForm));
