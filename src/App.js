import React, { Component } from 'react';
import './App.css';
import Movies from './Movies.js'
import SearchComponent from './Search';
import MovieFormComponent from './movie-form-component';


class App extends Component {

    state = {
        movies: [],
        apiUrl: "http://127.0.0.1:8000/api/v1/"
    }

    // componentDidMount() {
    //     fetch('http://127.0.0.1:8000/movies')
    //     .then( stuff => stuff.json())
    //     .then(movies => {
    //         console.log(movies)
    //         this.setState({movies})
    //     }).catch(err => {
    //         console.log("error", err)
    //     })
    // }

    // TODO: this API manager should end up in a manager of some sort

    getAll = (resource, keyword=null) => {
        let url = `${this.state.apiUrl}${resource}`
        if (keyword)
            url += keyword

        fetch(url)
        .then( response => response.json())
        .then( data => {
            console.log("movies list", data)
            this.setState({[resource]: data})
        })
        .catch(err => console.log("oops", err))
    }

    search = (resource, keyword) => {
        let query = `/?search=${keyword}`
        this.getAll(resource, query)
    }

    create = (resource, newObj) => {
        let formData = new FormData()
        for (let key in newObj) {
            formData.append(key, newObj[key])
        }
        fetch(`${this.state.apiUrl}${resource}/`, {
            method: `Post`,
            body: formData
        })
        .then( newData => newData.json())
        .then( newData => {
            console.log("added", newData)
            this.getAll(resource)
        })
    }

    delete = (resource, evt) => {
        fetch(`${this.state.apiUrl}${resource}/${evt.target.id}`,{
            method: `Delete`
        }).then(() => this.getAll(resource))
    }

  render() {


    return (
      <div className="App">
        <SearchComponent search={this.search}/>
        <Movies movies={this.state.movies} getAll={this.getAll} delete={this.delete}/>
        <MovieFormComponent create={this.create}/>
      </div>
    );
  }
}

export default App;
