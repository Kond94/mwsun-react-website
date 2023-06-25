import PackageBookingForm from "./PackageBookingForm";
import React from "react";
import { useLayoutEffect } from "react";

const PackageForm = ({
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

      <PackageBookingForm formData={formData} setFormData={setFormData} />
    </div>
  );
};

export default PackageForm;
