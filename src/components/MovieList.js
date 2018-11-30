import React, { Component } from 'react';
import { connect } from 'react-redux';
import withAuth from '../hocs/withAuth';
import UserIcon from './UserIcon';
import { fetchMovies } from '../actions';
import { rateMovie } from '../actions';
import { Redirect } from 'react-router-dom';

class MovieList extends Component {
  state = {
    pagesCompleted: 0
  }

  componentDidMount() {
    this.shuffle(this.props.fetchMovies());
  }

  shuffle = (movies) => {
    for (let i = movies.length; i; i--) {
      let randNum = Math.floor(Math.random() * i);
      [movies[i - 1], movies[randNum]] = [movies[randNum], movies[i - 1]];
    }
  }

  rate = (movie, userId, liked) => {
    this.props.rateMovie(movie, userId, liked)
    this.setState({
      pagesCompleted: this.state.pagesCompleted + 1
    })
  }

  createMovie = (movie) => {
    // For larger posters
    // let posterUrl = "https://image.tmdb.org/t/p/w780"
    let posterUrlSmall = "https://image.tmdb.org/t/p/w500"
    return (
      <div key={movie.id} className="movieContainer">
        <div className="ratingCard" >
          <h2>{movie.name}</h2>
          <div>
            <img src={posterUrlSmall + movie.poster} alt="" className="posterImage" />
          </div>
          <div className="likeDislikeButtons">
            <button className="ui button primary" onClick={() => this.rate(movie, this.props.user.id, true)}>
              Like
            </button>
          </div>
        </div>
      </div>
    )
  }

  // For potential alternate signup flow:
  // <button className="ui button primary" onClick={() => this.rate(movie, this.props.user.id, false)}>
  //   Dislike
  // </button>

  renderMovieList() {
    if (this.state.pagesCompleted === 0) {
      return this.props.movies.slice(0,3).map(movie => {
        return this.createMovie(movie)
      })
    } else if (this.state.pagesCompleted === 1) {
      return this.props.movies.slice(3,6).map(movie => {
        return this.createMovie(movie)
      })
    } else if (this.state.pagesCompleted === 2) {
      return this.props.movies.slice(6,9).map(movie => {
        return this.createMovie(movie)
      })
    } else if (this.state.pagesCompleted === 3) {
      return this.props.movies.slice(9,12).map(movie => {
        return this.createMovie(movie)
      })
    } else if (this.state.pagesCompleted === 4) {
      return this.props.movies.slice(12,15).map(movie => {
        return this.createMovie(movie)
      })
    } else if (this.state.pagesCompleted === 5) {
      return <Redirect to={'/join-club'} />
    }
  }

  render() {
    return (
      <div>
        <div className="ratingHeader">
          <h1>Choose your favorite!</h1>
          <UserIcon />
        </div>
        <div>
          {this.renderMovieList()}
        </div>
        <div className="ratingFooter">
          <h3>{this.state.pagesCompleted + 1} of 5</h3>
          <p>This will help us match you with members that like similar horror movies.</p>
        </div>
      </div>
    )
  }
}

const mapStateToProps = (reduxStoreState) => {
  return {
    movies: reduxStoreState.movies,
    user: reduxStoreState.userReducer.user
  };
}

export default withAuth(connect(mapStateToProps, { fetchMovies, rateMovie })(MovieList));
