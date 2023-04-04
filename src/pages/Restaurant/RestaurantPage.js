import "./restuarant.css";

import React, { useState } from "react";

import AppHeader from "../../components/shared/AppHeader";
import Categories from "./Categories";
import Menu from "./Menu";
import PageHeader from "../../components/shared/PageHeader";
import PageHelmet from "../../components/shared/PageHelmet";
import { useLocation } from "react-router-dom";

const RestaurantPage = () => {
  const location = useLocation();

  const meals = location.state.meals;
  const allCategories = ["all", ...new Set(meals.map((item) => item.category))];

  const [menuItems, setMenuItems] = useState(meals);
  const [categories, setCategories] = useState(allCategories);

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
      <PageHelmet pageTitle='Catering' />

      <AppHeader />
      <PageHeader title='Catering' subtitle='Aamari Restaurant' />

      <main>
        <section className='menu section'>
          <div className='title'>
            <h2>our menu</h2>
            <div className='underline'></div>
          </div>
          <Categories categories={categories} filterItems={filterItems} />
          <Menu items={menuItems} />
        </section>
      </main>
    </>
  );
};

export default RestaurantPage;
