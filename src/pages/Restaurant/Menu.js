import React from "react";

const Menu = ({ items }) => {
  return (
    <div className='section-center'>
      {items.map((menuItem) => {
        const { id, name, displayPhoto, price, description } = menuItem;

        return (
          <article key={id} className='menu-item'>
            <img src={displayPhoto} alt={name} className='photo' />
            <div className='item-info'>
              <header>
                <h4>{name}</h4>
                <h4 className='price'>Mk {price?.toLocaleString("en-US")}</h4>
              </header>
              <p className='item-text'>{description}</p>
            </div>
          </article>
        );
      })}
    </div>
  );
};

export default Menu;
