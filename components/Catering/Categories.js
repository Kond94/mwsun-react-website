import GridContainer from "/components/Grid/GridContainer.js";
import GridItem from "/components/Grid/GridItem.js";
import React from "react";

const Categories = ({ categories, filterItems }) => {
  return (
    <div className='btn-container'>
      <GridContainer className='row' justifyContent='center'>
        {categories.map((category, index) => {
          return (
            <GridItem key={index} xs={12} sm={12} md={1}>
              <button
                type='button'
                className='filter-btn'
                key={index}
                onClick={() => filterItems(category)}
              >
                {category}
              </button>
            </GridItem>
          );
        })}
      </GridContainer>
    </div>
  );
};

export default Categories;
