import { useParams } from "react-router";
import { Link } from "react-router-dom";
import "./movie-view.scss";

export const MovieView = ({ movies }) => {
  const { movieId } = useParams(); 
  const movie = movies.find((b) => b._id === movieId);
 
  return (
    <div>
      <div>
        <img src={movie.ImagePath} w-100 />
        {/* <img src={"data:image/jpeg;base64," + movie.ImagePath} /> */}
      </div>
      <div>
        <span>Title: </span>
        <span>{movie.Title}</span>
      </div>
      <div>
        <span>Description: </span>
        <span>{movie.Description}</span>
      </div>
      <div>
        <span>Genre:</span>
        <span>{movie.Genre.Name}</span>
      </div>
      <div>
        <span>{movie.Genre.Description}</span>
      </div>
      <div>
        <span>Director: </span>
        <span>{movie.Director.Name}</span>
      </div>
      <div>
        <span>Bio: </span>
        <span>{movie.Director.Bio}</span>
      </div>
      <Link to={`/`}>
        <button className="back-button" style={{ cursor: "pointer" }}>Back</button>
      </Link>
    </div>
  );
};
