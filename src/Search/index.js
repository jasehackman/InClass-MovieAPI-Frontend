import React, { Component } from 'react'

class SearchComponent extends Component{
    state = {
        keyword: null
    }

    searchMovies = () => {
        this.props.search("movies", this.state.keyword)
    }

    setKeyword = (event) => {
        this.setState({keyword: event.target.value})
    }

    render() {
        return (
            <>
                <input type='text' onChange={this.setKeyword} placeholder="search for movies"/>
                <button onClick={this.searchMovies}>search</button>
            </>
        )
    }
}

export default SearchComponent