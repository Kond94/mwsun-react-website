import * as yup from "yup";

import { ErrorMessage, Formik, useField, useFormikContext } from "formik";

import Col from "react-bootstrap/Col";
import DatePicker from "react-datepicker";
import Form from "react-bootstrap/Form";
import React from "react";
import Row from "react-bootstrap/Row";
import useGlobalContext from "../../hooks/useGlobalContext";

const schema = yup.object().shape({
  commencementDate: yup.date().required("This field is required"),
  commencementTime: yup.date().required("This field is required"),
  room: yup.number().required("This field is required"),
  participants: yup.number().required("This field is required"),
  numberOfDays: yup.number().required("This field is required"),
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
const ConferencingBookingForm = ({ formData, setFormData }) => {
  const { conferenceRooms, setFormState, formState } = useGlobalContext();

  useLayoutEffect(() => {
    setFormData({
      ...formData,
      commencementDate: formData.commencementDate,
      room:
        formData.room === null
          ? rooms.length > 0
            ? rooms[rooms.length - 1].id
            : formData.room
          : 1,
      commencementTime: formData.commencementTime,
      specialRequest: formData.specialRequest,
      participants: formData.participants,

      conferenceRoomName:
        formData.conferenceRooms === null
          ? conferenceRooms.length > 0
            ? conferenceRooms[conferenceRooms.length - 1].name
            : formData.packageName
          : conferenceRooms.find((p) => p.id == 1).name,
      packagePrice:
        formData.conferenceRooms === null
          ? conferenceRooms.length > 0
            ? conferenceRooms[conferenceRooms.length - 1].price
            : formData.packageName
          : conferenceRooms.find((p) => p.id == 1).price,
      totalPrice:
        formData.participants * formData.conferenceRooms === null
          ? conferenceRooms.length > 0
            ? conferenceRooms[conferenceRooms.length - 1].price
            : formData.packageName
          : conferenceRooms.find((p) => p.id == 1).price,
    });
  }, [formData.form]);


  return (
    <>
      <Formik
        validateOnBlur
        validationSchema={schema}
        onSubmit={() => {}}
        initialValues={{
          commencementDate: formData.commencementDate,
          commencementTime: formData.commencementTime,
          room:
            formData.room === null
              ? rooms.length > 0
                ? rooms[rooms.length - 1].id
                : formData.room
              : 1,
          participants: formData.participants,
          numberOfDays: formData.numberOfDays,
          specialRequest: formData.specialRequest,
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
                <Form.Label>Commencement Date</Form.Label>
                <br />
                <DatePickerField
                  name='commencementDate'
                  touched={touched}
                  errors={errors}
                />
                <ErrorMessage name='commencementDate'>
                  {(msg) => <div style={{ color: "red" }}>{msg}</div>}
                </ErrorMessage>
              </Form.Group>
              <Form.Group as={Col}>
                <Form.Label>Commencement Time</Form.Label>
                <br />

                <Form.Select
                  id='commencementTime'
                  isValid={touched.commencementTime && !errors.commencementTime}
                  value={values.commencementTime}
                  name='commencementTime'
                  onChange={handleChange}
                >
                  <option key={1} value={"Morning"}>
                    Morning
                  </option>
                  <option key={2} value={"Afternoon"}>
                    Afternoon
                  </option>
                  <option key={3} value={"All Day"}>
                    All Day
                  </option>
                </Form.Select>
                <ErrorMessage name='commencementTime'>
                  {(msg) => <div style={{ color: "red" }}>{msg}</div>}
                </ErrorMessage>
              </Form.Group>
            </Row>
            <Form.Group as={Col} controlId='room'>
              <Form.Label>Conference Room</Form.Label>
              <Form.Select
                id='room'
                isValid={touched.room && !errors.room}
                value={values.room}
                name='room'
                onChange={handleChange}
              >
                {conferenceRooms.map((room) => (
                  <option key={room.id.toString()} value={room.id}>
                    {room.name} (Mk{room.price.toLocaleString("en-US")})
                  </option>
                ))}
              </Form.Select>
              <ErrorMessage name='room'>
                {(msg) => <div style={{ color: "red" }}>{msg}</div>}
              </ErrorMessage>
            </Form.Group>
            <br />
            <Row className='mb-4'>
              <Form.Group as={Col}>
                <Form.Label>Participants (Number)</Form.Label>
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
                <Form.Label>Duration (days)</Form.Label>
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
          </Form>
        )}
      </Formik>
    </>
  );
};

export default ConferencingBookingForm;
