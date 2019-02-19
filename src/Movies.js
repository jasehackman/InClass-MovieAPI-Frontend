import React, { Component } from 'react';
import MovieList from './MovieList.js'

class Movies extends Component {

    componentDidMount(){
        this.props.getAll("movies")
    }

    render(){
        return(
        <div>
        <h1>Movies and Stuff</h1>
            <ul>
                {this.props.movies.map(movie => {
                    return <MovieList movie={movie} delete={this.props.delete} key={movie.id}/>
                })}


            </ul>
        </div>
        )
    }


}

export default Movies;