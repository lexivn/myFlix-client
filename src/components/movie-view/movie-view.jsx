import { useParams } from "react-router";
import { Link, useNavigate } from "react-router-dom";
import { Card, Placeholder, Button, Col, Container, Row } from "react-bootstrap";
import { SimilarMovies } from "../similar-movies/similar-movies";
import "./movie-view.scss";

export const MovieView = ({ movies }) => {
  const { movieId } = useParams();
  const movie = movies.find((b) => b._id === movieId);
  const navigate = useNavigate();

  const similarMovies = movies.filter((m) => m.Genre.Name === movie.Genre.Name)


  return (
    <Container className="">
      <Row>
        <Col>
          <Card className=" border-0 moviePoster mx-auto">
            <Card.Img src={movie.ImagePath} width={100}/>
          </Card>
        </Col>
        <Col>
          <Card>
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
        </Col>
      </Row>
      <Row>
        <SimilarMovies />
      </Row>
    </Container >
  );
};
