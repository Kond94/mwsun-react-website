import AboutCard from "../components/AboutCard";
import AppHeader from "../components/shared/AppHeader";
import BrandsCard from "../components/BrandsCard";
import Footer from "../components/shared/Footer";
import PageHeader from "../components/shared/PageHeader";
import PageHelmet from "../components/shared/PageHelmet";
import React from "react";

const AboutPage = () => {
  return (
    <>
      <PageHelmet pageTitle='About Page' />
      <AppHeader />
      <PageHeader title='About Us' subtitle='About' />
      <AboutCard />
      <BrandsCard />
      <Footer />
    </>
  );
};

export default AboutPage;
