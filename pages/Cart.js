import React, { useEffect } from "react";

const Cart = () => {
  const generateSession = async () => {
    await axios.post(
      "https://test-nbm.mtf.gateway.mastercard.com/api/rest/version/75/merchant/MSHTEST01/session",
      {
        apiOperation: "INITIATE_CHECKOUT",
        interaction: {
          operation: "PURCHASE",
          returnUrl: "http://localhost:3000/result",
          merchant: {
            name: "Malawi Sun Hotel",
            url: "https://developer.mastercard.com",
          },
          displayControl: {
            billingAddress: "HIDE",
            customerEmail: "HIDE",
          },
        },
        order: {
          amount: 12.0,
          currency: "USD",
          id: "{{$guid}}",
          description: "Accommodation",
        },
      },
      {
        headers: {
          "Content-Type": "application/json",
          Authorization:
            "Basic bWVyY2hhbnQuTVNIVEVTVDAxOmFjMDg0MDliMTA3MDUxMzhhYjQ2NmRiYmE3ZjgwYzM2",
        },
      }
    );
  };

  return (
    <>
      <div id='embed-target'></div>
    </>
  );
};

export default Cart;
