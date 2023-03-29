import React, { useState } from "react";

import AccommodationBookingForm from "./AccommodationBookingForm";
import ButtonGroup from "react-bootstrap/ButtonGroup";
import Container from "react-bootstrap/Container";
import Modal from "react-bootstrap/Modal";
import ToggleButton from "react-bootstrap/ToggleButton";
import useGlobalContext from "../hooks/useGlobalContext";

const BookingModal = ({ showBookingModal, onHideBookingModal }) => {
  const { form } = useGlobalContext();
  const { setForm } = useGlobalContext();
  const { formState } = useGlobalContext();
  const [radioValue, setRadioValue] = useState(form.toString());

  const bookingForms = [{ name: "Accommodation", value: "1" }];

  return (
    <Modal show={showBookingModal} onHide={() => onHideBookingModal()}>
      <Modal.Header closeButton>
        <Modal.Title>Online Booking</Modal.Title>
      </Modal.Header>

      <Modal.Body>
        <Container fluid>
          <p
            style={{
              display: "flex",
              alignItems: "center",
              justifyContent: "center",
            }}
          >
            What are you reserving?
          </p>

          <ButtonGroup
            style={{
              display: "flex",
              alignItems: "center",
              justifyContent: "center",
            }}
          >
            {bookingForms.map((radio, idx) => (
              <ToggleButton
                key={idx}
                id={`radio-${idx}`}
                type='radio'
                variant={"outline-primary"}
                name='radio'
                value={form}
                checked={form === radio.value}
                onChange={(e) => {
                  setForm(radio.value);
                }}
              >
                {radio.name}
              </ToggleButton>
            ))}
          </ButtonGroup>
        </Container>
        <br />

        {form === "1" ? (
          <AccommodationBookingForm
            onHide={onHideBookingModal}
            formState={formState}
          />
        ) : form === "2" ? (
          <AccommodationBookingForm />
        ) : form === "3" ? (
          <AccommodationBookingForm />
        ) : (
          <></>
        )}
      </Modal.Body>
    </Modal>
  );
};

export default BookingModal;
