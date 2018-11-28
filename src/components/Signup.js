import React from 'react';
import { NavLink } from 'react-router-dom';
import { Button, Form, Segment, Message } from 'semantic-ui-react';

const Signup = () => {
  return (
    <div className="signupForm">
      <Form
        size="mini"
        key="mini"
      >
        <div>
          <Form.Input
            placeholder="username"
            name="username"
          />
          <Form.Input
            type="email"
            placeholder="email"
            name="email"
          />
          <Form.Input
            type="password"
            placeholder="password"
            name="password"
          />
        </div>
        <NavLink to="/avatars">
          <div className="loginButton">
            <Button primary type="submit">Login</Button>
          </div>
        </NavLink>
      </Form>
    </div>
  );
};

export default Signup;
