import * as yup from "yup";

import { Box, Button, Dialog, Paper, Zoom } from "@material-ui/core";

import AccommodationForm from "./AccommodationForm";
import BanquetForm from "./BanquetForm";
import BookerDetails from "./BookerDetails";
import BookingType from "./BookingType";
import ConferenceForm from "./ConferenceForm";
import Confirm from "./Confirm";
import PackageForm from "./PackageForm";
import { fetchAPI } from "../../lib/api";
import { toast } from "react-toastify";
import useGlobalContext from "../../hooks/useGlobalContext";
import { useState } from "react";

function Form() {
  const [nextForm, setNextForm] = useState("bookerDetails");
  const { form, rooms, setShowBookingModal } = useGlobalContext();
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [previousForm, setPreviousForm] = useState("bookingType");
  const [errors, setErrors] = useState(false);
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
          <Box sx={{ m: 1 }}>
            <BookingType
              setNextForm={setNextForm}
              formData={formData}
              setFormData={setFormData}
              setPreviousForm={setPreviousForm}
            />
          </Box>
        );
      case "bookerDetails":
        return (
          <Box sx={{ m: 1 }}>
            <BookerDetails
              setNextForm={setNextForm}
              formData={formData}
              setFormData={setFormData}
              setPreviousForm={setPreviousForm}
            />
          </Box>
        );
      case "Accommodation":
        return (
          <Box sx={{ m: 1 }}>
            <AccommodationForm
              setNextForm={setNextForm}
              formData={formData}
              setFormData={setFormData}
              setPreviousForm={setPreviousForm}
            />
          </Box>
        );
      case "Conferencing":
        return (
          <Box sx={{ m: 1 }}>
            <ConferenceForm
              setNextForm={setNextForm}
              formData={formData}
              setFormData={setFormData}
              setPreviousForm={setPreviousForm}
            />
          </Box>
        );
      case "Banqueting":
        return (
          <Box sx={{ m: 1 }}>
            <BanquetForm
              setNextForm={setNextForm}
              formData={formData}
              setFormData={setFormData}
              setPreviousForm={setPreviousForm}
            />
          </Box>
        );
      case "Package":
        return (
          <Box sx={{ m: 1 }}>
            <PackageForm
              setNextForm={setNextForm}
              formData={formData}
              setFormData={setFormData}
              setPreviousForm={setPreviousForm}
            />
          </Box>
        );
      case "confirm":
        return (
          <Box sx={{ m: 1 }}>
            <Confirm
              setNextForm={setNextForm}
              formData={formData}
              setFormData={setFormData}
              setPreviousForm={setPreviousForm}
            />
          </Box>
        );
      default:
        return <p>default</p>;
    }
  };

  const handleSubmit = async () => {
    setErrors(false);
    switch (formData.form) {
      case "bookerDetails":
        if (
          formData.name === "" ||
          formData.email === "" ||
          formData.phone === ""
        ) {
          setErrors(
            "Please fill out all the details correctly before proceeding"
          );

          return;
        }
        break;

      default:
        break;
    }
    setFormData({ ...formData, form: nextForm });

    if (formData.form === "confirm") {
      setIsSubmitting(true);

      const notify = () =>
        toast.success(
          "You have successfully made your booking. Please wait for a response from our team.",
          { autoClose: 6000 }
        );

      let data = {
        name: formData.name,
        email: formData.email,
        phone: formData.phone,
        specialRequest: formData.specialRequest,
      };

      let bookingEndpoint = "";
      const times = [
        { id: 1, name: "Morning" },
        { id: 2, name: "Afternoon" },
        { id: 3, name: "All Day" },
      ];
      switch (formData.bookingType) {
        case "Accommodation":
          data = {
            ...data,
            room: formData.room,
            arrivalDate: formData.arrivalDate,
            departureDate: formData.departureDate,
            children: formData.children,
            adults: formData.adults,
            specialRequest: formData.specialRequest,
          };
          bookingEndpoint = "accommodation-bookings";
          break;
        case "Conferencing":
          data = {
            ...data,
            conference_room: formData.room,
            commencementDate: formData.commencementDate,
            time: times.find(
              (time) =>
                time.id.toString() === formData.commencementTime.toString()
            ).name,
            participants: formData.participants,
            numberOfDays: formData.numberOfDays,
            conference_addons: [],
          };
          bookingEndpoint = "conference-bookings";

          break;
        case "Banqueting":
          data = {
            ...data,
            banquet_room: formData.room,
            date: formData.commencementDate,
            time: times.find(
              (time) =>
                time.id.toString() === formData.commencementTime.toString()
            ).name,
            participants: formData.participants,
            banquet_addons: [],
          };
          bookingEndpoint = "banquet-bookings";

          break;
        case "Package":
          data = {
            ...data,
            package: formData.room,
            date: formData.commencementDate,
            participants: formData.participants,
          };
          bookingEndpoint = "package-bookings";

          break;
        default:
          break;
      }

      // Send the data to the server in JSON format.
      const JSONdata = JSON.stringify({ data: data });
      // Form the request for sending data to the server.
      const options = {
        // The method is POST because we are sending data.
        method: "POST",
        // Tell the server we're sending JSON.
        headers: {
          "Content-Type": "application/json",
        },
        // Body of the request is the JSON data we created above.
        body: JSONdata,
      };

      try {
        const [bookingRes] = await Promise.all([
          fetchAPI("/" + bookingEndpoint, {}, options),
        ]).then((response) => {
          setIsSubmitting(false);
          setShowBookingModal(false);
          notify();
        });
      } catch (error) {
        setIsSubmitting(false);
        console.log(error);
      }

      setIsSubmitting(false);
    }
    setIsSubmitting(false);
  };
  return (
    <div style={{ textAlign: "center", margin: 20 }}>
      {conditionalComponent()}
      {errors && <p style={{ color: "red" }}>{errors}</p>}
      {formData.form !== "bookingType" && (
        <Button
          variant='contained'
          onClick={() => setFormData({ ...formData, form: previousForm })}
          style={{ margin: 10 }}
        >
          Back
        </Button>
      )}
      <Button
        disabled={isSubmitting}
        color='primary'
        variant='contained'
        type='submit'
        onClick={handleSubmit}
        style={{ margin: 10 }}
      >
        {isSubmitting && (
          <span className='spinner-border spinner-border-sm mr-1'></span>
        )}
        {formData.form !== "confirm" ? "Next" : "Submit"}
      </Button>
    </div>
  );
}
export default Form;
