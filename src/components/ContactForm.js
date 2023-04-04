import "react-datepicker/dist/react-datepicker.css";
import "react-toastify/dist/ReactToastify.css";

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
  subject: yup.string().required("This field is required"),
  message: yup.string().required("This field is required"),
});

const ContactForm = () => {
  const [isSubmitting, setIsSubmitting] = useState(false);

  const notify = () =>
    toast.success(
      "You have successfully sent your message. Please wait for a response from our team.",
      { autoClose: false }
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
        console.log(response);
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
          name: "",
          phone: "",
          email: "",
          subject: "",
          message: "",
        }}
      >
        {({ handleSubmit, handleChange, values, touched, isValid, errors }) => (
          <Form noValidate onSubmit={handleSubmit}>
            <Form.Group className='mb-3'>
              <Form.Control
                type='text'
                name='name'
                value={values.name}
                onChange={handleChange}
                isValid={touched.name && !errors.name}
                placeholder='Your Name'
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
              />
              <ErrorMessage name='email'>
                {(msg) => <div style={{ color: "red" }}>{msg}</div>}
              </ErrorMessage>
            </Form.Group>

            <Form.Group className='mb-3'>
              <Form.Control
                type='text'
                name='subject'
                value={values.subject}
                onChange={handleChange}
                isValid={touched.subject && !errors.subject}
                placeholder='Subject'
              />
              <ErrorMessage name='subject'>
                {(msg) => <div style={{ color: "red" }}>{msg}</div>}
              </ErrorMessage>
            </Form.Group>

            <Form.Group className='mb-3'>
              <Form.Control
                as='textarea'
                rows={3}
                name='message'
                value={values.message}
                onChange={handleChange}
                isValid={touched.message && !errors.message}
                placeholder='Your Message...'
              />
              <ErrorMessage name='message'>
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
                <Button disabled={isSubmitting} variant='primary' type='submit'>
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

export default ContactForm;
