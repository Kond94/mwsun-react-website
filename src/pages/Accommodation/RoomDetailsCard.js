import { FaEnvelope, FaPhoneAlt } from "react-icons/fa";

import { BiMap } from "react-icons/bi";
import { Link } from "react-router-dom";
import React from "react";
import Slider from "react-slick";

const RoomDetailsCard = () => {
  const settings = {
    dots: true,
    fade: true,
    infinite: true,
    autoplaySpeed: 5000,
    slidesToShow: 1,
    slidesToScroll: 1,
    autoplay: true,
  };
  return (
    <>
      <section className='room__details pt-120 pb-160'>
        <div className='container'>
          <div className='room__details-inner p-relative white-bg'>
            <div className='room__details-shape p-absolute'>
              <img src='assets/img/icon/team/shape-1.png' alt='' />
            </div>
            <div className='row'>
              <div className='col-xl-6 col-lg-6'>
                <div className='room__details-img w-img mr-70'>
                  <Slider {...settings}>
                    <div>
                      <img src='assets/img/room/room-1.jpg' alt='' />
                      <h5 className='ml-20 mt-10 center'>Image description</h5>
                    </div>
                    <div>
                      <img src='assets/img/room/room-2.jpg' alt='' />
                      <h5 className='ml-20 mt-10 center'>Image description</h5>
                    </div>
                  </Slider>
                  {/*  */}
                </div>
              </div>
              <div className='col-xl-6 col-lg-6'>
                <div className='room__details-content pt-80'>
                  <span>Single</span>
                  <h3>Single Deluxe</h3>
                  <p>Description of the room</p>
                  <div className='room__details-contact mb-45'>
                    <ul
                      className='list-group list-group-horizontal-sm'
                      style={{ flexWrap: "wrap" }}
                    >
                      <li className='mr-20 mt-10'>
                        <div className='icon theme-color '>
                          <i>
                            {" "}
                            <FaEnvelope />{" "}
                          </i>
                        </div>
                        <div className='text theme-color '>
                          <span>Amenity 1</span>
                        </div>
                      </li>
                      <li className='mr-20 mt-10'>
                        <div className='icon theme-color'>
                          <i>
                            <FaPhoneAlt />{" "}
                          </i>
                        </div>
                        <div className='text theme-color'>
                          <span>Amenity 2</span>
                        </div>
                      </li>
                      <li className='mr-20 mt-10'>
                        <div className='icon'>
                          <i>
                            {" "}
                            <BiMap />{" "}
                          </i>
                        </div>
                        <div className='text'>
                          <span>Amenity 3</span>
                        </div>
                      </li>
                      <li className='mr-20 mt-10'>
                        <div className='icon'>
                          <i>
                            {" "}
                            <BiMap />{" "}
                          </i>
                        </div>
                        <div className='text'>
                          <span>Amenity 4</span>
                        </div>
                      </li>
                      <li className='mr-20 mt-10'>
                        <div className='icon'>
                          <i>
                            {" "}
                            <BiMap />{" "}
                          </i>
                        </div>
                        <div className='text'>
                          <span>Amenity 5</span>
                        </div>
                      </li>
                      <li className='mr-20 mt-10'>
                        <div className='icon'>
                          <i>
                            {" "}
                            <BiMap />{" "}
                          </i>
                        </div>
                        <div className='text'>
                          <span>Amenity 6</span>
                        </div>
                      </li>
                    </ul>
                    <div
                      style={{
                        marginTop: 20,
                      }}
                    >
                      <Link to='/contact' className='z-btn btn-warning'>
                        Book Now
                      </Link>
                    </div>
                  </div>
                  <div
                    className='room__details-social theme-social'
                    style={{ marginBottom: 10 }}
                  ></div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  );
};

export default RoomDetailsCard;
