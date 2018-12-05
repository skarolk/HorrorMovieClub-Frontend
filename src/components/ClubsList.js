import React from 'react';
import { connect } from 'react-redux';
import { ActionCable } from 'react-actioncable-provider';
import { API_ROOT } from '../constants';
// import NewClubForm from './NewClubForm';
import ChatArea from './ChatArea';
import Cable from './Cable';
import ClubAvatars from './ClubAvatars';
import withAuth from '../hocs/withAuth';
import UserIcon from './UserIcon';

class ClubsList extends React.Component {
  state = {
    clubs: [],
    activeClub: null
  };

  static getDerivedStateFromProps(props,state) {
    return {
      clubs: props.clubs,
      activeClub: props.user.club_id
    }
  }

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
    let targetClub = findActiveClub(this.state.clubs, this.props.user.club_id)
    if (targetClub) {
      return this.props.movies.find(
         movie => movie.id === targetClub.movie_id
      )
    } else {
      return []
    }
  }

  findMovieName = () => {
    let targetMovie = this.findMovie()
    return targetMovie.name
  }

  findPoster = () => {
    let targetMovie = this.findMovie()
    return targetMovie.poster
  };

  findActiveClub = (clubs, activeClub) => {
    return clubs.find(
      club => club.id === activeClub
    );
  };

  render = () => {
    // console.log(this.findMovie())
    // console.log(this.findPoster())
    let posterUrl = "https://image.tmdb.org/t/p/w780"
    const { clubs, activeClub } = this.state;
    const club = findActiveClub(
      clubs,
      activeClub
    )

    console.log("Club id is", this.state.activeClub)
    console.log("Clubs are", this.state.clubs)
    console.log("Club is", club)
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
        {activeClub && this.props.user.username !== undefined ? (
          <React.Fragment>
            <div className="clubHeader">
              <h1>Your movie for this week is  {this.findMovieName()}!</h1>
            </div>
            <img src={posterUrl + this.findPoster()} alt="" className="posterChatImage" />
            <ClubAvatars
              users={this.props.users}
              user={this.props.user}
              club={findActiveClub(
                clubs,
                activeClub
              )}
            />

            {club && this.state.clubs.length > 0 ? <ChatArea
              users={this.props.users}
              user={this.props.user}
              club={club}
            /> : null}

          </React.Fragment>
        ) : null}
      </div>
    );
  };
}

const findActiveClub = (clubs, activeClub) => {
  return clubs.find(
    club => club.id === activeClub
  );
};

const mapStateToProps = (reduxStoreState) => {
  return {
    movies: reduxStoreState.movies,
    user: reduxStoreState.userReducer.user,
    users: reduxStoreState.users,
    clubs: reduxStoreState.clubs
  };
}

export default withAuth(connect(mapStateToProps)(ClubsList));
