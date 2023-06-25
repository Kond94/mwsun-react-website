import BanquetingBookingForm from "./BanquetingBookingForm";
import React from "react";
import { useLayoutEffect } from "react";

const BanquetForm = ({
  formData,
  setFormData,
  setNextForm,
  setPreviousForm,
}) => {
  useLayoutEffect(() => {
    setNextForm("confirm");
    setPreviousForm("bookerDetails");
  }, [formData.form]);

  return (
    <div className='contact__modal'>
      <h3 style={{ margin: 40 }}>Booking Details</h3>

      <BanquetingBookingForm formData={formData} setFormData={setFormData} />
    </div>
  );
};

export default BanquetForm;
