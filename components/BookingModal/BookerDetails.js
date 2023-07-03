import BookerDetailsForm from "./BookerDetailsForm";
import { useLayoutEffect } from "react";

function BookerDetails({
  formData,
  setFormData,
  setNextForm,
  setPreviousForm,
  bookerDetailsSchema,
}) {
  useLayoutEffect(() => {
    switch (formData.bookingType) {
      case "Accommodation":
        setNextForm("Accommodation");
        setPreviousForm("bookingType");

        break;
      case "Conferencing":
        setNextForm("Conferencing");
        setPreviousForm("bookingType");

        break;
      case "Banqueting":
        setNextForm("Banqueting");
        setPreviousForm("bookingType");

        break;

      case "Package":
        setNextForm("Package");
        setPreviousForm("bookingType");

        break;

      default:
        break;
    }
  }, [formData.form]);

  return (
    <div className='contact__modal'>
      <h3 style={{ margin: 40 }}>Your Details</h3>
      <BookerDetailsForm
        schema={bookerDetailsSchema}
        formData={formData}
        setFormData={setFormData}
      />
    </div>
  );
}
export default BookerDetails;
