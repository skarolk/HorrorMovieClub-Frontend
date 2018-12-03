import React from 'react';
import { connect } from 'react-redux';
import { ActionCable } from 'react-actioncable-provider';
import { API_ROOT } from '../constants';
import NewClubForm from './NewClubForm';
import ChatArea from './ChatArea';
import Cable from './Cable';
import withAuth from '../hocs/withAuth';
import UserIcon from './UserIcon';

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

  findMovie = () => {
    let targetClub = findActiveClub(this.state.clubs, this.state.activeClub)
    return this.props.movies.find(
       movie => movie.id === targetClub.movie_id
    )
  }

  findMovieName = () => {
    let targetMovie = this.findMovie()
    return targetMovie.name
  }

  findPoster = () => {
    let targetMovie = this.findMovie()
    return targetMovie.poster
  };

  render = () => {
    console.log(this.state.clubs)
    let posterUrl = "https://image.tmdb.org/t/p/w780"
    const { clubs, activeClub } = this.state;
    return (
      <div>
        <UserIcon />
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
        {activeClub ? (
          <h1 className="clubHeader">Your movie for this week is  {this.findMovieName()}!</h1>
        ) : null }
        {activeClub ? (
          <img src={posterUrl + this.findPoster()} alt="" className="posterChatImage" />
        ) : null }
        {activeClub ? (
          <ChatArea
            users={this.props.users}
            user={this.props.user}
            club={findActiveClub(
              clubs,
              activeClub
            )}
          />
        ) : null}
        <div className="clubList">
          <p>{mapClubs(clubs, this.handleClick)}</p>
          <NewClubForm />
        </div>
      </div>
    );
  };
}

// export default ClubsList;

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

const mapStateToProps = (reduxStoreState) => {
  return {
    movies: reduxStoreState.movies,
    user: reduxStoreState.userReducer.user,
    users: reduxStoreState.users
  };
}

export default withAuth(connect(mapStateToProps)(ClubsList));
