import Card from "react-credit-cards";
import React from "react";

export default class SupportedCards extends React.Component {
  render() {
    return (
      <div className='App-cards'>
        <h3>Supported Cards</h3>
        <div className='App-cards-list'>
          <Card
            name='John Smith'
            number='5555 4444 3333 1111'
            expiry='10/20'
            cvc='737'
          />

          <Card
            name='John Smith'
            number='4111 1111 1111 1111'
            expiry='10/20'
            cvc='737'
          />
        </div>
      </div>
    );
  }
}
