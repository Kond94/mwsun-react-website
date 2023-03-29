import BookingModal from "../BookingModal";
import Button from "react-bootstrap/Button";
import { FaSearch } from "react-icons/fa";
import { NavLink } from "react-router-dom";
import Sidebar from "./Sidebar";
import useGlobalContext from "../../hooks/useGlobalContext";
import { useLocation } from "react-router-dom";

const AppHeader = () => {
  const { stickyMenu } = useGlobalContext();

  const { show } = useGlobalContext();
  const { handleClose } = useGlobalContext();
  const { handleShow } = useGlobalContext();

  const { form } = useGlobalContext();
  const { formState } = useGlobalContext();
  const { setForm } = useGlobalContext();
  const { setFormState } = useGlobalContext();
  const { showBookingModal } = useGlobalContext();
  const { handleCloseBookingModal } = useGlobalContext();
  const { handleShowBookingModal } = useGlobalContext();

  const { rooms } = useGlobalContext();
  const { conferenceRooms } = useGlobalContext();
  const { banquetRooms } = useGlobalContext();
  const location = useLocation();
  return (
    <>
      <header>
        <div className='header__area p-relative header__transparent'>
          <div
            id='header__sticky'
            className={
              location.pathname !== "/home"
                ? "sticky header__bottom"
                : stickyMenu
                ? "sticky header__bottom"
                : "header__bottom"
            }
          >
            <div className='container'>
              <div className='row align-items-center'>
                <div className='col-xl-3 col-lg-3 col-md-6 col-sm-6 col-6'>
                  <div className='logo'>
                    <NavLink to='/'>
                      <img
                        src='assets/img/logo/mwsun-logo-white.png'
                        alt='logo'
                        style={{ width: 100, margin: 20 }}
                      />
                    </NavLink>
                  </div>
                  <div className='logo-gradient'>
                    <NavLink to='/'>
                      <img
                        src='assets/img/logo/mwsun-logo.png'
                        alt='logo'
                        style={{ width: 100, margin: 20 }}
                      />
                    </NavLink>
                  </div>
                </div>
                <div className='col-xl-9 col-lg-9 col-md-6 col-sm-6 col-6'>
                  <div className='header__bottom-right d-flex justify-content-end align-items-center'>
                    <div className='main-menu menu_wrapper_one'>
                      <nav id='mobile-menu'>
                        <ul>
                          {location.pathname === "/home" ? (
                            <></>
                          ) : (
                            <li>
                              <NavLink to='/home'>Home</NavLink>
                            </li>
                          )}

                          <li>
                            <Button className='mb-5' variant='light'>
                              Acommodation
                            </Button>
                            <ul className='submenu'>
                              {rooms.map((room) => (
                                <li key={room.id.toString()}>
                                  <NavLink
                                    to='/accommodation'
                                    state={{ room: room }}
                                  >
                                    {room.name}
                                  </NavLink>
                                </li>
                              ))}
                            </ul>
                          </li>
                          {/* Conferencing */}

                          <li>
                            <Button className='mb-5' variant='light'>
                              Conferencing
                            </Button>
                            <ul className='submenu'>
                              {conferenceRooms.map((conferenceRoom) => (
                                <li key={conferenceRoom.id.toString()}>
                                  <NavLink
                                    to='/accommodation'
                                    state={{ room: conferenceRoom.name }}
                                  >
                                    {conferenceRoom.name}
                                  </NavLink>
                                </li>
                              ))}
                            </ul>
                          </li>
                          {/* Banqueting */}

                          <li>
                            <Button className='mb-5' variant='light'>
                              Banqueting
                            </Button>

                            <ul className='submenu'>
                              {banquetRooms.map((banquetRoom) => (
                                <li key={banquetRoom.id.toString()}>
                                  <NavLink
                                    to='/accommodation'
                                    state={{ room: banquetRoom.name }}
                                  >
                                    {banquetRoom.name}
                                  </NavLink>
                                </li>
                              ))}
                            </ul>
                          </li>

                          <li>
                            <Button className='mb-5' variant='light'>
                              Restaurant
                            </Button>
                          </li>

                          {/* <li>
                            <NavLink to='/about'>About Us</NavLink>

                            <ul className='submenu'>
                              <li>
                                <NavLink to='/contact'>Contact Us</NavLink>
                              </li>

                              <li>
                                <NavLink to='/team'>Management</NavLink>
                              </li>
                            </ul>
                          </li> */}
                        </ul>
                      </nav>
                    </div>
                    <div className='header__btn d-none d-sm-block d-lg-none d-xl-block ml-50'>
                      <Button
                        size='lg'
                        className='mb-10'
                        variant='primary'
                        onClick={() => {
                          setForm("0");
                          setFormState(null);
                          handleShowBookingModal();
                        }}
                      >
                        Book Now
                      </Button>
                    </div>
                    <div
                      onClick={handleShow}
                      className='sidebar__menu d-lg-none'
                    >
                      <div className='sidebar-toggle-btn' id='sidebar-toggle'>
                        <span className='line'></span>
                        <span className='line'></span>
                        <span className='line'></span>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
          <div className='header__search-wrapper'>
            <div className='container'>
              <div className='row'>
                <div className='col-xl-12'>
                  <form action='#'>
                    <input type='text' placeholder='Your Keywords' />
                    <button type='button'>
                      <i>
                        {" "}
                        <FaSearch />{" "}
                      </i>
                    </button>
                  </form>
                </div>
              </div>
            </div>
          </div>
          <div className='body-overlay-2'></div>
        </div>
      </header>

      <Sidebar show={show} handleClose={handleClose} />
      {/* Modal */}
      <BookingModal
        showBookingModal={showBookingModal}
        onHideBookingModal={() => handleCloseBookingModal()}
        form={form}
        formState={formState}
      />
    </>
  );
};

export default AppHeader;
