import React from "react";

import AllServices from "./HomeFeatures/AllServices";
import AppHeader from "../../components/shared/AppHeader";
import ClientCounter from "./ClientCounter";
import ContactCard from "./ContactCard";
import FavoriteRooms from "./FavoriteRooms";
import Footer from "../../components/shared/Footer";
import LandingSlider from "./LandingSlider";
import Packages from "./Packages/Packages";
import PageHelmet from "../../components/shared/PageHelmet";
import useGlobalContext from "../../hooks/useGlobalContext";

const Home = () => {
  const { promotionRooms } = useGlobalContext();
  const { packages } = useGlobalContext();

  return (
    <>
      <PageHelmet pageTitle='Home' />
      <AppHeader />
      <LandingSlider />
      <AllServices />
      <FavoriteRooms promotionRooms={promotionRooms} />
      <Packages packages={packages} />
      <ClientCounter />
      <ContactCard />
      <Footer />
    </>
  );
};

export default Home;
