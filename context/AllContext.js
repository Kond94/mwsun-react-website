import React, { createContext, useEffect, useState } from "react";

import { fetchAPI } from "../lib/api";

export const AppContext = createContext();

const AllContext = ({ children }) => {
  const [promotionRooms, setPromotionRooms] = useState([]);
  const [banquetRooms, setBanquetRooms] = useState([]);
  const [banquetAddOns, setBanquetAddOns] = useState([]);
  const [isVideoOpen, setIsVideoOpen] = useState(false);

  const [conferenceRooms, setConferenceRooms] = useState([]);
  const [conferenceAddOns, setConferenceAddOns] = useState([]);
  const [meals, setMeals] = useState([]);
  const [packages, setPackages] = useState([]);
  const [rooms, setRooms] = useState([]);
  const [form, setForm] = useState(null);
  const [formState, setFormState] = useState(null);
  const [showBookingModal, setShowBookingModal] = useState(false);
  // sticky
  useEffect(() => {
    try {
      const fetchData = async () => {
        const promotionRoomsResult = await Promise.all([
          fetchAPI("/promotion-rooms", { populate: ["deep"] }),
        ]);

        const banquetRoomsResult = await Promise.all([
          fetchAPI("/banquet-rooms", { populate: ["deep"] }),
        ]);
        const banquetAddOnsResult = await Promise.all([
          fetchAPI("/banquet-addons", { populate: ["deep"] }),
        ]);
        const conferenceRoomsResult = await Promise.all([
          fetchAPI("/conference-rooms", { populate: ["deep"] }),
        ]);
        const conferenceAddOnsResult = await Promise.all([
          fetchAPI("/conference-addons", { populate: ["deep"] }),
        ]);
        const mealsResult = await Promise.all([
          fetchAPI("/meals", { populate: ["deep"] }),
        ]);
        const packagesResult = await Promise.all([
          fetchAPI("/packages", { populate: ["deep"] }),
        ]);
        const roomsResult = await Promise.all([
          fetchAPI("/rooms", { populate: ["deep"] }),
        ]);

        setPromotionRooms(promotionRoomsResult[0].data);
        setBanquetRooms(banquetRoomsResult[0].data);
        setBanquetAddOns(banquetAddOnsResult[0].data);
        setConferenceRooms(conferenceRoomsResult[0].data);
        setConferenceAddOns(conferenceAddOnsResult[0].data);
        setMeals(mealsResult[0].data);
        setPackages(packagesResult[0].data);
        setRooms(roomsResult[0].data);
      };

      fetchData();
    } catch (error) {
      console.log(error);
    }
  }, []);
  const values = {
    promotionRooms,
    banquetRooms,
    banquetAddOns,
    conferenceRooms,
    conferenceAddOns,
    meals,
    packages,
    rooms,
    showBookingModal,
    form,
    formState,
    setForm,
    setFormState,
    setShowBookingModal,
    isVideoOpen,
    setIsVideoOpen,
  };
  return (
    <>
      <AppContext.Provider value={values}>{children}</AppContext.Provider>
    </>
  );
};

export default AllContext;
