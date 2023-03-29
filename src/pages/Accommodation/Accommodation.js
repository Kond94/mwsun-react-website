import AppHeader from "../../components/shared/AppHeader";
import Footer from "../../components/shared/Footer";
import PageHeader from "../../components/shared/PageHeader";
import PageHelmet from "../../components/shared/PageHelmet";
import React from "react";
import RoomDetailsCard from "./RoomDetailsCard";
import { useLocation } from "react-router";

const Accommodation = () => {
  let { state } = useLocation();

  return (
    <>
      <PageHelmet pageTitle='Accommodation' />
      <AppHeader />
      <PageHeader title='Accommodation' subtitle={state.category} />
      <RoomDetailsCard />
      <RoomDetailsCard />
      <RoomDetailsCard />
      <Footer />
    </>
  );
};

export default Accommodation;
