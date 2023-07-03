import React, { createContext, useEffect, useState } from "react";

import { fetchAPI } from "../lib/api";

export const AppContext = createContext();

const AllContext = ({ children }) => {
  const [promotionRooms, setPromotionRooms] = useState([]);
  const [banquetRooms, setBanquetRooms] = useState([]);
  const [banquetAddOns, setBanquetAddOns] = useState([]);
  const [isVideoOpen, setIsVideoOpen] = useState(false);

  const [items, setItems] = useState([]);
  const [conferenceRooms, setConferenceRooms] = useState([]);
  const [conferenceAddOns, setConferenceAddOns] = useState([]);
  const [meals, setMeals] = useState([]);
  const [packages, setPackages] = useState([]);
  const [rooms, setRooms] = useState([]);
  const [form, setForm] = useState(null);
  const [formState, setFormState] = useState(null);
  const [showBookingModal, setShowBookingModal] = useState(false);
  const [showRestaurantModal, setShowRestaurantModal] = useState(false);
  const [isFetching, setIsFetching] = useState(false);
  // sticky
  useEffect(() => {
    const fetchData = async () => {
      setIsFetching(true);
      const results = await Promise.all([
        fetchAPI("/rooms", { populate: ["deep"] }),
        fetchAPI("/promotion-rooms", { populate: ["deep"] }),
        fetchAPI("/packages", { populate: ["deep"] }),
        fetchAPI("/conference-rooms", { populate: ["deep"] }),
        fetchAPI("/conference-addons", { populate: ["deep"] }),
        fetchAPI("/banquet-rooms", { populate: ["deep"] }),
        fetchAPI("/banquet-addons", { populate: ["deep"] }),
        fetchAPI("/meals", {
          populate: ["deep"],
          pagination: { pageSize: 100 },
        }),
      ]);

      setRooms(results[0].data);
      setPromotionRooms(results[1].data);
      setPackages(results[2].data);
      setConferenceRooms(results[3].data);
      setConferenceAddOns(results[4].data);
      setBanquetRooms(results[5].data);
      setBanquetAddOns(results[6].data);
      setMeals(results[7].data);

      setIsFetching(false);
    };
    try {
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
    items,
    setItems,
    rooms,
    showBookingModal,
    showRestaurantModal,
    form,
    formState,
    isFetching,
    setIsFetching,
    setForm,
    setFormState,
    setShowBookingModal,
    setShowRestaurantModal,
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
