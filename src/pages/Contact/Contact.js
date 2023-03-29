import AppHeader from "../../components/shared/AppHeader";
import ContactArea from "./ContactArea/ContactArea";
import ContactInfoArea from "./ContactInfoArea/ContactInfoArea";
import Footer from "../../components/shared/Footer";
import PageHeader from "../../components/shared/PageHeader";
import PageHelmet from "../../components/shared/PageHelmet";
import React from "react";

const Contact = () => {
  return (
    <>
      <PageHelmet pageTitle='Contact Page' />

      <AppHeader />
      <PageHeader title='Contact Us' subtitle='Contact' />
      <ContactInfoArea />
      <ContactArea />
      <Footer />
    </>
  );
};

export default Contact;
