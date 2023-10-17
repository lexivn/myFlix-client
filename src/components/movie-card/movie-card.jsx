// export const MovieCard = (props) => {
//   return <div>{props.movie.title}</div>;
// };

// Destructure of the props
export const MovieCard = ({ movie, onMovieClick }) => {
  return (
    <div
      onClick={() => {
        onMovieClick(movie);
      }}
    >
      {movie.title}
    </div>
  );
};
//  The props object is being destrucured
// export const MovieCard = (props) => {
//   const { movie } = props;
//   return <div>{movie.title}</div>;
// };
