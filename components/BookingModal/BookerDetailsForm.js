import * as yup from "yup";

import { ErrorMessage, Formik } from "formik";
import React, { useState } from "react";

import Button from "react-bootstrap/Button";
import Col from "react-bootstrap/Col";
import Form from "react-bootstrap/Form";
import Row from "react-bootstrap/Row";
import axios from "axios";
import { toast } from "react-toastify";

const schema = yup.object().shape({
  name: yup.string().required("This field is required"),
  phone: yup.string().required("This field is required"),
  email: yup.string().email("Invalid email").required("Required"),
});

const BookerDetailsForm = ({ formData, setFormData }) => {
  const [isSubmitting, setIsSubmitting] = useState(false);

  const notify = () =>
    toast.success(
      "You have successfully sent your message. Please wait for a response from our team.",
      { autoClose: 6000 }
    );

  const postData = async (data) => {
    setIsSubmitting(true);
    await axios
      .post(
        process.env.REACT_APP_API_URL + "/api/messages",
        {
          data: {
            ...data,
            from: data.name,
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
        notify();
      })
      .catch((error) => {
        console.log(error);
      });

    setIsSubmitting(false);
  };
  return (
    <div>
      <Formik
        validationSchema={schema}
        onSubmit={postData}
        initialValues={{
          name: "",
          phone: "",
          email: "",
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
        }) => (
          <Form
            onSubmit={handleSubmit}
            onChange={(e) => {
              setFormData({ ...formData, [e.target.name]: e.target.value });
            }}
            onBlur={handleBlur}
          >
            <Form.Group className='mb-3'>
              <Form.Control
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

            <Form.Group className='mb-3'>
              <Form.Control
                type='text'
                name='phone'
                value={values.phone}
                onChange={handleChange}
                isValid={touched.phone && !errors.phone}
                placeholder='Phone Number'
                style={{ textAlign: "left" }}
              />
              <ErrorMessage name='phone'>
                {(msg) => <div style={{ color: "red" }}>{msg}</div>}
              </ErrorMessage>
            </Form.Group>

            <Form.Group className='mb-3'>
              <Form.Control
                type='email'
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
    </div>
  );
};

export default BookerDetailsForm;
