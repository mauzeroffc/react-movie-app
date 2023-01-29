import React from "react";
import PropTypes from "prop-types";
import "../styles/index.css";

function Movie({id, year, title, poster, language, rating, crew}) {
    return <div className="movie grid py-5 px-7">
            <img src={poster} alt={title} title={title} className="poster" width="130px" height="130px"/>
            <div className="movie_column text-left">
                <h1 className="movie_title"><b>{title}</b></h1>
                <h5 className="description">{year} | {language} | {crew}</h5>
                <h5 className="raiting">{rating} out of 10</h5>
            </div>
           </div>
}

Movie.propTypes = {
    id: PropTypes.string.isRequired,
    year: PropTypes.string.isRequired,
    title: PropTypes.string.isRequired,
    poster: PropTypes.string.isRequired,
    language: PropTypes.string.isRequired,
    rating: PropTypes.string.isRequired,
    crew: PropTypes.string.isRequired,
}

export default Movie