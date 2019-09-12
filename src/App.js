import React from 'react';
import Home from "./components/Home.js";
import About from "./components/About";
import NoMatch from "./components/NoMatch";
import NavBar from "./components/NavBar";
import { Container, } from "semantic-ui-react";
import { Route, Switch, } from "react-router-dom";
import FlashCards from "./FlashCards.js";

const App = () => (
  <>
    <NavBar />
    <Container>
      <Switch>
        <Route exact path="/" component={Home} />
        <Route exact path="/about" component={About} />
        <Route exact path="/flashcard" component={FlashCards} />
        <Route component={NoMatch} />
      </Switch>
    </Container>
  </>
); 

export default App;