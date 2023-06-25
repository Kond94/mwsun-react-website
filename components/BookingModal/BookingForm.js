import { Box, Button, Title } from "@mantine/core";

import AccommodationForm from "./AccommodationForm";
import BanquetForm from "./BanquetForm";
import BookerDetails from "./BookerDetails";
import BookingType from "./BookingType";
import ConferenceForm from "./ConferenceForm";
import Confirm from "./Confirm";
import PackageForm from "./PackageForm";
import useGlobalContext from "../../hooks/useGlobalContext";
import { useState } from "react";

function Form() {
  const [nextForm, setNextForm] = useState("bookerDetails");
  const { form, rooms } = useGlobalContext();
  const [previousForm, setPreviousForm] = useState("bookingType");
  const today = new Date();
  const tomorrow = new Date(+today + 86400000);

  tomorrow.setDate(tomorrow.getDate() + 1);
  const [formData, setFormData] = useState({
    form: form === null ? "bookingType" : "bookerDetails",
    bookingType: form !== null ? form : "Accommodation",
    name: "",
    email: "",
    phone: "",
    room: rooms.length > 0 ? rooms[rooms.length - 1].id : 1,
    arrivalDate: today,
    departureDate: tomorrow,
    children: 0,
    adults: 1,

    commencementDate: today,
    commencementTime: 1,
    participants: 1,
    numberOfDays: 1,

    specialRequest: "None",
  });

  const conditionalComponent = () => {
    switch (formData.form) {
      case "bookingType":
        return (
          <BookingType
            setNextForm={setNextForm}
            formData={formData}
            setFormData={setFormData}
            setPreviousForm={setPreviousForm}
          />
        );
      case "bookerDetails":
        return (
          <BookerDetails
            setNextForm={setNextForm}
            formData={formData}
            setFormData={setFormData}
            setPreviousForm={setPreviousForm}
          />
        );
      case "Accommodation":
        return (
          <AccommodationForm
            setNextForm={setNextForm}
            formData={formData}
            setFormData={setFormData}
            setPreviousForm={setPreviousForm}
          />
        );
      case "Conferencing":
        return (
          <ConferenceForm
            setNextForm={setNextForm}
            formData={formData}
            setFormData={setFormData}
            setPreviousForm={setPreviousForm}
          />
        );
      case "Banqueting":
        return (
          <BanquetForm
            setNextForm={setNextForm}
            formData={formData}
            setFormData={setFormData}
            setPreviousForm={setPreviousForm}
          />
        );
      case "Package":
        return (
          <PackageForm
            setNextForm={setNextForm}
            formData={formData}
            setFormData={setFormData}
            setPreviousForm={setPreviousForm}
          />
        );
      case "confirm":
        return (
          <Confirm
            setNextForm={setNextForm}
            formData={formData}
            setFormData={setFormData}
            setPreviousForm={setPreviousForm}
          />
        );
      default:
        return <p>default</p>;
    }
  };
  function handleSubmit() {
    console.log(nextForm, previousForm);
    setFormData({ ...formData, form: nextForm });
  }
  return (
    <div style={{ textAlign: "center", margin: 20 }}>
      {conditionalComponent()}
      {formData.form !== "bookingType" && (
        <Button
          onClick={() => setFormData({ ...formData, form: previousForm })}
          style={{ margin: 10 }}
        >
          Back
        </Button>
      )}
      <Button onClick={handleSubmit} style={{ margin: 10 }}>
        {formData.form !== "confirm" ? "Next" : "Submit"}
      </Button>
    </div>
  );
}
export default Form;
