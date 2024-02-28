import "react-credit-cards/es/styles-compiled.css";

import {
  formatCVC,
  formatCreditCardNumber,
  formatExpirationDate,
  formatFormData,
} from "./utils";

import Card from "react-credit-cards";
import Form from "react-bootstrap/Form";
import React from "react";
import Script from "next/script";
import SupportedCards from "./Cards";

export default class CardInfo extends React.Component {
  state = {
    number: "",
    name: "",
    expiry: "",
    cvc: "",
    issuer: "",
    focused: "",
    formData: null,
  };

  handleInputFocus = ({ target }) => {
    this.setState({
      focused: target.name,
    });
  };

  handleInputChange = ({ target }) => {
    if (target.name === "number") {
      target.value = formatCreditCardNumber(target.value);
    } else if (target.name === "expiry") {
      target.value = formatExpirationDate(target.value);
    } else if (target.name === "cvc") {
      target.value = formatCVC(target.value);
    }

    this.setState({ [target.name]: target.value });
  };

  handleSubmit = (e) => {
    e.preventDefault();
    const { issuer } = this.state;
    const formData = [...e.target.elements]
      .filter((d) => d.name)
      .reduce((acc, d) => {
        acc[d.name] = d.value;
        return acc;
      }, {});

    this.setState({ formData });
    this.form.reset();
  };

  render() {
    const { name, number, expiry, cvc, focused, issuer, formData } = this.state;

    return (
      <div key='Payment'>
        <div className='App-payment'>
          <h1>Card Details</h1>
          <div className='row'>
            <div style={{ width: "50%" }}>
              <form ref={(c) => (this.form = c)} onSubmit={this.handleSubmit}>
                <div className='form-group' style={{ margin: 20 }}>
                  <input
                    type='tel'
                    id='number'
                    className='form-control'
                    placeholder='Card Number'
                    pattern='[\d| ]{16,22}'
                    required
                    onChange={this.handleInputChange}
                    onFocus={this.handleInputFocus}
                    readOnly
                  />
                  <small>E.g.: 49..., 51..., 36..., 37...</small>
                </div>
                <div
                  className='form-group'
                  style={{
                    margin: 20,
                  }}
                >
                  <input
                    type='text'
                    id='name'
                    className='form-control'
                    placeholder='Name'
                    required
                    onChange={this.handleInputChange}
                    onFocus={this.handleInputFocus}
                    readOnly
                  />
                </div>
                <div className='row'>
                  <div
                    className='col-5'
                    style={{ marginVertical: 10, marginLeft: 20 }}
                  >
                    <input
                      type='tel'
                      id='expiry'
                      className='form-control'
                      placeholder='Valid Thru'
                      pattern='\d\d/\d\d'
                      required
                      onChange={this.handleInputChange}
                      onFocus={this.handleInputFocus}
                      readOnly
                    />
                  </div>
                  <div
                    className='col-5'
                    style={{ marginVertical: 10, marginLeft: 40 }}
                  >
                    <input
                      type='tel'
                      id='cvc'
                      className='form-control'
                      placeholder='CVC'
                      pattern='\d{3,4}'
                      required
                      onChange={this.handleInputChange}
                      onFocus={this.handleInputFocus}
                      readOnly
                    />
                  </div>
                </div>
                <input type='hidden' name='issuer' value={issuer} />
                <div className='form-actions' style={{ margin: 20 }}></div>
              </form>
            </div>
            <div style={{ width: "50%" }}>
              <Card
                number={number}
                name={name}
                expiry={expiry}
                cvc={cvc}
                focused={focused}
                callback={this.handleCallback}
              />
            </div>
          </div>

          <hr style={{ margin: "60px 0 30px" }} />

          <SupportedCards />
        </div>
      </div>
    );
  }
}
