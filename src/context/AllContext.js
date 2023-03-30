import React, { createContext, useEffect, useState } from "react";

import axios from "axios";

export const AppContext = createContext();

const AllContext = ({ children }) => {
  const [isVideoOpen, setIsVideoOpen] = useState(false);
  const [stickyMenu, setStickyMenu] = useState(false);
  const [error, setError] = useState([]);
  const [promotionRooms, setPromotionRooms] = useState([]);
  const [banquetRooms, setBanquetRooms] = useState([]);
  const [banquetAddOns, setBanquetAddOns] = useState([]);

  const [conferenceRooms, setConferenceRooms] = useState([]);
  const [conferenceAddOns, setConferenceAddOns] = useState([]);
  const [meals, setMeals] = useState([]);
  const [packages, setPackages] = useState([]);
  const [rooms, setRooms] = useState([]);
  const [form, setForm] = useState("0");
  const [formState, setFormState] = useState(null);

  const [show, setShow] = useState(false);

  const handleClose = () => setShow(false);
  const handleShow = () => setShow(true);

  const [showBookingModal, setShowBookingModal] = useState(false);

  const handleCloseBookingModal = () => {
    setShowBookingModal(false);
  };
  const handleShowBookingModal = () => setShowBookingModal(true);

  // sticky
  useEffect(() => {
    const stickyMenuBar = () => {
      if (window.scrollY > 80) {
        setStickyMenu(true);
      } else {
        setStickyMenu(false);
      }
    };

    const config = {
      headers: {
        Authorization: `Bearer e49abe329355de303a9dcb2321f38bdcf9dddc6809e2f4bcf959d0956a33fbab9f88f424e043b0a6c7ffbaf2e73f8316336ac0f1bc09154a1580cae07585192b84eb73b279822a736478be372b7bed17f09a62a682c9cdbb0208fb5e700aca7c42dd4de94bd21f3870a07c4726a04400e00a6444af8213ebc8db3974d59f7cf8`,
      },
    };

    axios
      .get(
        process.env.REACT_APP_API_URL + "/api/promotion-rooms?populate=deep",
        config
      )
      .then(({ data }) => {
        const promoRooms = data.data.map((promotionRoom) => {
          return {
            id: promotionRoom.id,
            promotionName: promotionRoom.attributes.name,
            discount: promotionRoom.attributes.discount,
            room: {
              id: promotionRoom.attributes.room.data.id,
              title: promotionRoom.attributes.room.data.attributes.title,
              description:
                promotionRoom.attributes.room.data.attributes.description,
              price: promotionRoom.attributes.room.data.attributes.price,
              displayPhoto:
                promotionRoom.attributes.room.data.attributes.displayPhoto?.data
                  ?.attributes?.url,
            },
          };
        });
        // console.log("Promotion Rooms: " + JSON.stringify(promoRooms, null, 2));
        setPromotionRooms(promoRooms);
      })
      .catch((error) => {
        console.log(error);

        setError(error);
      });

    axios
      .get(
        process.env.REACT_APP_API_URL + "/api/banquet-rooms?populate=deep",
        config
      )
      .then(({ data }) => {
        const banqRooms = data.data.map((banquetRoom) => {
          return {
            id: banquetRoom.id,
            name: banquetRoom.attributes.name,
            capacity: banquetRoom.attributes.capacity,
            price: banquetRoom.attributes.price,
            displayPhoto:
              banquetRoom.attributes.displayPhoto?.data?.attributes?.url,
            photos: banquetRoom.attributes.photos?.data?.map(
              (photo) => photo.attributes.url
            ),
          };
        });

        // console.log("Banquet Rooms: " + JSON.stringify(banqRooms, null, 2));
        setBanquetRooms(banqRooms);
      })
      .catch((error) => {
        console.log(error);

        setError(error);
      });

    axios
      .get(
        process.env.REACT_APP_API_URL + "/api/banquet-addons?populate=deep",
        config
      )
      .then(({ data }) => {
        const banqAddOns = data.data.map((banquetAddOn) => {
          return {
            id: banquetAddOn.id,
            name: banquetAddOn.attributes.name,
            icon: banquetAddOn.attributes.icon,
            price: banquetAddOn.attributes.price,
          };
        });

        // console.log("Banquet AddOns: " + JSON.stringify(banqAddOns, null, 2));
        setConferenceAddOns(banqAddOns);
      })
      .catch((error) => {
        console.log(error);

        setError(error);
      });
    axios
      .get(
        process.env.REACT_APP_API_URL + "/api/conference-rooms?populate=deep",
        config
      )
      .then(({ data }) => {
        const confRooms = data.data.map((conferenceRoom) => {
          return {
            id: conferenceRoom.id,
            name: conferenceRoom.attributes.name,
            capacity: conferenceRoom.attributes.capacity,
            price: conferenceRoom.attributes.price,
            displayPhoto:
              conferenceRoom.attributes.displayPhoto?.data?.attributes?.url,
            photos: conferenceRoom.attributes.photos?.data?.map(
              (photo) => photo.attributes.url
            ),
          };
        });

        // console.log("Coference Rooms: " + JSON.stringify(confRooms, null, 2));
        setConferenceRooms(confRooms);
      })
      .catch((error) => {
        console.log(error);

        setError(error);
      });

    axios
      .get(
        process.env.REACT_APP_API_URL + "/api/conference-addons?populate=deep",
        config
      )
      .then(({ data }) => {
        const confAddOns = data.data.map((conferenceAddOn) => {
          return {
            id: conferenceAddOn.id,
            name: conferenceAddOn.attributes.name,
            icon: conferenceAddOn.attributes.icon,
            price: conferenceAddOn.attributes.price,
          };
        });

        // console.log("Coference AddOns: " + JSON.stringify(confAddOns, null, 2));
        setConferenceAddOns(confAddOns);
      })
      .catch((error) => {
        console.log(error);

        setError(error);
      });

    axios
      .get(
        process.env.REACT_APP_API_URL + "/api/packages?populate=deep",
        config
      )
      .then(({ data }) => {
        const packgs = data.data.map((packages) => {
          return {
            id: packages.id,
            name: packages.attributes.name,
            description: packages.attributes.description,
            price: packages.attributes.price,
            packageItems: packages.attributes?.package_items?.data?.map(
              (package_item) => {
                return {
                  id: package_item.id,
                  name: package_item.attributes.name,
                };
              }
            ),
          };
        });

        // console.log("Packages: " + JSON.stringify(packgs, null, 2));
        setPackages(packgs);
      })
      .catch((error) => {
        console.log(error);

        setError(error);
      });

    axios
      .get(process.env.REACT_APP_API_URL + "/api/rooms?populate=deep", config)
      .then(({ data }) => {
        const roo = data.data.map((room) => {
          return {
            id: room.id,
            name: room.attributes.title,
            description: room.attributes.description,
            price: room.attributes.price,
            displayPhoto: room.attributes.displayPhoto?.data?.attributes?.url,
            photos: room.attributes.photos?.data?.map(
              (photo) => photo.attributes.url
            ),
            amenities: room.attributes.amenities.data.map((amenity) => {
              return {
                id: amenity.id,
                name: amenity.attributes.name,
                icon: amenity.attributes.icon,
                extraCharge: amenity.attributes.extraCharge,
              };
            }),
          };
        });
        // console.log("Rooms: " + JSON.stringify(roo, null, 2));

        setRooms(roo);
      })
      .catch((error) => {
        console.log(error);

        setError(error);
      });

    axios
      .get(process.env.REACT_APP_API_URL + "/api/meals?populate=deep", config)
      .then(({ data }) => {
        const meas = data.data.map((meal) => {
          return {
            id: meal.id,
            name: meal.attributes.name,
            description: meal.attributes.description,
            price: meal.attributes.price,
            displayPhoto: meal.attributes.displayPhoto?.data?.attributes?.url,
          };
        });
        // console.log("Meals: " + JSON.stringify(meas, null, 2));

        setMeals(meas);
      })
      .catch((error) => {
        console.log(error);

        setError(error);
      });

    window.addEventListener("scroll", stickyMenuBar);
  }, []);
  const values = {
    isVideoOpen,
    setIsVideoOpen,
    stickyMenu,
    error,
    promotionRooms,
    banquetRooms,
    banquetAddOns,
    conferenceRooms,
    conferenceAddOns,
    meals,
    packages,
    rooms,
    show,
    handleClose,
    handleShow,
    showBookingModal,
    handleCloseBookingModal,
    handleShowBookingModal,
    form,
    formState,
    setForm,
    setFormState,
  };
  return (
    <>
      <AppContext.Provider value={values}>{children}</AppContext.Provider>
    </>
  );
};

export default AllContext;
