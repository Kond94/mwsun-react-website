import "./App.css";

import AppHeader from "../components/shared/AppHeader";
import Button from "react-bootstrap/Button";
import Footer from "../components/shared/Footer";
import useGlobalContext from "../hooks/useGlobalContext";
import { useLocation } from "react-router-dom";
import { useState } from "react";

function AccommodationPage() {
  const location = useLocation();
  const room = location.state.room;
  const [currentPhoto, setCurrentPhoto] = useState(room?.displayPhoto);

  const { setForm } = useGlobalContext();
  const { setFormState } = useGlobalContext();
  const { handleShowBookingModal } = useGlobalContext();
  return (
    <>
      <AppHeader />
      <div>
        <section className='section-content padding-y bg mt-160'>
          <div className='container'>
            <article className='card'>
              <div className='card-body'>
                <div className='row'>
                  <aside className='col-md-8'>
                    <article className='gallery-wrap'>
                      <div className='card img-big-wrap'>
                        <img src={currentPhoto} alt='' />
                      </div>
                    </article>
                  </aside>
                  <main className='col-md-4'>
                    <article>
                      <h3 className='title'>The {room.name}</h3>
                      <div>
                        <ul className='rating-stars'>
                          <li className='stars-active'>
                            <i className='fa fa-star'></i>{" "}
                            <i className='fa fa-star'></i>
                            <i className='fa fa-star'></i>
                          </li>
                          <li>
                            <i className='fa fa-star'></i>{" "}
                            <i className='fa fa-star'></i>
                            <i className='fa fa-star'></i>{" "}
                            <i className='fa fa-star'></i>
                            <i className='fa fa-star'></i>
                          </li>
                        </ul>
                        <span className='label-rating mr-3 text-muted'>
                          7/10
                        </span>
                      </div>

                      <hr />

                      <div className='mb-3'>
                        <h6>Short description</h6>
                        <ul className='list-dots mb-0'>
                          <li>{room.description}</li>
                        </ul>
                      </div>

                      <div className='mb-3'>
                        <var className='price h4'>
                          Mk {room.price.toLocaleString("en-US")}
                        </var>{" "}
                        <br />
                      </div>

                      <div className='mb-4'>
                        <Button
                          variant='light'
                          onClick={() => {
                            setForm("1");
                            setFormState({ room: room.id.toString() });
                            handleShowBookingModal();
                          }}
                        >
                          Book Now
                        </Button>
                      </div>
                      <article className='gallery-wrap'>
                        <div className='thumbs-wrap'>
                          {room.photos.map((photo) => (
                            <img
                              src={photo}
                              alt=''
                              className='item-thumb'
                              onClick={(photo) => setCurrentPhoto(photo)}
                            />
                          ))}
                        </div>
                      </article>
                    </article>
                  </main>
                </div>
              </div>
            </article>

            <article className='card mt-5'>
              <div className='card-body'>
                <div className='row'>
                  {/* <aside className='col-md-6'>
                    <h5>Amenities</h5>
                    <dl className='row'>
                      <dt className='col-sm-3'>Amenity Name</dt>
                      <dd className='col-sm-9'>Amenity Icon</dd>
                    </dl>
                  </aside> */}
                  <div>
                    <h5>Amenities</h5>
                    <ul className='list-check'>
                      {room.amenities.map((amenity) => (
                        <>
                          <li>{amenity.name}</li>
                          {/* <dt className='col-sm-3'>{amenity.name}</dt> */}
                          {/* <dd className='col-sm-9'>{amenity.icon}</dd> */}
                        </>
                      ))}
                    </ul>
                  </div>
                </div>
                <hr />
              </div>
            </article>
          </div>
        </section>
      </div>
      <Footer />
    </>
  );
}

export default AccommodationPage;