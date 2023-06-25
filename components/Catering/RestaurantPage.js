import React, { useState } from "react";

import Button from "../CustomButtons/Button";
import Categories from "./Categories";
import Menu from "./Menu";

const RestaurantPage = ({ meals }) => {
  const allCategories = ["all", ...new Set(meals.map((item) => item.category))];

  const [menuItems, setMenuItems] = useState(meals);
  const [categories] = useState(allCategories);

  const filterItems = (category) => {
    if (category === "all") {
      setMenuItems(meals);
      return;
    }
    const newItems = meals.filter((item) => item.category === category);
    setMenuItems(newItems);
  };
  return (
    <>
      <div className='title'>
        <h2>OUR MENU</h2>

        <div className='underline'></div>
      </div>
      <Categories categories={categories} filterItems={filterItems} />

      <Menu items={menuItems} />
    </>
  );
};

export default RestaurantPage;
