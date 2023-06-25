import CardListItem from "./CardListItem";
import React from "react";
import GridContainer from "/components/Grid/GridContainer.js";

const CardList = ({ items }) => {
  return (
    <GridContainer direction='row'>
      {items.map((room) => (
        <CardListItem key={room.id} item={room} />
      ))}
    </GridContainer>
  );
};

export default CardList;
