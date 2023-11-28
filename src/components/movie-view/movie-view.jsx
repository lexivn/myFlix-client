import { useParams } from "react-router";
import { Link, useNavigate } from "react-router-dom";
import { Card, Placeholder, Button, Col, Container, Row } from "react-bootstrap";
import "./movie-view.scss";

export const MovieView = ({ movies }) => {
  const { movieId } = useParams();
  const movie = movies.find((b) => b._id === movieId);
  const navigate = useNavigate();

  // return (
  //   <div>
  //     <div>
  //       <img src={movie.ImagePath} />
  //       {/* <img src={"data:image/jpeg;base64," + movie.ImagePath} /> */}
  //     </div>
  //     <div>
  //       <span>Title: </span>
  //       <span>{movie.Title}</span>
  //     </div>
  //     <div>
  //       <span>Description: </span>
  //       <span>{movie.Description}</span>
  //     </div>
  //     <div>
  //       <span>Genre:</span>
  //       <span>{movie.Genre.Name}</span>
  //     </div>
  //     <div>
  //       <span>{movie.Genre.Description}</span>
  //     </div>
  //     <div>
  //       <span>Director: </span>
  //       <span>{movie.Director.Name}</span>
  //     </div>
  //     <div>
  //       <span>Bio: </span>
  //       <span>{movie.Director.Bio}</span>
  //     </div>
  //     <Link to={navigate(-1)}>
  //       <button className="back-button" style={{ cursor: "pointer" }}>Back</button>
  //     </Link>
  //   </div>
  // );

  return (
    <div className="d-flex justify-content-around">
      <Card style={{ width: '24rem' }}>
        <Card.Img variant="top" src={movie.ImagePath} />
        <Card.Body>
          <Card.Title>{movie.Title}</Card.Title>
          <Card.Text>
            <p> <strong>Description: </strong>{movie.Description}</p>
            <p> <strong>{movie.Genre.Name}: </strong>{movie.Genre.Description}</p>
            <p> <strong>Director: </strong>{movie.Director.Name}</p>
            <p> <strong>Biography: </strong>{movie.Director.Bio}</p>
          </Card.Text>
          <Link to={navigate(-1)}>
            <Button className="back-button" style={{ cursor: "pointer" }} variant="primary">Back</Button>
          </Link>

        </Card.Body>
      </Card>
    </div>
  );
};
