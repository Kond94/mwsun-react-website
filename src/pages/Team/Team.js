import AppHeader from "../../components/shared/AppHeader";
import Footer from "../../components/shared/Footer";
import PageHeader from "../../components/shared/PageHeader";
import PageHelmet from "../../components/shared/PageHelmet";
import React from "react";
import TeamArea from "./TeamArea/TeamArea";

const Team = () => {
  return (
    <>
      <PageHelmet pageTitle='Team Page' />

      <AppHeader />
      <PageHeader title='Our Management Team' />
      <TeamArea />
      <Footer />
    </>
  );
};

export default Team;
