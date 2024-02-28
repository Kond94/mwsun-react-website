import axios from "axios";
import React from "react";
import { useState } from "react";
import { useLayoutEffect } from "react";

const PayForm = ({ formData, setFormData, setNextForm, setPreviousForm }) => {
  const [loading, setLoading] = useState(false);
  useLayoutEffect(() => {
    setLoading(true);
    if (formData.bookingType === "Accommodation") {
      axios
        .post("https://itec-mw-api.onrender.com/make-payment", {
          amount: formData.amount,
          currency: "MWK",
          description: formData.name + " Accommodation Booking",
        })
        .then((response) => {
          console.log(response.data.session.id);
          window.Checkout.configure({
            session: {
              id: response.data.session.id,
            },
          });
          window.Checkout.showEmbeddedPage("#embed-target");
          setLoading(false);
        })
        .catch((error) => {
          console.log(error);
          setLoading(false);
        });
    }

    setPreviousForm("confirm");
  }, [formData.form]);

  return (
    <div className='contact__modal'>
      <h3 style={{ margin: 40 }}>Payment</h3>
      <p>
        Your booking has been made. If you would like to pay using your Debit or
        Credit Card use the form below, if you would like to pay when checking
        in you can go ahead and close this form
      </p>
      {loading ? (
        <>
          <span className='spinner-border spinner-border-sm mr-1'></span>
          <p>Loading Payment Form</p>
        </>
      ) : (
        <></>
      )}
      <div id='embed-target'></div>
    </div>
  );
};

export default PayForm;
