import "./Pages.css";
import "swiper/css";
import "swiper/css/free-mode";
import "swiper/css/navigation";
import "swiper/css/thumbs";

import { FreeMode, Navigation, Thumbs } from "swiper";
import { Swiper, SwiperSlide } from "swiper/react";

import AppHeader from "../components/shared/AppHeader";
import Button from "react-bootstrap/Button";
import Footer from "../components/shared/Footer";
import PageHeader from "../components/shared/PageHeader";
import PageHelmet from "../components/shared/PageHelmet";
import useGlobalContext from "../hooks/useGlobalContext";
import { useLocation } from "react-router-dom";
import { useState } from "react";

function AccommodationPage() {
  const location = useLocation();
  const room = location.state.room;

  const { setForm } = useGlobalContext();
  const { setFormState } = useGlobalContext();
  const { handleShowBookingModal } = useGlobalContext();
  const [thumbsSwiper, setThumbsSwiper] = useState(null);
  return (
    <>
      <PageHelmet pageTitle='Accommodation' />
      <AppHeader />
      <PageHeader title='Accommodation' subtitle={room.name} />
      <div>
        <section className='section-content padding-y bg'>
          <div className='container'>
            <article className='card pb-30'>
              <div className='card-body'>
                <div className='row'>
                  <aside className='col-md-8' style={{ height: 500 }}>
                    <Swiper
                      style={{
                        "--swiper-navigation-color": "#ffca2c",
                        "--swiper-pagination-color": "#ffca2c",
                      }}
                      spaceBetween={10}
                      navigation={true}
                      thumbs={{ swiper: thumbsSwiper }}
                      modules={[FreeMode, Navigation, Thumbs]}
                      className='mySwiper2'
                    >
                      {room.photos.map((photo) => (
                        <SwiperSlide>
                          <img key={photo} src={photo} alt='' />
                        </SwiperSlide>
                      ))}
                    </Swiper>
                    <Swiper
                      onSwiper={setThumbsSwiper}
                      spaceBetween={10}
                      slidesPerView={4}
                      freeMode={true}
                      watchSlidesProgress={true}
                      modules={[FreeMode, Navigation, Thumbs]}
                      className='mySwiper mt-20'
                    >
                      {room.photos.map((photo) => (
                        <SwiperSlide key={photo} style={{ margin: 10 }}>
                          <img src={photo} alt='' />
                        </SwiperSlide>
                      ))}
                    </Swiper>
                  </aside>
                  <main className='col-md-4'>
                    <article>
                      <h3 className='title'>The {room.name}</h3>
                      <div></div>

                      <hr />

                      <div className='mb-3'>
                        <h6>Short description</h6>
                        <ul className='list-dots mb-0'>
                          <li> {room.description}</li>
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
                          variant='warning'
                          onClick={() => {
                            setForm("1");
                            setFormState({ room: room.id.toString() });
                            handleShowBookingModal();
                          }}
                          style={{ color: "#fff" }}
                        >
                          Reserve Room
                        </Button>
                      </div>
                    </article>
                  </main>
                </div>
              </div>
            </article>

            <article className='card mt-5'>
              <div className='card-body'>
                <div className='row'>
                  <div>
                    <h5>Amenities</h5>
                    <ul className='list-check'>
                      {room.amenities.map((amenity) => (
                        <li key={amenity.name}>{amenity.name}</li>
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
