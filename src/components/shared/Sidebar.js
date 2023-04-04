import { FaEnvelope, FaPhoneAlt, FaSearch } from "react-icons/fa";

import { BiMap } from "react-icons/bi";
import Collapsible from "react-collapsible";
import { NavLink } from "react-router-dom";
import { Offcanvas } from "react-bootstrap";
import React from "react";

const Sidebar = ({ show, handleClose }) => {
  return (
    <>
      <div>
        <Offcanvas
          show={show}
          onHide={handleClose}
          placement='end'
          className='side__bar'
        >
          <Offcanvas.Header closeButton>
            <div className='logo'>
              <a href='index.html'>
                <img
                  src='assets/img/logo/mwsun-logo-white.png'
                  style={{ width: 60 }}
                  alt='logo'
                />
              </a>
            </div>
          </Offcanvas.Header>

          <Offcanvas.Body>
            <section>
              <div className='p-0'>
                <div className='sidebar__tab'>
                  <ul className='nav nav-tabs' id='sidebar-tab' role='tablist'>
                    <li className='nav-item'>
                      <a
                        className='nav-link active'
                        id='menu-tab'
                        data-bs-toggle='tab'
                        href='#menu'
                        role='tab'
                        aria-controls='menu'
                        aria-selected='true'
                      >
                        menu
                      </a>
                    </li>
                    <li className='nav-item'>
                      <a
                        className='nav-link'
                        id='info-tab'
                        data-bs-toggle='tab'
                        href='#info'
                        role='tab'
                        aria-controls='info'
                        aria-selected='false'
                      >
                        info
                      </a>
                    </li>
                  </ul>
                </div>
                <div className='sidebar__content'>
                  <div className='tab-content' id='sidebar-tab-content'>
                    <div
                      className='tab-pane fade show active'
                      id='menu'
                      role='tabpanel'
                      aria-labelledby='menu-tab'
                    >
                      <div className='side_navBar'>
                        <div className='about iconAdd'>
                          <NavLink to='/'>Home </NavLink>
                        </div>
                        <Collapsible
                          trigger={
                            <NavLink to='/accommodation'>Accommodation</NavLink>
                          }
                          triggerTagName='div'
                          triggerOpenedClassName='icon_close'
                          triggerClassName='iconAdd'
                          open={false}
                        >
                          <ul className='sidebar_sub_menu text-white'>
                            <li className='pt-10'>
                              <NavLink
                                to='/accommodation'
                                state={{ category: "Single Rooms" }}
                              >
                                Single Rooms
                              </NavLink>
                            </li>
                            <li className='pt-10'>
                              <NavLink
                                to='/accommodation'
                                state={{ category: "Double Rooms" }}
                              >
                                Double Rooms
                              </NavLink>
                            </li>
                            <li className='pt-10'>
                              <NavLink
                                to='/accommodation'
                                state={{ category: "Family Units" }}
                              >
                                Family Units
                              </NavLink>
                            </li>
                            <li className='pt-10'>
                              <NavLink
                                to='/accommodation'
                                state={{ category: "Suites" }}
                              >
                                Suites
                              </NavLink>
                            </li>
                          </ul>
                        </Collapsible>

                        <div className='about iconAdd'>
                          <NavLink to='/conferencing'>Conferencing </NavLink>
                        </div>

                        <Collapsible
                          trigger={<NavLink to='/restaurant'>Catering</NavLink>}
                          triggerTagName='div'
                          triggerOpenedClassName='icon_close'
                          triggerClassName='iconAdd'
                          open={false}
                        >
                          <ul className='sidebar_sub_menu submenu text-white'>
                            <li>
                              <NavLink to='/restaurant'>
                                Aamari Restaurant
                              </NavLink>
                            </li>
                            <li>
                              <NavLink to='/external-catering'>
                                External Catering
                              </NavLink>
                            </li>
                          </ul>
                        </Collapsible>

                        <Collapsible
                          trigger={<NavLink to='/about'>About Us</NavLink>}
                          triggerTagName='div'
                          triggerOpenedClassName='icon_close'
                          triggerClassName='iconAdd'
                          open={false}
                        >
                          <ul className='sidebar_sub_menu submenu text-white text-capitalize'>
                            <li>
                              <NavLink to='/team'>Management</NavLink>
                            </li>
                            <li>
                              <NavLink to='/contact'>Contact Us</NavLink>
                            </li>
                          </ul>
                        </Collapsible>
                      </div>
                    </div>

                    <div
                      className='tab-pane fade'
                      id='info'
                      role='tabpanel'
                      aria-labelledby='info-tab'
                    >
                      <div className='sidebar__info'>
                        <p>
                          Welcome to Malawi Sun Hotel and Conference Centre. We
                          strive to treat our guests with impecable service.
                        </p>
                        <a href='contact.html' className='z-btn z-btn-white'>
                          contact us
                        </a>

                        <div className='sidebar__contact mt-30'>
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
                              <div className='icon'>
                                <i>
                                  {" "}
                                  <FaEnvelope />{" "}
                                </i>
                              </div>
                              <div className='text '>
                                <span>
                                  <a href='mailto:info@malawisunhotel.com'>
                                    info@malawisunhotel.com'
                                  </a>
                                </span>
                              </div>
                            </li>
                            <li>
                              <div className='icon'>
                                <i>
                                  <FaPhoneAlt />{" "}
                                </i>
                              </div>
                              <div className='text'>
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
            </section>
          </Offcanvas.Body>
        </Offcanvas>
      </div>
    </>
  );
};

export default Sidebar;
