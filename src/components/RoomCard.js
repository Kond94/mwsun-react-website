import { FaFacebookF, FaTwitter, FaVimeoV } from "react-icons/fa";

import { Link } from "react-router-dom";
import React from "react";

const RoomCard = ({ image, name, title }) => {
  return (
    <>
      <div className='col-xl-3 col-lg-4 col-md-6'>
        <div className='room__item p-relative text-center fix mb-30'>
          <div className='room__thumb mb-25'>
            <img src={image} alt='team' style={{ width: "100%" }} />
            <div className='room__info text-start'>
              <h3>
                <Link to='/roomDetails'>{name}</Link>
              </h3>
              <span>{title}</span>
            </div>
          </div>
          <div className='room__content'>
            <h3>
              <Link to='/teamDetails'>{name}</Link>
            </h3>
            <span>{title}</span>
          </div>
        </div>
      </div>
    </>
  );
};

export default RoomCard;
