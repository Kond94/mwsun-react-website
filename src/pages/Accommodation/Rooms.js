import AppHeader from "../../components/shared/AppHeader";
import Footer from "../../components/shared/Footer";
import PageHeader from "../../components/shared/PageHeader";
import PageHelmet from "../../components/shared/PageHelmet";
import React from "react";
import RoomDetailsCard from "./RoomDetailsCard";

const Rooms = () => {
  return (
    <>
      <PageHelmet pageTitle='Team Details Page' />

      <AppHeader />
      <PageHeader title='Room Details' subtitle='Room Details' />
      <RoomDetailsCard />
      <Footer />
    </>
  );
};

export default Rooms;
