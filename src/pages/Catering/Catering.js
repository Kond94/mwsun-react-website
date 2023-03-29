import AppHeader from "../../components/shared/AppHeader";
import Catalog from "../../components/Catalog";
import Footer from "../../components/shared/Footer";
import PageHeader from "../../components/shared/PageHeader";
import PageHelmet from "../../components/shared/PageHelmet";
import React from "react";

const Catering = () => {
  return (
    <>
      <PageHelmet pageTitle='Portfolio Page' />

      <AppHeader />
      <PageHeader title='Catering' subtitle='External Catering' />
      <Catalog />

      <Footer />
    </>
  );
};

export default Catering;
