import React from 'react';
import { Header, Container, Table, Card, Button } from 'semantic-ui-react';

const Cards = ( {cards} ) => (
    <div >
    <Card.Group itemsPerRow={3}>
        {
        cards.map( card => ( 
<Card key={card.id} style={{ border: "solid black 1px", background: "yellow", }}  >
    {/* <div>
        {card.id}
    </div> */}
    <br/>
    <br/>
    <br/>
        <div>
        <h2>{card.cardFront}</h2>
    </div>
    <br/>
    <br/>
    <br/>
    <div style={{display: "flex", justifyContent: "space-between"}}>
    <Button 
    style={{ background: "yellow", color: "red"}}>
        Delete 
    </Button>
    <Button style={{ background: "yellow",}}>
        Flip
    </Button>
    </div>
</Card>))}
</Card.Group>
</div>
);

export default Cards;