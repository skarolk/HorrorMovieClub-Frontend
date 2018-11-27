import React, { Component } from 'react';
import { connect } from 'react-redux';
import { rateMovie } from '../actions';

class MovieList extends Component {
  renderMovieList() {
    return this.props.movies.map(movie => {
      return (
        <div key={movie.name} className="ratingCard" >
          <h2>{movie.name}</h2>
          <div>
            <img src={movie.poster} alt="" className="posterImage" />
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
      )
    })
  }

  render() {
    console.log("MovieList props: ")
    console.log(this.props)
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
  console.log("mapStateToProps state:")
  console.log(state)
  return {
    // ratedMovie: state.ratedMovie,
    movies: state.movies,
  };
}

export default connect(mapStateToProps, { rateMovie })(MovieList);
