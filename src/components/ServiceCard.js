import { CgArrowLongRight } from "react-icons/cg";
import { Link } from "react-router-dom";
import React from "react";

const ServiceCard = ({ icon, title, background, link }) => {
  return (
    <>
      <div className='col-xl-2 col-lg-2 col-md-4 col-sm-4'>
        <div className='features__item text-center'>
          <div
            className='features__thumb'
            style={{
              background: background,
              backgroundRepeat: "no-repeat",
              width: "100%",
              backgroundPosition: "center",
              backgroundSize: "cover",
            }}
          ></div>
          <div className='features__content'>
            <div className='features__icon'>
              <i> {icon} </i>
            </div>
            <h3> {title} </h3>
            <div className='features__btn'></div>
          </div>
        </div>
      </div>
    </>
  );
};

export default ServiceCard;
