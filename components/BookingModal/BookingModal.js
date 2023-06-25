/* eslint-disable eqeqeq */

import { Box, Button, Title } from "@mantine/core";
import { Paper, makeStyles } from "@material-ui/core";

import AccommodationBookingForm from "./AccommodationBookingForm";
import Backdrop from "@material-ui/core/Backdrop";
import BanquetingBookingForm from "./BanquetingBookingForm";
import BookingForm from "./BookingForm";
import ButtonGroup from "react-bootstrap/ButtonGroup";
import ConferencingBookingForm from "./ConferencingBookingForm";
import Container from "react-bootstrap/Container";
import Modal from "@material-ui/core/Modal";
import React from "react";
import ToggleButton from "react-bootstrap/ToggleButton";
import useGlobalContext from "../../hooks/useGlobalContext";

const useModalStyles = makeStyles((theme) => ({
  modal: {
    display: "flex",
    alignItems: "center",
    justifyContent: "center",
  },
  paper: {
    backgroundColor: theme.palette.background.paper,
    border: "2px solid #000",
    boxShadow: theme.shadows[5],
    padding: theme.spacing(2, 4, 3),
  },
}));
const boxStyle = {
  width: "70%",
  margin: "1rem auto",
  textAlign: "center",
  padding: "1rem 0",
};

const BookingModal = () => {
  const modalClasses = useModalStyles();
  const { form, setShowBookingModal, showBookingModal } = useGlobalContext();

  return (
    <Modal
      aria-labelledby='transition-modal-title'
      aria-describedby='transition-modal-description'
      className={modalClasses.modal}
      open={showBookingModal}
      onClose={() => setShowBookingModal(false)}
      closeAfterTransition
      BackdropComponent={Backdrop}
      BackdropProps={{
        timeout: 500,
      }}
    >
      <Paper>
        <BookingForm bookingType={form} />
      </Paper>
    </Modal>
  );
};

export default BookingModal;

// <Box
//           className='modalBox'
//           sx={{ position: "absolute", overflowY: "scroll", maxHeight: "90%" }}
//         >
