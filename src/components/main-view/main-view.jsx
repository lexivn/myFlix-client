import { useState } from "react";

// Importing a component into another (BookCard -> MainView)
import { MovieCard } from "../movie-card/movie-card";

// Importain BookView component into the MainView
import { MovieView } from "../movie-view/movie-view";

export const MainView = () => {
  const [movies, setMovies] = useState([
    {
      id: 1,
      title: "The Trench",
      Description:
        "A research team encounters multiple threats while exploring the depths of the ocean, including a malevolent mining operation.",
      Genre: {
        Name: "Action",
        Description:
          "Action films are a film genre where action sequences, such as fighting, stunts, car chases or explosions, take precedence over elements like characterization or complex plotting. The action typically involves individual efforts on the part of the hero, in contrast with most war films. The genre is closely linked with the thriller and adventure film genres."
      },
      Director: {
        Name: "Ben Wheatley",
        Bio:
          "Ben Wheatley was born in May 1972 in Billericay, Essex, England, UK. He is a director and writer, known for Free Fire (2016), Kill List (2011) and Sightseers (2012).",
        Birth: "1972",
        Death: ""
      },
      image:
        "https://www.themoviedb.org/t/p/w600_and_h900_bestv2/4m1Au3YkjqsxF8iwQy0fPYSxE0h.jpg",
      Featured: true
    },
    {
      id: 2,
      title: "The Flash",
      Description:
        "Barry Allen uses his super speed to change the past, but his attempt to save his family creates a world without super heroes, forcing him to race for his life in order to save the future.",
      Genre: {
        Name: "Action",
        Description:
          "Action films are a film genre where action sequences, such as fighting, stunts, car chases or explosions, take precedence over elements like characterization or complex plotting. The action typically involves individual efforts on the part of the hero, in contrast with most war films. The genre is closely linked with the thriller and adventure film genres."
      },
      Director: {
        Name: "Andy Muschietti",
        Bio:
          "Andy Muschietti was born on August 26, 1973 in Buenos Aires, Federal District, Argentina. He is a producer and director, known for Mama (2013), It (2017) and It Chapter Two (2019).",
        Birth: "1973",
        Death: ""
      },
      image:
        "https://www.themoviedb.org/t/p/w600_and_h900_bestv2/rktDFPbfHfUbArZ6OOOKsXcv0Bm.jpg",
      Featured: true
    },
    {
      id: 3,
      title: "Rebel Moon",
      Description: "",
      Genre: {
        Name: "Action",
        Description:
          "Action films are a film genre where action sequences, such as fighting, stunts, car chases or explosions, take precedence over elements like characterization or complex plotting. The action typically involves individual efforts on the part of the hero, in contrast with most war films. The genre is closely linked with the thriller and adventure film genres."
      },
      Director: {
        Name: "Zack Snyder",
        Bio:
          'Zachary Edward "Zack" Snyder (born March 1, 1966) is an American film director, film producer, and screenwriter, best known for action and science fiction films. Snyder made his feature film debut with the 2004 remake Dawn of the Dead and has gone on to be known for his comic book movies and superhero films, including 300 (2007), Watchmen (2009), Man of Steel (2013) and its upcoming sequel, Batman v Superman: Dawn of Justice (2016). Snyder is the co-founder of Cruel and Unusual Films, a production company he established in 2004, alongside his wife Deborah Snyder and producing partner Wesley Coller',
        Birth: "1966",
        Death: ""
      },
      image:
        "https://www.themoviedb.org/t/p/w600_and_h900_bestv2/9VVngWFiQJbcYm1DSrFg71ASuex.jpg",
      Featured: true
    }
  ]);

  // To determine whether to render a specific part of the UI (BookView) in the MainView component, you’ll add a new state
  // "selectedBook" as a flag.

  const [selectedMovie, setSelectedMovie] = useState(null);

  if (selectedMovie) {
    return (
      <MovieView
        movie={selectedMovie}
        onBackClick={() => setSelectedMovie(null)}
      />
    );
  }

  if (movies.length === 0) {
    return <div>The movie list is empty</div>;
  }

  return (
    <div>
      {movies.map((movie) => (
        <MovieCard
          key={movie.id}
          movie={movie}
          // This event handling is added to the BookCard component
          onMovieClick={(newSelectedMovie) => {
            setSelectedMovie(newSelectedMovie);
          }}
        />
      ))}
    </div>
  );
};

// REMEMBER:
// To create and initialized a component use useState function
// const {} = useState([]);    // This is equivalent to:

// Example:
// const [movies, setMovies] = useState([]);

// let movies= [];
// const setMovies = function(newMovieList){
//   movies = newMoviesList;
// };
