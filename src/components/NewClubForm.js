import React from 'react';
import { API_ROOT, HEADERS } from '../constants';

class NewClubForm extends React.Component {
  state = {
    movie_id: 5,
    active: true
  };

  handleSubmit = e => {
    fetch(`${API_ROOT}/clubs`, {
      method: 'POST',
      headers: HEADERS,
      body: JSON.stringify(this.state)
    });
  };

  render = () => {
    return (
      <div className="newConversationForm">
        <button onClick={this.handleSubmit}>
          Create
        </button>
      </div>
    );
  };
}

export default NewClubForm;
