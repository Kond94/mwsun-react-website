import GridContainer from "/components/Grid/GridContainer.js";
import GridItem from "/components/Grid/GridItem.js";
import Image from "next/image";
import React from "react";

const Menu = ({ items }) => {
  return (
    // <div className='section-center'>
    <GridContainer className='row' justify='center'>
      {items.map((menuItem) => {
        const { id, name, displayPhoto, price, description } = menuItem;

        return (
          <GridItem key={id} xs={12} sm={12} md={6}>
            <article style={{ margin: 20 }}>
              <GridContainer className='row' justify='center'>
                <GridItem key={id} xs={12} sm={12} md={6}>
                  <img
                    src={displayPhoto.url}
                    alt={name}
                    className='photo'
                    style={{ borderRadius: 15, boxShadow: "0 0 1rem" }}
                  />
                </GridItem>
                <GridItem key={id} xs={12} sm={12} md={6}>
                  <h4>{name}</h4>
                  <h4 className='price'>Mk {price?.toLocaleString("en-US")}</h4>
                  <p className='item-text'>{description}</p>
                </GridItem>
              </GridContainer>
              <div className='item-info'>
                <header></header>
              </div>
            </article>
          </GridItem>
        );
      })}
    </GridContainer>
    // </div>
  );
};

export default Menu;
