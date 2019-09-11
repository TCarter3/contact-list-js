import React from 'react';
import { Form, } from "semantic-ui-react";

class CardForm extends React.Component {
    state = { id: "", cardFront: "", cardBack: "",} 

handleSubmit = (e) => {
    e.preventDefault();
    this.props.add(this.state);
  this.setState({ cardFron: "", cardBack: "", });
  }

  handleChange = (e) => {
    this.setState({ [e.target.name]: e.target.value, });
  };


    
    render () {
    return (
        <div>
        <Form onSubmit={this.handleSubmit}>
        <Form.Group widths="equal">
          <Form.Input 
            fluid 
            label="Front of Card" 
            placeholder="Front" 
            name="cardFront" 
            value={this.state.cardFront} 
            onChange={this.handleChange}
          />
          <br/>
          <Form.Input 
            fluid 
            label="Back of Card" 
            placeholder="Back" 
            name="cardBack" 
            value={this.state.cardBack} 
            onChange={this.handleChange}
          />
          <Form.Button>Submit</Form.Button>
        </Form.Group>
      </Form>
      </div>

    )}
};









export default CardForm;