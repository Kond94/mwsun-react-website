/* eslint-disable eqeqeq */

import React, { useState } from "react";

import AccommodationBookingForm from "./AccommodationBookingForm";
import BanquetingBookingForm from "./BanquetingBookingFrorm";
import ButtonGroup from "react-bootstrap/ButtonGroup";
import ConferencingBookingForm from "./ConferencingBookingForm";
import Container from "react-bootstrap/Container";
import Modal from "react-bootstrap/Modal";
import ToggleButton from "react-bootstrap/ToggleButton";
import useGlobalContext from "../hooks/useGlobalContext";

const BookingModal = ({ showBookingModal, onHideBookingModal }) => {
  const { form } = useGlobalContext();
  const { setForm } = useGlobalContext();
  const { formState } = useGlobalContext();
  const bookingForms = [
    { name: "Accommodation", value: "1" },
    { name: "Conference", value: "2" },
    { name: "Banqueting", value: "3" },
    // { name: "Package", value: "4" },
  ];
  return (
    <Modal show={showBookingModal} onHide={() => onHideBookingModal()}>
      <Modal.Header closeButton>
        <Modal.Title>
          {form == "0" ? "Online" : bookingForms[form - 1].name}
          {" Booking"}
        </Modal.Title>
      </Modal.Header>

      <Modal.Body>
        <Container fluid>
          {form === "0" ? (
            <>
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
              </ButtonGroup>{" "}
            </>
          ) : (
            <></>
          )}
        </Container>
        <br />

        {form === "1" ? (
          <AccommodationBookingForm
            onHide={onHideBookingModal}
            formState={formState}
          />
        ) : form === "2" ? (
          <ConferencingBookingForm
            onHide={onHideBookingModal}
            formState={formState}
          />
        ) : form === "3" ? (
          <BanquetingBookingForm
            onHide={onHideBookingModal}
            formState={formState}
          />
        ) : (
          <></>
        )}
      </Modal.Body>
    </Modal>
  );
};

export default BookingModal;
