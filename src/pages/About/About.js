import AboutCard from "./AboutCard";
import AppHeader from "../../components/shared/AppHeader";
import BrandsCard from "./BrandsCard";
import Footer from "../../components/shared/Footer";
import PageHeader from "../../components/shared/PageHeader";
import PageHelmet from "../../components/shared/PageHelmet";
import React from "react";

const About = () => {
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

export default About;
