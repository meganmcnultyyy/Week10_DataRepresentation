import './App.css';
import React from 'react';
import { Content } from './components/content'; // Import content component
import { Header } from './components/header'; // Import header component
import { Footer } from './components/footer'; // Import footer component
import 'bootstrap/dist/css/bootstrap.min.css'; // Bootstrap StyleSheet
import Container from 'react-bootstrap/Container'; // Bootstrap Navbar
import Nav from 'react-bootstrap/Nav'; // Bootstrap Navbar
import Navbar from 'react-bootstrap/Navbar'; // Bootstrap Navbar
import {
  BrowserRouter as Router,
  Route,
  Routes,
} from "react-router-dom"; // Importing Routing 
import { Read } from './components/read'; // Read Class from read.js
import { Create } from './components/create'; // Create Class from create.js


class App extends React.Component { // Changing to a function and extneds React Component to make the class a component

  render() { // renders HTML to the web page by using a function

    return ( //  output of the method or function.
      <Router> {/* Routing */}
        <div className="App">
          <Navbar bg="primary" variant="dark"> {/* Bootstrap Navbar */}
            <Container>
              <Nav className="me-auto">
                <Nav.Link href="/">Home</Nav.Link> {/* Navbar Links  */}
                <Nav.Link href="/read">Read</Nav.Link>
                <Nav.Link href="/create">Create</Nav.Link>
              </Nav>
            </Container>
          </Navbar>

          <Routes> {/* Routing the navbar to display the content, read and footer components */}
            <Route path='/' element={<Content></Content>} exact></Route>
            <Route path='/read' element={<Read></Read>} exact></Route>
            <Route path='/create' element={<Create></Create>} exact></Route>
          </Routes>

          {/*<Header></Header> {/* Import header class from header component*/}
          {/*<Content></Content> {/* Import content class from content component*/}
          {/*<Footer></Footer> {/* Import footer class from footer component*/}
        </div>
      </Router>
    );

  }

}

export default App;
