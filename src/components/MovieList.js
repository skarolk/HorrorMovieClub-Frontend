import React, { Component } from 'react';
import { connect } from 'react-redux';
import withAuth from '../hocs/withAuth';
import { fetchMovies } from '../actions';
import { rateMovie } from '../actions';

class MovieList extends Component {
  componentDidMount() {
    this.props.fetchMovies();
  }

  renderMovieList() {
    return this.props.movies.map(movie => {
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
    })
  }

  render() {
    return (
      <div>
        <div className="ratingHeader">
          <h1>Rate these Movies!</h1>
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

const mapStateToProps = (state) => {
  return {
    // ratedMovie: state.ratedMovie,
    movies: state.movies,
  };
}

export default withAuth(connect(mapStateToProps, { fetchMovies, rateMovie })(MovieList));
