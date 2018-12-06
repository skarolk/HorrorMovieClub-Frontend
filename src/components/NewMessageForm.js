import React from 'react';
import { API_ROOT, HEADERS } from '../constants';
import { Button } from 'semantic-ui-react';

class NewMessageForm extends React.Component {
  state = {
    text: '',
    club_id: this.props.club_id,
    user_id: this.props.user.id
  };

  componentWillReceiveProps = nextProps => {
    this.setState({ club_id: nextProps.club_id });
  };

  handleChange = e => {
    this.setState({ text: e.target.value });
  };

  handleSubmit = e => {
    e.preventDefault();
    if (this.state.text.length !== 0) {
      fetch(`${API_ROOT}/messages`, {
        method: 'POST',
        headers: HEADERS,
        body: JSON.stringify(this.state)
      });
      this.setState({ text: '' });
    } else {
      return null
    }
  };

  render = () => {
    return (
      <form className="ui form" onSubmit={this.handleSubmit}>
        <div className="messageSubmit">
          <input
            type="text"
            value={this.state.text}
            onChange={this.handleChange}
            placeholder="Enter your message here ..."
          />
          <Button className="messageSubmitButton" primary type="submit">Submit</Button>
        </div>
      </form>
    );
  };
}

export default NewMessageForm;
