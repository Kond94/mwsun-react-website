import * as yup from "yup";

import { ErrorMessage, Formik } from "formik";
import "react-phone-number-input/style.css";
import PhoneInput from "react-phone-number-input";
import Col from "react-bootstrap/Col";
import Form from "react-bootstrap/Form";
import React from "react";
import Row from "react-bootstrap/Row";

const schema = yup.object().shape({
  name: yup.string().required("This field is required"),
  phone: yup.string().required("This field is required"),
  email: yup.string().email("Invalid email").required("Required"),
});

const BookerDetailsForm = ({ formData, setFormData }) => {
  return (
    <div>
      <Formik
        validationSchema={schema}
        onSubmit={() => {}}
        initialValues={{
          name: formData.name,
          phone: formData.phone,
          email: formData.email,
        }}
        validateOnBlur
      >
        {({
          handleSubmit,
          handleChange,
          values,
          touched,
          isValid,
          errors,
          handleBlur,
          setFieldValue,
        }) => (
          <Form
            onSubmit={handleSubmit}
            onChange={(e) => {
              setFormData({ ...formData, [e.target.name]: e.target.value });
            }}
            onBlur={handleBlur}
          >
            <Form.Group
              className='mb-3 text-center'
              style={{ width: "100%", margin: "auto" }}
            >
              <Form.Label>Full Name</Form.Label>
              <Form.Control
                className='text-center'
                type='text'
                name='name'
                value={values.name}
                onChange={handleChange}
                isValid={touched.name && !errors.name}
                placeholder='Your Name'
                style={{ textAlign: "left" }}
              />
              <ErrorMessage name='name'>
                {(msg) => <div style={{ color: "red" }}>{msg}</div>}
              </ErrorMessage>
            </Form.Group>

            <Form.Group
              className='mb-3'
              style={{ width: "100%", margin: "auto" }}
            >
              <Form.Label>Phone Number</Form.Label>
              <PhoneInput
                placeholder='Enter phone number'
                value={values.phone}
                onChange={(text) => {
                  setFormData({ ...formData, phone: text });
                }}
                defaultCountry='MW'
                onBlur={() => {}}
              />
              {/* <Form.Control
                type='text'
                className='text-center'
                name='phone'
                value={values.phone}
                onChange={handleChange}
                isValid={touched.phone && !errors.phone}
                placeholder='Phone Number'
                style={{ textAlign: "left" }}
              /> */}
              <ErrorMessage name='phone'>
                {(msg) => <div style={{ color: "red" }}>{msg}</div>}
              </ErrorMessage>
            </Form.Group>

            <Form.Group
              className='mb-3'
              style={{ width: "100%", margin: "auto" }}
            >
              <Form.Label>Email Address</Form.Label>

              <Form.Control
                type='email'
                className='text-center'
                name='email'
                value={values.email}
                onChange={handleChange}
                isValid={touched.email && !errors.email}
                placeholder='Email Address'
                style={{ textAlign: "left" }}
              />
              <ErrorMessage name='email'>
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
              ></Form.Group>
            </Row>
          </Form>
        )}
      </Formik>
    </div>
  );
};

export default BookerDetailsForm;
