import AppHeader from "../../components/shared/AppHeader";
import Catalog from "../../components/Catalog";
import Footer from "../../components/shared/Footer";
import PageHeader from "../../components/shared/PageHeader";
import PageHelmet from "../../components/shared/PageHelmet";
import React from "react";

const Conferencing = () => {
  return (
    <>
      <PageHelmet pageTitle='Portfolio Page' />

      <AppHeader />
      <PageHeader title='Conferencing' subtitle='Portfolio' />
      <Catalog />

      <Footer />
    </>
  );
};

export default Conferencing;
