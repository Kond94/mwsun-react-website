import { Button } from "react-bootstrap";
import React from "react";
import useGlobalContext from "../../hooks/useGlobalContext";

const PackageCard = ({ id, title, price, active, activities }) => {
  const { setForm, setShowBookingModal, formState, setFormState } =
    useGlobalContext();

  return (
    <>
      <div>
        <div
          className={`price__item ${
            active && active
          } p-relative transition-3 text-center fix mb-30`}
        >
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
            <Button
              variant='warning'
              onClick={() => {
                setForm("Package");
                setFormState({ ...formState, room: id });
                setShowBookingModal(true);
              }}
            >
              Book
            </Button>
          </div>
        </div>
      </div>
    </>
  );
};

export default PackageCard;
