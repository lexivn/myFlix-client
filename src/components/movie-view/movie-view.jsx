import { useParams } from "react-router";
import { Link, useNavigate } from "react-router-dom";
import { Card, Placeholder, Button, Col, Container, Row } from "react-bootstrap";
import "./movie-view.scss";
import { useSelector } from "react-redux";

export const MovieView = () => {
  const { movieId } = useParams();
  const movies = useSelector((state) => state.movies.list);


  const movie = movies.find((b) => b._id === movieId);
  console.log("What am I getting here: ", movie);
  const navigate = useNavigate();

  const similarMovies = movies.filter((m) => m.Genre.Name === movie.Genre.Name)
  console.log("Similar Movies", similarMovies);

  // return (
  //   <Container>
  //     <Row>
  //       <Col>
  //         <Card>
  //           <Card.Img src={movie.ImagePath} width={100} />
  //           <Card.Body>
  //             <Card.Title>{movie.Title}</Card.Title>
  //             <Card.Text>
  //               <p> <strong>Description: </strong>{movie.Description}</p>
  //               <p> <strong>{movie.Genre.Name}: </strong>{movie.Genre.Description}</p>
  //               <p> <strong>Director: </strong>{movie.Director.Name}</p>
  //               <p> <strong>Biography: </strong>{movie.Director.Bio}</p>
  //             </Card.Text>
  //             <Link to={navigate(-1)}>
  //               <Button className="back-button" style={{ cursor: "pointer" }} variant="primary">Back</Button>
  //             </Link>
  //           </Card.Body>
  //         </Card>
  //       </Col>
  //     </Row>
  //     <Row className="mt-3">
  //       <Col>
  //         <p className="lead">Here you have another options!</p>
  //       </Col>
  //     </Row>

  //     <Row className="mt-3 justify-content-md-center align-items-center">
  //       {similarMovies.map((movie) => {
  //         return (
  //           // <Col className="mb-4" key={movie._id} md={3} >
  //             <Card className="mb-4" key={movie._id} md={3}>
  //               <Card.Img src={movie.ImagePath} />
  //               <Card.Body>
  //                 <Card.Title>{movie.Title}</Card.Title>
  //               </Card.Body>
  //             </Card>
  //           // </Col>
  //         );
  //       })
  //       }
  //     </Row>
  //   </Container >
  // );

  return (
    <Container>
      <Row className="d-flex justify-content-around">
        <Card>
          <Card.Img src={movie.ImagePath} width={100} />
          <Card.Body className=" postcard small">
            <Card.Title>{movie.Title}</Card.Title>
            <Card.Text >
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
      </Row>
      <Row>
        <Col className="mt-3">
          <p className="lead">Here you have another options!</p>
        </Col>
      </Row>
      <Row className="mt-3 justify-content-md-center align-items-center">
        {similarMovies.map((movie) => {
          return (            
              <Col style={{ border: "1px solid red" }} className="h-100 mb-4" key={movie._id} xs={6} md={4} lg={3}>
                <Card className="mb-4" key={movie._id}>
                  <Card.Img src={movie.ImagePath} />
                  <Card.Body>
                    <Card.Title>{movie.Title}</Card.Title>
                  </Card.Body>
                </Card>
              </Col>            
          );
        })
        }
      </Row>
    </Container>
  );
};
