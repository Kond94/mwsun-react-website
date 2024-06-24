import * as yup from "yup";

import { ErrorMessage, Formik, useField, useFormikContext } from "formik";

import Col from "react-bootstrap/Col";
import DatePicker from "react-datepicker";
import Form from "react-bootstrap/Form";
import React from "react";
import Row from "react-bootstrap/Row";
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

  const { rooms } = useGlobalContext();
  const today = new Date();

  return (
    <>
      <Formik
        validateOnBlur
        validationSchema={schema}
        onSubmit={() => {}}
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
                <Form.Label>Children (39,500 each)</Form.Label>
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
          </Form>
        )}
      </Formik>
    </>
  );
};

export default AccommodationBookingForm;
