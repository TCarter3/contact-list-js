import React from 'react';
import './App.css';
import { Header, Container, Table, } from 'semantic-ui-react';
import Cards from "./Cards";
import CardForm from "./CardForm";


class App extends React.Component {
  state = {
    cards: [
      { id: 1, cardFront: "State", cardBack: "Always an 'object'", },
      { id: 2, cardFront: "Prop", cardBack: "An HTML element passed down from a parent", },
      { id: 3, cardFront: "React", cardBack: "Library for Javascript", },
      { id: 4, cardFront: "Javascript", cardBack: "The language you have been writing in, obviously", },
      { id: 5, cardFront: "Rails", cardBack: "You learned this one already, homie!", },
      { id: 6, cardFront: "Ruby", cardBack: "You learned this one already, homie!", },
      ],
    };

    removeCard = (id) => {
      const cards = this.state.cards.filter( card => {
        if (card.id !== id)
          return card
      });
      this.setState({ cards: [...cards], });
    };

    getId = () => {
      return Math.floor((1 + Math.random()) * 10000);
    };

    addCard = (cardData) => {
      let card = { id: this.getId(), ...cardData, };
      this.setState({ cards: [card, ...this.state.cards], });
    };

    render () {
      return (
        <Container style={{ paddingTop: "25px" }}>
        <Header as="h1" textAlign='center'>
          Flash Cards
        </Header>
        <CardForm add={this.addCard} />
        <br/>
        <Container textAlign='center'>
        <Cards cards={this.state.cards} remove={this.removeContact} />
        </Container>
        <br/>
        </Container>
      );
    }
};



export default App;
