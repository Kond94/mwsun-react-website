import * as yup from "yup";

import { ErrorMessage, Formik } from "formik";
import React, { useState } from "react";

import Button from "react-bootstrap/Button";
import Col from "react-bootstrap/Col";
import Form from "react-bootstrap/Form";
import Row from "react-bootstrap/Row";
import { fetchAPI } from "../../lib/api";
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

  const postData = async (event) => {
    setIsSubmitting(true);
    const notify = () =>
      toast.success(
        "You have successfully sent your message. Please wait for a response from our team.",
        { autoClose: 6000 }
      );
    // Get data from the form.
    const data = {
      from: event.name,
      email: event.email,
      phone: event.phone,
      subject: event.subject,
      message: event.message,
    };

    // Send the data to the server in JSON format.
    const JSONdata = JSON.stringify({ data: data });

    // Form the request for sending data to the server.
    const options = {
      // The method is POST because we are sending data.
      method: "POST",
      // Tell the server we're sending JSON.
      headers: {
        "Content-Type": "application/json",
      },
      // Body of the request is the JSON data we created above.
      body: JSONdata,
    };
    try {
      const [eventRes] = await Promise.all([
        fetchAPI("/messages", {}, options),
      ]).then((response) => {
        setIsSubmitting(false);

        notify();
      });
    } catch (error) {
      setIsSubmitting(false);

      console.log(error);
    }

    document.getElementsByName("name").value = "";
    document.getElementsByName("email").value = "";
    document.getElementsByName("phone").value = "";
    document.getElementsByName("subject").value = "";
    document.getElementsByName("message").value = "";
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

            <Form.Group className='mb-3'>
              <Form.Control
                type='text'
                name='subject'
                value={values.subject}
                onChange={handleChange}
                isValid={touched.subject && !errors.subject}
                placeholder='Subject'
                style={{ textAlign: "left" }}
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
                style={{ textAlign: "left" }}
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
