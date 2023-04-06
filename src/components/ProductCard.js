import Catalog from "react-catalog-view";
import React from "react";

const ProductCard = ({ items }) => {
  const CONTENT_KEYS = {
    imgKey: "image",
    cardTitleKey: "title",
    cardDescriptionKey: "description",
    priceKey: "price",
    discountedPriceKey: "discounted",
    priceCurrencyKey: "currency",
    discountCurrencyKey: "currency",
  };
  return (
    <Catalog
      data={items}
      // Array of JSON Objects (required)
      contentKeys={CONTENT_KEYS}
      // JSON Object defining the keys that will be
      // used from the data array, keys should match. (required)
      skeleton={0}
      // Any non zero number will override default cards
      // and will show that many skeleton cards.
      cardSize='md'
      // Card sizes, sm, md and lg for small, medium  and large
      btnOneText='View'
      // Enter text for action button one
      // or pass empty string to hide.
      btnTwoText='Purchase Now'
      // Enter text for action button two
      // or pass empty string to hide.
      btnOneHandler={(args, event, objectData) => {
        // 'objectData' returns object data from 'data' prop
        // any arguments passed will be before 'event'
        // and 'objectData'
      }}
      btnTwoHandler={(args, event, row) => {
        // 'objectData' returns object data from 'data' prop
        // any arguments passed will be before 'event'
        // and 'objectData'
      }}
      imageClickHandler={(args, event, row) => {
        // 'objectData' returns object data from 'data' prop
        // any arguments passed will be before 'event'
        // and 'objectData'
      }}

      // Pass a function which returns JSX to be rendered inside card
      // This function will have 'dataObj' containing JSON of
      // the item each card represents
    />
  );
};

export default ProductCard;
