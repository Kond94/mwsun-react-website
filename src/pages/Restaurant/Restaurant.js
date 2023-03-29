import AppHeader from "../../components/shared/AppHeader";
import Footer from "../../components/shared/Footer";
import PageHeader from "../../components/shared/PageHeader";
import PageHelmet from "../../components/shared/PageHelmet";
import React from "react";

const Restaurant = () => {
  return (
    <>
      <PageHelmet pageTitle='Blog Details Page' />

      <AppHeader />
      <PageHeader title='Catering' subtitle='Aamari Restaurant' />
      <Footer />
    </>
  );
};

export default Restaurant;
