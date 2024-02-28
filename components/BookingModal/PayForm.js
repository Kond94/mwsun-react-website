import axios from "axios";
import React from "react";
import { useLayoutEffect } from "react";

const PayForm = ({ formData, setFormData, setNextForm, setPreviousForm }) => {
  useLayoutEffect(() => {
    if (formData.bookingType === "Accommodation") {
      console.log("here", formData);
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
        })
        .catch((error) => console.log(error));
    }

    setPreviousForm("confirm");
  }, [formData.form]);

  return (
    <div className='contact__modal'>
      <h3 style={{ margin: 40 }}>Payment</h3>
      <div id='embed-target'></div>
    </div>
  );
};

export default PayForm;
