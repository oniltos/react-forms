function MovieCard(props) {
  const { movie } = props;

  return (
    <div className="MovieCard">
      <h3>{movie.title}</h3>
      <p>Director: {movie.director}</p>
      <p>Rating: {movie.IMDBRating}</p>
      <p>Has oscar: {movie.hasOscars ? <span>🏆</span> : <span>no</span>}</p>

    </div>
  );
}

export default MovieCard;