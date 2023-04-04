import { FaEnvelope, FaPhoneAlt, FaSearch } from "react-icons/fa";

import { BiMap } from "react-icons/bi";
import Collapsible from "react-collapsible";
import { NavLink } from "react-router-dom";
import { Offcanvas } from "react-bootstrap";
import React from "react";
import useGlobalContext from "../../hooks/useGlobalContext";

const Sidebar = ({ show, handleClose }) => {
  const { rooms } = useGlobalContext();
  const { conferenceRooms } = useGlobalContext();
  const { banquetRooms } = useGlobalContext();
  const { meals } = useGlobalContext();

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
                            <p style={{ color: "#fff" }}>Accommodation</p>
                          }
                          triggerTagName='div'
                          triggerOpenedClassName='icon_close'
                          triggerClassName='iconAdd'
                          open={false}
                        >
                          <ul className='sidebar_sub_menu text-white'>
                            {rooms.map((room) => (
                              <li key={room.id.toString()} className='pt-10'>
                                <NavLink
                                  to='/accommodation'
                                  state={{ room: room }}
                                >
                                  {room.name}
                                </NavLink>
                              </li>
                            ))}
                          </ul>
                        </Collapsible>

                        <Collapsible
                          trigger={
                            <p style={{ color: "#fff" }}>Conferencing</p>
                          }
                          triggerTagName='div'
                          triggerOpenedClassName='icon_close'
                          triggerClassName='iconAdd'
                          open={false}
                        >
                          <ul className='sidebar_sub_menu text-white'>
                            {conferenceRooms.map((conferenceRoom) => (
                              <li
                                key={conferenceRoom.id.toString()}
                                className='pt-10'
                              >
                                <NavLink
                                  to='/conferencing'
                                  state={{ conferenceRoom: conferenceRoom }}
                                >
                                  {conferenceRoom.name}
                                </NavLink>
                              </li>
                            ))}
                          </ul>
                        </Collapsible>

                        <Collapsible
                          trigger={<p style={{ color: "#fff" }}>Banqueting</p>}
                          triggerTagName='div'
                          triggerOpenedClassName='icon_close'
                          triggerClassName='iconAdd'
                          open={false}
                        >
                          <ul className='sidebar_sub_menu text-white'>
                            {banquetRooms.map((banquetRoom) => (
                              <li
                                key={banquetRoom.id.toString()}
                                className='pt-10'
                              >
                                <NavLink
                                  to='/banqueting'
                                  state={{ banquetRoom: banquetRoom }}
                                >
                                  {banquetRoom.name}
                                </NavLink>
                              </li>
                            ))}
                          </ul>
                        </Collapsible>

                        <Collapsible
                          trigger={<p style={{ color: "#fff" }}>Catering</p>}
                          triggerTagName='div'
                          triggerOpenedClassName='icon_close'
                          triggerClassName='iconAdd'
                          open={false}
                        >
                          <ul className='sidebar_sub_menu text-white'>
                            <li className='pt-10'>
                              <NavLink
                                to='/restaurant'
                                state={{ meals: meals }}
                              >
                                Aamari Restaurant
                              </NavLink>
                            </li>
                          </ul>
                        </Collapsible>

                        <Collapsible
                          trigger={<p style={{ color: "#fff" }}>About Us</p>}
                          triggerTagName='div'
                          triggerOpenedClassName='icon_close'
                          triggerClassName='iconAdd'
                          open={false}
                        >
                          <ul className='sidebar_sub_menu text-white'>
                            <li className='pt-10'>
                              <NavLink to='/about'>About Us</NavLink>
                            </li>
                            <li className='pt-10'>
                              <NavLink to='/contact'>Contact Us</NavLink>
                            </li>
                            <li className='pt-10'>
                              <NavLink to='/team'>Management</NavLink>
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
                        <NavLink className='z-btn z-btn-white' to='/contact'>
                          Contact Us
                        </NavLink>

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
