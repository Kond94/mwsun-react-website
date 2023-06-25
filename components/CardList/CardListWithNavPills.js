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
      case "standard":
        return <AirlineSeatFlat />;
      case "executive":
        return <AirlineSeatFlatAngled />;
      case "suites":
        return <House />;
      case "other":
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
                  .filter(
                    (item) => item.name.toLowerCase().indexOf(itemType) !== -1
                  )
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
