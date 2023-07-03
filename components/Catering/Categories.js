import React, { useState } from "react";

import { Button } from "@material-ui/core";
import GridContainer from "/components/Grid/GridContainer.js";
import GridItem from "/components/Grid/GridItem.js";

const Categories = ({ categories, filterItems }) => {
  const [activeCategory, setActiveCategory] = useState("Starters");
  return (
    <div className='btn-container'>
      <GridContainer className='row' justifyContent='center'>
        {categories.map((category, index) => {
          return (
            <GridItem
              style={{
                borderBottom:
                  activeCategory === category ? "1px solid #d1442e" : "",
                textAlign: "center",
              }}
              key={index}
              xs={12}
              sm={12}
              md={2}
            >
              <Button
                key={index}
                onClick={() => {
                  filterItems(category);
                  setActiveCategory(category);
                }}
              >
                <p
                  style={{
                    color: activeCategory === category ? "#d1442e" : "",
                    textAlign: "center",
                  }}
                >
                  {category}
                </p>
              </Button>
            </GridItem>
          );
        })}
      </GridContainer>
    </div>
  );
};

export default Categories;
