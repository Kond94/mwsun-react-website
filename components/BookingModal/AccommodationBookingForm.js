import "react-datepicker/dist/react-datepicker.css";
import "react-toastify/dist/ReactToastify.css";

import * as yup from "yup";

import { ErrorMessage, Formik, useField, useFormikContext } from "formik";
import React, { useState } from "react";

import Button from "react-bootstrap/Button";
import Col from "react-bootstrap/Col";
import DatePicker from "react-datepicker";
import Form from "react-bootstrap/Form";
import Row from "react-bootstrap/Row";
import axios from "axios";
import { toast } from "react-toastify";
import useGlobalContext from "../../hooks/useGlobalContext";

const schema = yup.object().shape({
  arrivalDate: yup
    .date()
    .min(new Date(), "Arrival Date must be from today onwards")
    .required("This field is required"),
  departureDate: yup
    .date()
    .required("This field is required")
    .min(new Date(), "Departure Date must be from today onwards"),
  room: yup.number().required("This field is required"),
  adults: yup.number().required("This field is required"),
  children: yup.number().required("This field is required"),
  specialRequest: yup.string().required("This field is required"),
});

const AccommodationBookingForm = ({ formData, setFormData }) => {
  const DatePickerField = ({ ...props }) => {
    const { setFieldValue } = useFormikContext();
    const [field] = useField(props);

    return (
      <DatePicker
        {...field}
        {...props}
        minDate={props.minDate}
        selected={(field.value && new Date(field.value)) || null}
        onChange={(val) => {
          setFieldValue(field.name, val);
          setFormData({ ...formData, [field.name]: val });
        }}
        customInput={
          <Form.Control
            type='text'
            value={(field.value && new Date(field.value)) || null}
            isValid={props.touched[props.name] && !props.errors[props.name]}
          />
        }
      />
    );
  };

  const { rooms, setFormState, formState } = useGlobalContext();
  const [isSubmitting, setIsSubmitting] = useState(false);

  const notify = () =>
    toast.success(
      "You have successfully made your reservation. Please wait for a response from our team.",
      { autoClose: 6000 }
    );

  const postData = async (data) => {
    setIsSubmitting(true);
    await axios
      .post(
        process.env.REACT_APP_API_URL +
          "/api/accommodation-bookings?populate=deep",
        {
          data: {
            ...data,
            arrivalDate: data.arrivalDate.toISOString().split("T")[0],
            departureDate: data.departureDate.toISOString().split("T")[0],
            room: data.room,
          },
        },

        {
          headers: {
            "Content-Type": "application/json",
            Authorization: `Bearer ${process.env.REACT_APP_API_KEY}`,
          },
        }
      )
      .then((response) => {
        setShowBookingModal(false);
        notify();
      })
      .catch((error) => {
        console.log(error);
      });

    setIsSubmitting(false);
  };
  const today = new Date();
  const tomorrow = new Date(+today + 86400000);
  return (
    <>
      <Formik
        validateOnBlur
        validationSchema={schema}
        onSubmit={postData}
        initialValues={{
          arrivalDate: formData.arrivalDate,
          departureDate: formData.departureDate,
          room: formData.room,
          adults: formData.adults,
          children: formData.children,
          specialRequest: formData.specialRequest,
        }}
      >
        {({
          handleSubmit,
          handleChange,
          handleBlur,
          values,
          touched,
          errors,
        }) => (
          <Form
            // noValidate
            onSubmit={handleSubmit}
            onChange={(e) => {
              setFormData({ ...formData, [e.target.name]: e.target.value });
            }}
            onBlur={handleBlur}
          >
            <Row className='mb-3'>
              <Form.Group as={Col}>
                <Form.Label>Arrival Date</Form.Label>
                <br />
                <DatePickerField
                  name='arrivalDate'
                  touched={touched}
                  errors={errors}
                  minDate={today}
                />
                <ErrorMessage name='arrivalDate'>
                  {(msg) => <div style={{ color: "red" }}>{msg}</div>}
                </ErrorMessage>
              </Form.Group>
              <Form.Group as={Col}>
                <Form.Label>Departure Date</Form.Label>
                <br />

                <DatePickerField
                  name='departureDate'
                  touched={touched}
                  errors={errors}
                  minDate={values.arrivalDate}
                />
                <ErrorMessage name='departureDate'>
                  {(msg) => <div style={{ color: "red" }}>{msg}</div>}
                </ErrorMessage>
              </Form.Group>
            </Row>
            <Form.Group as={Col} controlId='room'>
              <Form.Label>Room Type</Form.Label>
              <Form.Select
                id='room'
                isValid={touched.room && !errors.room}
                value={values.room}
                name='room'
                onChange={handleChange}
              >
                {rooms.map((room) => (
                  <option key={room.id.toString()} value={room.id}>
                    {room.name} (Mk{room.price.toLocaleString("en-US")})
                  </option>
                ))}
              </Form.Select>
              <ErrorMessage name='room'>
                {(msg) => <div style={{ color: "red" }}>{msg}</div>}
              </ErrorMessage>
            </Form.Group>
            <Row className='mb-4'>
              <Form.Group as={Col}>
                <Form.Label>Adults</Form.Label>
                <Form.Control
                  type='number'
                  name='adults'
                  value={values.adults}
                  onChange={handleChange}
                  isValid={touched.adults && !errors.adults}
                />
                <ErrorMessage name='adults'>
                  {(msg) => <div style={{ color: "red" }}>{msg}</div>}
                </ErrorMessage>
              </Form.Group>

              <Form.Group as={Col}>
                <Form.Label>Children</Form.Label>
                <Form.Control
                  type='number'
                  name='children'
                  value={values.children}
                  onChange={handleChange}
                  isValid={touched.children && !errors.children}
                />
                <ErrorMessage name='children'>
                  {(msg) => <div style={{ color: "red" }}>{msg}</div>}
                </ErrorMessage>
              </Form.Group>
            </Row>

            <Form.Group className='mb-3'>
              <Form.Label>Special Request</Form.Label>
              <Form.Control
                as='textarea'
                rows={3}
                name='specialRequest'
                value={values.specialRequest}
                onChange={handleChange}
                isValid={touched.specialRequest && !errors.specialRequest}
              />
              <ErrorMessage name='specialRequest'>
                {(msg) => <div style={{ color: "red" }}>{msg}</div>}
              </ErrorMessage>
            </Form.Group>
            <Row>
              <Form.Group
                style={{
                  display: "flex",
                  alignItems: "center",
                  justifyContent: "center",
                }}
                as={Col}
                className='m-3'
              >
                {/* <Button disabled={isSubmitting} variant='primary' type='submit'>
                  {isSubmitting && (
                    <span className='spinner-border spinner-border-sm mr-1'></span>
                  )}
                  Submit
                </Button> */}
              </Form.Group>
            </Row>
          </Form>
        )}
      </Formik>
    </>
  );
};

export default AccommodationBookingForm;
