import { useState } from "react";
import moviesDataJSON from "../movies-data.json";
import AddMovie from "./AddMovie";
import FilterMovies from "./FilterMovies";
import MovieCard from "./MovieCard";
import SearchMovies from "./SearchMovies";


function MovieList() {
  const [movies, setMovies] = useState(moviesDataJSON)
  const [moviesData, setMoviesData] = useState(moviesDataJSON)

  const addNewMovie = movie => {
    //faz uma cópia do estado movies e adiciona um novo objeto movie
    let moviesCopy = [...movies, movie]
    //atualiza o estado movies 
    setMovies(moviesCopy)
    setMoviesData(moviesCopy)
  }

  const filterMovies = str => {
    let filteredMovies

    if(str === 'All') {
      filteredMovies = moviesData
    } else {
      filteredMovies = moviesData.filter(movie => {
        return movie.title[0].toLowerCase() === str.toLowerCase()
      })
    }

    setMovies(filteredMovies)
  }

  const searchMovies = str => {
    let searchResult

    searchResult = moviesData.filter(movie => {
      return movie.title.toLowerCase().startsWith(str.toLowerCase())
    })

    setMovies(searchResult)
  }

  return (
    <div>
      <h2>Movie List</h2>
      <SearchMovies searchMovies={searchMovies} />
      <FilterMovies filterMovies={filterMovies} />
      <AddMovie addNewMovie={addNewMovie} />
      
      {movies.map(movie => {
        return <MovieCard key={movie._id} movie={movie} />;
      })}
    </div>
  );
}

export default MovieList;