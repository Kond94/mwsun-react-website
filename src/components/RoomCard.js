import { FaFacebookF, FaTwitter, FaVimeoV } from "react-icons/fa";

import { Link } from "react-router-dom";
import React from "react";

const RoomCard = ({ room }) => {
  return (
    <>
      <div className='col-xl-3 col-lg-4 col-md-6'>
        <div className='room__item p-relative text-center fix mb-30'>
          <div className='room__thumb mb-25'>
            <img src={room.displayPhoto} alt='team' style={{ width: "100%" }} />
            <div className='room__info text-start pt-10 pb-20'>
              <h3>
                <Link to='/accommodation' state={{ room: room }}>
                  {room.name}
                </Link>
              </h3>
              <span className='mr-20'>{room.description}</span>
            </div>
          </div>
          <div className='room__content pt-10 pb-30'>
            <h3>
              <Link to='/accommodation' state={{ room: room }}>
                {room.name}
              </Link>
            </h3>
          </div>
        </div>
      </div>
    </>
  );
};

export default RoomCard;
