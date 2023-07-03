import {
  AirlineSeatFlat,
  AirlineSeatFlatAngled,
  House,
  MoreHoriz,
} from "@material-ui/icons";

import CardListItem from "../../components/CardList/CardListItem";
import GridContainer from "/components/Grid/GridContainer.js";
import NavPills from "/components/NavPills/NavPills.js";
import { Paper } from "@material-ui/core";
import React from "react";

const CardListWithNavPills = ({ itemTypes, items }) => {
  const renderIcon = (itemType) => {
    switch (itemType) {
      case "Standard":
        return <AirlineSeatFlat />;
      case "Executive":
        return <AirlineSeatFlatAngled />;
      case "Suites":
        return <House />;
      case "Deluxe":
        return <MoreHoriz />;
      default:
        return <AirlineSeatFlat />;
    }
  };
  return (
    <NavPills
      alignCenter
      color='primary'
      tabs={[
        ...itemTypes.map((itemType) => {
          return {
            tabButton: itemType,
            tabIcon: () => renderIcon(itemType),
            tabContent: (
              <GridContainer direction='row'>
                {items
                  .filter((item) => item.type === itemType)
                  .map((item) => (
                    <CardListItem item={item} />
                  ))}
              </GridContainer>
            ),
          };
        }),
      ]}
    />
  );
};

export default CardListWithNavPills;
