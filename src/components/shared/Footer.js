import {
  FaEnvelope,
  FaFacebookF,
  FaInstagram,
  FaPhoneAlt,
  FaTwitter,
  FaVimeoV,
} from "react-icons/fa";

import { BiMap } from "react-icons/bi";
import React from "react";

const Footer = () => {
  return (
    <>
      <footer>
        <div className='footer__area grey-bg pt-20'>
          <div className='footer__top'>
            <div className='container'>
              <div className='row'>
                <div className='col-xl-2 col-lg-2 col-md-4 col-sm-6'>
                  <div className='footer__widget mb-45'>
                    {/* <div className='footer__widget-title'>
                      <h4>Links</h4>
                    </div>
                    <div className='footer__widget-content'>
                      <div className='footer__links'>
                        <ul>
                          <li>
                            <a href='w'>Home</a>
                          </li>
                          <li>
                            <a href='w'>Accomodation</a>
                          </li>
                          <li>
                            <a href='w'>Conferencing</a>
                          </li>
                          <li>
                            <a href='w'>Banqueting</a>
                          </li>
                          <li>
                            <a href='w'>Restaurant</a>
                          </li>
                          <li>
                            <a href='w'>About Us</a>
                          </li>
                        </ul>
                      </div>
                    </div> */}
                  </div>
                </div>
                <div className='col-xl-2 offset-xl-1 col-lg-2 offset-lg-1 col-md-4 col-sm-6'>
                  <div
                    className='footer__widget mb-45 wow fadeInUp'
                    data-wow-delay='.4s'
                  ></div>
                </div>
                <div className='col-xl-2 offset-xl-1 col-lg-2 offset-lg-1 col-md-4 col-sm-6'>
                  <div className='footer__widget mb-45'></div>
                </div>
                <div className='col-xl-3 offset-xl-1 col-lg-3 offset-lg-1 col-md-4 col-sm-6'>
                  <div className='footer__widget mb-45'>
                    <div className='footer__widget-title'>
                      <h4>Information</h4>
                    </div>
                    <div className='footer__widget-content'>
                      <div className='footer__info'>
                        <ul>
                          <li>
                            <div className='icon'>
                              <i>
                                {" "}
                                <BiMap />{" "}
                              </i>
                            </div>
                            <div className='text'>
                              <span>5 Robins Road, Blantyre, Malawi</span>
                            </div>
                          </li>
                          <li>
                            <div className='icon theme-color '>
                              <i>
                                {" "}
                                <FaEnvelope />{" "}
                              </i>
                            </div>
                            <div className='text theme-color '>
                              <span>
                                <a href='mailto:info@malawisunhotel.com'>
                                  info@malawisunhotel.com
                                </a>
                              </span>
                            </div>
                          </li>
                          <li>
                            <div className='icon theme-color'>
                              <i>
                                <FaPhoneAlt />{" "}
                              </i>
                            </div>
                            <div className='text theme-color'>
                              <span>
                                <a href='tel:(+265)-01-830-069'>
                                  (+265) 01-830-069
                                </a>
                              </span>
                            </div>
                          </li>
                        </ul>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
          <div className='footer__copyright'>
            <div className='container'>
              <div className='row align-items-center'>
                <div className='col-xl-8 col-lg-8 col-md-8'>
                  <div className='footer__copyright-text'>
                    <p>
                      Copyright ©{new Date().getFullYear()} Malawi Sun Hotel.
                      Created by:{" "}
                      <a href='kond94.github.io'> Kondwerani Kamsesa</a>
                    </p>
                  </div>
                </div>
                <div className='col-xl-4 col-lg-4 col-md-4'>
                  <div className='footer__social theme-social f-right'>
                    <ul>
                      <li>
                        <a href='https://www.facebook.com/malawi.sun/'>
                          <i>
                            <FaFacebookF />
                          </i>
                          <i>
                            <FaFacebookF />
                          </i>
                        </a>
                      </li>
                      <li>
                        <a href='https://twitter.com/MalawiSun'>
                          <i>
                            <FaTwitter />{" "}
                          </i>
                          <i>
                            <FaTwitter />{" "}
                          </i>
                        </a>
                      </li>
                      <li>
                        <a href='https://www.instagram.com/malawi_sun_hotel/'>
                          <i>
                            <FaInstagram />{" "}
                          </i>
                          <i>
                            <FaInstagram />{" "}
                          </i>
                        </a>
                      </li>
                    </ul>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </footer>
    </>
  );
};

export default Footer;
