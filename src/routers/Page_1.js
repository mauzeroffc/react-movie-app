import React from "react";
import axios from "axios";

import Movie from "../components/Movie.js";
import Pages from "../components/Pages.js";

import "../styles/index.css";

class Page1 extends React.Component {
  pages = [1, 2, 3, 4, 5]
  state = {
    is_loading: true,
    movies: [],
  };

  getMovies = async () => {
    const {data: {items}} = await axios.get("https://imdb-api.com/en/API/Top250Movies/k_ksv1rtrx")

    this.setState({movies: items.slice(0, 100), is_loading: false})
  }

  componentDidMount() {
    this.getMovies()
  }

  render() {
    const {is_loading, movies} = this.state

    return (
      <div id="page">
        <section className="container grid grid-cols-4 space-x-10">
        {
          is_loading
          ? <div className="loader">
              <span className="loader_text">Loading...</span>
            </div> 
          : movies.map((movie, id) => {
                return (<div key={id}>
                          <Movie
                            key={movie.id}
                            id={movie.id} 
                            year={movie.year} 
                            title={movie.title} 
                            poster={movie.image}
                            language="EN"
                            rating={movie.imDbRating}
                            crew={movie.crew}/>
                        </div>
                       )
             
     })}</section>
        <Pages pages_numbers={[1, 2, 3]} id="123"/>
      </div>    
  )}
}

export default Page1;