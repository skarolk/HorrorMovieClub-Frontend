import React from 'react';
import { ActionCable } from 'react-actioncable-provider';
import { API_ROOT } from '../constants';
import NewClubForm from './NewClubForm';
import ChatArea from './ChatArea';
import Cable from './Cable';

class ClubsList extends React.Component {
  state = {
    clubs: [],
    activeClub: null
  };

  componentDidMount = () => {
    fetch(`${API_ROOT}/clubs`)
      .then(res => res.json())
      .then(clubs => this.setState({ clubs }));
  };

  handleClick = id => {
    this.setState({ activeClub: id });
  };

  handleReceivedClub = response => {
    const { club } = response;
    this.setState({
      clubs: [...this.state.clubs, club]
    });
  };

  handleReceivedMessage = response => {
    const { message } = response;
    const clubs = [...this.state.clubs];
    const club = clubs.find(
      club => club.id === message.club_id
    );
    club.messages = [...club.messages, message];
    this.setState({ clubs });
  };

  render = () => {
    console.log(this.state.clubs)
    const { clubs, activeClub } = this.state;
    return (
      <div className="clubsList">
        <ActionCable
          channel={{ channel: 'ClubsChannel' }}
          onReceived={this.handleReceivedClub}
        />
        {this.state.clubs.length ? (
          <Cable
            clubs={clubs}
            handleReceivedMessage={this.handleReceivedMessage}
          />
        ) : null}
        <h2>Clubs</h2>
        <ul>{mapClubs(clubs, this.handleClick)}</ul>
        <NewClubForm />
        {activeClub ? (
          <ChatArea
            club={findActiveClub(
              clubs,
              activeClub
            )}
          />
        ) : null}
      </div>
    );
  };
}

export default ClubsList;

// helpers

const findActiveClub = (clubs, activeClub) => {
  return clubs.find(
    club => club.id === activeClub
  );
};

const mapClubs = (clubs, handleClick) => {
  return clubs.map(club => {
    return (
      <li key={club.id} onClick={() => handleClick(club.id)}>
        {club.id}
      </li>
    );
  });
};
