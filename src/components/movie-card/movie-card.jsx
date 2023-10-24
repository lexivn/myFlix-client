// There two props in this code: One object(book) and one function(onBookClick)

// Here We import the PropType library
import PropType from "prop-types";

// Destructure of the props
export const MovieCard = ({ movie, onMovieClick }) => {
  return (
    <div
      onClick={() => {
        onMovieClick(movie);
      }}
    >
      {movie.Title}
    </div>
  );
};
//  The props object is being destrucured
// export const MovieCard = (props) => {
//   const { movie } = props;
//   return <div>{movie.title}</div>;
// };

MovieCard.propTypes = {
  movie: PropType.shape({
    Title: PropType.string.isRequired, // propType is working
    ImagePath: PropType.string.isRequired, // propType is working
    author: PropType.string // Why this propType is not working?
  }).isRequired,
  onMovieClick: PropType.func.isRequired
};
