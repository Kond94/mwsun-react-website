import AccommodationBookingForm from "./AccommodationBookingForm";
import React from "react";
import { useLayoutEffect } from "react";

const AccommodationForm = ({
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
      <h4>Details</h4>

      <AccommodationBookingForm formData={formData} setFormData={setFormData} />
    </div>
  );
};

export default AccommodationForm;
