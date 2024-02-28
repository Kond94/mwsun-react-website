import ConferencingBookingForm from "./ConferencingBookingForm";
import React from "react";
import { useLayoutEffect } from "react";

const ConferenceForm = ({
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

      <ConferencingBookingForm formData={formData} setFormData={setFormData} />
    </div>
  );
};

export default ConferenceForm;
