import React from "react";

const BrandItem = ({ img }) => {
  return (
    <>
      <div className='brand__item-wrapper'>
        <div className='brand__item'>
          <img style={{ width: 100, height: 100 }} src={img} alt='' />
        </div>
      </div>
    </>
  );
};

export default BrandItem;
