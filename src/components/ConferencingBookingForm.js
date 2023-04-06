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
import useGlobalContext from "../hooks/useGlobalContext";

const schema = yup.object().shape({
  firstName: yup.string().required("This field is required"),
  lastName: yup.string().required("This field is required"),
  email: yup.string().email("Invalid email").required("Required"),
  phone: yup
    .string()
    .required("This field is required")
    .matches(
      `^\\s*(?:\\+?(\\d{1,3}))?[-. (]*(\\d{3})[-. )]*(\\d{3})[-. ]*(\\d{4})(?: *x(\\d+))?\\s*$`,
      "Please enter a valid phone number"
    ),
  commencementDate: yup.date().required("This field is required"),
  commencementTime: yup.string().required("This field is required"),
  conference_room: yup.string().required("This field is required"),
  adults: yup.number().required("This field is required"),
  children: yup.number().required("This field is required"),
  specialRequest: yup.string().required("This field is required"),
});

const DatePickerField = ({ ...props }) => {
  const { setFieldValue } = useFormikContext();
  const [field] = useField(props);

  return (
    <DatePicker
      {...field}
      {...props}
      selected={(field.value && new Date(field.value)) || null}
      onChange={(val) => {
        setFieldValue(field.name, val);
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

const ConferencingBookingForm = ({ formState }) => {
  const { conferenceRooms } = useGlobalContext();
  const { conferenceAddOns } = useGlobalContext();
  const { handleCloseBookingModal } = useGlobalContext();
  const [isSubmitting, setIsSubmitting] = useState(false);

  const notify = () =>
    toast.success(
      "You have successfully made your reservation. Please wait for a response from our team.",
      { autoClose: 6000 }
    );

  const handleAddons = (arr, newId, setFieldValue) => {
    if (!arr.includes(newId)) {
      //checking weather array contain the id
      arr.push(newId); //adding to array because value doesnt exists
    } else {
      arr.splice(arr.indexOf(newId), 1); //deleting
    }
    setFieldValue("conference_addons", arr);
  };

  const postData = async (data) => {
    setIsSubmitting(true);
    await axios
      .post(
        process.env.REACT_APP_API_URL + "/api/conference-bookings",
        {
          data: {
            ...data,
            commencementDate: data.commencementDate.toISOString().split("T")[0],
            conference_room: data.conference_room,
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
        handleCloseBookingModal();
        notify();
      })
      .catch((error) => {
        console.log(error);
      });

    setIsSubmitting(false);
  };

  return (
    <>
      <Formik
        validationSchema={schema}
        onSubmit={postData}
        initialValues={{
          firstName: "",
          lastName: "",
          email: "",
          phone: "",
          commencementDate: new Date(),
          commencementTime: "",
          participants: 1,
          numberOfDays: 1,
          conference_room: formState === null ? "1" : formState.conferenceRoom,
          conference_addons: [],
          specialRequest: "None",
        }}
      >
        {({
          handleSubmit,
          handleChange,
          setFieldValue,
          handleBlur,
          values,
          touched,
          isValid,
          errors,
        }) => (
          <Form onSubmit={handleSubmit}>
            <Row className='mb-3'>
              <Form.Group as={Col}>
                <Form.Label>First Name</Form.Label>
                <Form.Control
                  type='text'
                  name='firstName'
                  value={values.firstName}
                  onChange={handleChange}
                  isValid={touched.firstName && !errors.firstName}
                />
                <ErrorMessage name='firstName'>
                  {(msg) => <div style={{ color: "red" }}>{msg}</div>}
                </ErrorMessage>
              </Form.Group>

              <Form.Group as={Col}>
                <Form.Label>Last Name</Form.Label>
                <Form.Control
                  type='text'
                  name='lastName'
                  value={values.lastName}
                  onChange={handleChange}
                  isValid={touched.lastName && !errors.lastName}
                />
                <ErrorMessage name='lastName'>
                  {(msg) => <div style={{ color: "red" }}>{msg}</div>}
                </ErrorMessage>
              </Form.Group>
            </Row>
            <Form.Group className='mb-3'>
              <Form.Label>Email</Form.Label>
              <Form.Control
                type='email'
                name='email'
                value={values.email}
                onChange={handleChange}
                isValid={touched.email && !errors.email}
              />
              <ErrorMessage name='email'>
                {(msg) => <div style={{ color: "red" }}>{msg}</div>}
              </ErrorMessage>
            </Form.Group>
            <Form.Group className='mb-3'>
              <Form.Label>Phone Number</Form.Label>
              <Form.Control
                type='text'
                name='phone'
                value={values.phone}
                onChange={handleChange}
                isValid={touched.phone && !errors.phone}
              />
              <ErrorMessage name='phone'>
                {(msg) => <div style={{ color: "red" }}>{msg}</div>}
              </ErrorMessage>
            </Form.Group>
            <Form.Group as={Col} controlId='room'>
              <Form.Label>Conference Room</Form.Label>
              <Form.Select
                id='conference_room'
                isValid={touched.conference_room && !errors.conference_room}
                value={values.conference_room}
                name='conference_room'
                onChange={handleChange}
              >
                {conferenceRooms.map((conferenceRoom) => (
                  <option
                    key={conferenceRoom.id.toString()}
                    value={conferenceRoom.id}
                  >
                    {conferenceRoom.name} (Mk
                    {conferenceRoom.price.toLocaleString("en-US")})
                  </option>
                ))}
              </Form.Select>
              <ErrorMessage name='conference_room'>
                {(msg) => <div style={{ color: "red" }}>{msg}</div>}
              </ErrorMessage>
            </Form.Group>
            <Form.Group as={Col} controlId='addOns'>
              <Form.Label>Add Ons</Form.Label>

              <div className='mb-3'>
                {conferenceAddOns.map((addon) => (
                  <Form.Check
                    key={addon.id.toString()}
                    inline
                    label={
                      addon.name +
                      " (Mk " +
                      addon.price.toLocaleString("en-US") +
                      ")"
                    }
                    onClick={() =>
                      handleAddons(
                        values.conference_addons,
                        addon.id,
                        setFieldValue
                      )
                    }
                    name={addon.name}
                    type='checkbox'
                    id={addon.id}
                  />
                ))}
              </div>
            </Form.Group>
            <Row className='mb-3'>
              <Form.Group as={Col}>
                <Form.Label>Commencement Date</Form.Label>
                <DatePickerField
                  name='commencementDate'
                  touched={touched}
                  errors={errors}
                />
                <ErrorMessage name='commencementDate'>
                  {(msg) => <div style={{ color: "red" }}>{msg}</div>}
                </ErrorMessage>
              </Form.Group>
              <Form.Group as={Col} controlId='time'>
                <Form.Label>Commencement Time</Form.Label>
                <Form.Select
                  id='time'
                  isValid={touched.time && !errors.time}
                  value={values.time}
                  name='time'
                  onChange={handleChange}
                >
                  <option key={1} value={"Morning"}>
                    Morning{" "}
                  </option>
                  <option key={2} value={"Afternoon"}>
                    Afternoon{" "}
                  </option>
                  <option key={3} value={"All Day"}>
                    All Day
                  </option>
                </Form.Select>
                <ErrorMessage name='time'>
                  {(msg) => <div style={{ color: "red" }}>{msg}</div>}
                </ErrorMessage>
              </Form.Group>
            </Row>

            <Row className='mb-4'>
              <Form.Group as={Col}>
                <Form.Label>Participants</Form.Label>
                <Form.Control
                  type='number'
                  name='participants'
                  value={values.participants}
                  onChange={handleChange}
                  isValid={touched.participants && !errors.participants}
                />
                <ErrorMessage name='participants'>
                  {(msg) => <div style={{ color: "red" }}>{msg}</div>}
                </ErrorMessage>
              </Form.Group>

              <Form.Group as={Col}>
                <Form.Label>Duration (Days)</Form.Label>
                <Form.Control
                  type='number'
                  name='numberOfDays'
                  value={values.numberOfDays}
                  onChange={handleChange}
                  isValid={touched.numberOfDays && !errors.numberOfDays}
                />
                <ErrorMessage name='numberOfDays'>
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
                <Button
                  disabled={isSubmitting}
                  variant='primary'
                  type='submit'
                  onClick={() => postData(values)}
                >
                  {isSubmitting && (
                    <span className='spinner-border spinner-border-sm mr-1'></span>
                  )}
                  Submit
                </Button>
              </Form.Group>
            </Row>
          </Form>
        )}
      </Formik>
    </>
  );
};

export default ConferencingBookingForm;
