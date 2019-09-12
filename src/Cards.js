import React from 'react';
import { Header, Container, Table, Card, Button } from 'semantic-ui-react';

class Cards extends React.Component {
    

    


render() {
    
    return(
    <Container >
    <Card.Group itemsPerRow={3}>
        {
        this.props.cards.map( card => ( 
<Card key={card.id} style={{ border: "solid black 1px", background: "yellow", }}  >
    <br/>
    <br/>
    <br/>
        <div>
            <h2>
            { card.showBack ? card.cardBack : card.cardFront }
            </h2>
        </div>
    <br/>
    <br/>
    <br/>
    <div style={{display: "flex", justifyContent: "space-between"}}>
    <Button 
    onClick={() => this.props.removeCard(card.id)}
    style={{ background: "yellow", color: "red"}}>
        Delete 
    </Button>
    <Button 
    onClick={() => this.props.toggleCard(card.id)}
    style={{ background: "yellow",}}>
        Flip
    </Button>
    </div>
</Card>))}
</Card.Group>
</Container>
    );
}
};

export default Cards;