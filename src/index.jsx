// ------------------------------------------------------------------------
// This file contains the code needed to create a small, working React app
// ------------------------------------------------------------------------
import { createRoot } from "react-dom/client";
// Importing the MainView component from the components folder
import { MainView } from "./components/main-view/main-view";
// Integreting Ract-Bootstrap
// import "bootstrap/dist/css/bootstrap.min.css";

// Import statement to indicate that you need to bundle `./index.scss`
import "./index.scss";
import Container from 'react-bootstrap/Container';

// Main component (will eventually use all the others)
const MyFlixApplication = () => {
  return (  
    <Container /*style={{border: "1px solid red"}}*/>
       <MainView /> {/* Returning the MainView component using the short way. */}
    </Container>    
  );  
};

// Finds the root of your app
const container = document.querySelector("#root");
const root = createRoot(container);

// Tells React to render your app in the root DOM element
root.render(<MyFlixApplication />);