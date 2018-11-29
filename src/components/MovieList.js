import React, { Component } from 'react';
import { connect } from 'react-redux';
import withAuth from '../hocs/withAuth';
import UserIcon from './UserIcon';
import { fetchMovies } from '../actions';
import { rateMovie } from '../actions';

class MovieList extends Component {
  state = {
    pagesCompleted: 0
  }

  componentDidMount() {
    this.props.fetchMovies();
  }

  shuffle = (movies) => {
    for (let i = movies.length; i; i--) {
      let randNum = Math.floor(Math.random() * i);
      [movies[i - 1], movies[randNum]] = [movies[randNum], movies[i - 1]];
    }
  }

  createMovie = (movie) => {
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
            <button className="ui button primary" onClick={() => this.props.rateMovie(movie)}>
              Like
            </button>
            <button className="ui button primary" onClick={() => this.props.rateMovie(movie)}>
              Dislike
            </button>
          </div>
        </div>
      </div>
    )
  }

  renderMovieList() {
    this.shuffle(this.props.movies)
    let fifteenMovies =  this.props.movies.slice(0, 15)

    if (this.state.pagesCompleted === 0) {
      return fifteenMovies.slice(0,3).map(movie => {
        return this.createMovie(movie)
      })
    }
  }

  render() {
    return (
      <div>
        <div className="ratingHeader">
          <h1>Rate these Movies!</h1>
          <UserIcon />
        </div>
        <div>
          {this.renderMovieList()}
        </div>
        <div className="ratingFooter">
          <h3>1 of 5</h3>
        </div>
      </div>
    )
  }
}

const mapStateToProps = (reduxStoreState) => {
  return {
    // ratedMovie: state.ratedMovie,
    movies: reduxStoreState.movies,
    user: reduxStoreState.usersReducer.user
  };
}

export default withAuth(connect(mapStateToProps, { fetchMovies, rateMovie })(MovieList));
