import AppHeader from "../components/shared/AppHeader";
import ContactInfoArea from "../components/ContactInfoArea";
import Footer from "../components/shared/Footer";
import PageHeader from "../components/shared/PageHeader";
import PageHelmet from "../components/shared/PageHelmet";
import React from "react";
import ContactCard from "./Home/ContactCard";

const Contact = () => {
  return (
    <>
      <PageHelmet pageTitle='Contact Page' />

      <AppHeader />
      <PageHeader title='Contact Us' subtitle='Contact' />
      {/* <ContactInfoArea /> */}
      <ContactCard />
      <Footer />
    </>
  );
};

export default Contact;
