/* eslint-disable eqeqeq */

import { Slide, makeStyles } from "@material-ui/core";

import BookingForm from "./BookingForm";
import CloseIcon from "@material-ui/icons/Close";
import Dialog from "@material-ui/core/Dialog";
import IconButton from "@material-ui/core/IconButton";
import MuiDialogActions from "@material-ui/core/DialogActions";
import MuiDialogContent from "@material-ui/core/DialogContent";
import MuiDialogTitle from "@material-ui/core/DialogTitle";
import React from "react";
import Typography from "@material-ui/core/Typography";
import useGlobalContext from "../../hooks/useGlobalContext";
import { withStyles } from "@material-ui/core/styles";

const styles = (theme) => ({
  root: {
    margin: 0,
    padding: theme.spacing(2),
  },
  closeButton: {
    position: "absolute",
    right: theme.spacing(1),
    top: theme.spacing(1),
    color: theme.palette.grey[500],
  },
});
const DialogTitle = withStyles(styles)((props) => {
  const { children, classes, onClose, ...other } = props;
  return (
    <MuiDialogTitle disableTypography className={classes.root} {...other}>
      <Typography variant='h6'>{children}</Typography>
      {onClose ? (
        <IconButton
          aria-label='close'
          className={classes.closeButton}
          onClick={onClose}
        >
          <CloseIcon />
        </IconButton>
      ) : null}
    </MuiDialogTitle>
  );
});

const DialogContent = withStyles((theme) => ({
  root: {
    padding: theme.spacing(2),
  },
}))(MuiDialogContent);

const DialogActions = withStyles((theme) => ({
  root: {
    margin: 0,
    padding: theme.spacing(1),
  },
}))(MuiDialogActions);

const Transition = React.forwardRef(function Transition(props, ref) {
  return <Slide direction='up' ref={ref} {...props} />;
});
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
    <Dialog
      // fullScreen
      open={showBookingModal}
      onClose={() => setShowBookingModal(false)}
      TransitionComponent={Transition}
      transitionDuration={1000}
      style={{ width: "100%" }}
    >
      <DialogTitle
        id='customized-dialog-title'
        onClose={() => setShowBookingModal(false)}
      ></DialogTitle>
      <h3 style={{ textAlign: "center" }}>Booking Form</h3>
      <DialogContent>
        <BookingForm bookingType={form} />
      </DialogContent>
      {/* </Paper> */}
    </Dialog>
  );
};

export default BookingModal;
