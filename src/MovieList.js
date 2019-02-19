import React, { Component } from 'react';

class MovieList extends Component {


    render(){
        console.log("I'm here", this.props.movie)
        return(
        <>
            <li key={this.props.movie.id}>{this.props.movie.title}</li>
            <button key={`del-${this.props.movie.id}`} id={this.props.movie.id} onClick={evt => this.props.delete("movies", evt)}>Delete</button>
        </>
        )
    }


}

export default MovieList;