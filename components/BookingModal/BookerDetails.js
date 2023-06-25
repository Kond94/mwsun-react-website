import { Box, Text, TextInput } from "@mantine/core";

import ArrowDropDownIcon from "@material-ui/icons/ArrowDropDown";
import BookerDetailsForm from "./BookerDetailsForm";
import Button from "@material-ui/core/Button";
import ButtonGroup from "@material-ui/core/ButtonGroup";
import ClickAwayListener from "@material-ui/core/ClickAwayListener";
import ContactForm from "../ContactCard/ContactForm";
import Grid from "@material-ui/core/Grid";
import Grow from "@material-ui/core/Grow";
import MenuItem from "@material-ui/core/MenuItem";
import MenuList from "@material-ui/core/MenuList";
import Paper from "@material-ui/core/Paper";
import Popper from "@material-ui/core/Popper";
import React from "react";
import { useLayoutEffect } from "react";

const options = [
  "Accommodation",
  "Conferencing",
  "Banqueting",
  "Board Meeting",
];
function BookerDetails({
  formData,
  setFormData,
  setNextForm,
  setPreviousForm,
}) {
  const boxStyle = {
    width: "100vh",
    margin: "1rem auto",
    textAlign: "center",
    padding: "1rem 0",
  };

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
      <BookerDetailsForm formData={formData} setFormData={setFormData} />
    </div>
  );
}
export default BookerDetails;
