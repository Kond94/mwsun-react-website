import Button from "react-bootstrap/Button";
import React from "react";

const PackageCard = ({
  title,
  price,
  active,
  activities,
  handleCloseBookingModal,
  handleShowBookingModal,
}) => {
  return (
    <>
      <div className='col-xl-4 col-lg-4 col-md-6'>
        <div
          className={`price__item ${
            active && active
          } p-relative transition-3 text-center fix mb-30`}
        >
          <div className='price__shape transition-3 p-absolute'>
            <img src='assets/img/icon/price/triangle.png' alt='' />
          </div>
          <div className='price__inner p-relative'>
            <p>{title}</p>
            <div className='price__tag mb-45'>
              <div className='row'>
                <h1>{`$${price}`}</h1>
              </div>
              <span>Per Person</span>
            </div>
            <div className='price__features text-start mb-55'>
              <ul>
                {activities.map((activity) => (
                  <li key={activity}>
                    <span>{activity}</span>
                  </li>
                ))}
              </ul>
            </div>
            <Button variant='light' onClick={handleShowBookingModal}>
              Book
            </Button>
          </div>
        </div>
      </div>
    </>
  );
};

export default PackageCard;
