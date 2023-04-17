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

function ConferencingPage() {
  const location = useLocation();
  const conferenceRoom = location.state.conferenceRoom;

  const { setForm } = useGlobalContext();
  const { setFormState } = useGlobalContext();
  const { handleShowBookingModal } = useGlobalContext();
  const { conferenceAddOns } = useGlobalContext();
  const [thumbsSwiper, setThumbsSwiper] = useState(null);

  return (
    <>
      <PageHelmet pageTitle='Conferencing' />
      <AppHeader />
      <PageHeader title='Conferencing' subtitle={conferenceRoom.name} />
      <div>
        <section className='section-content padding-y bg'>
          <div className='container'>
            <article className='card pb-30'>
              <div className='card-body'>
                <div className='row'>
                  <aside className='col-md-8'>
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
                      {conferenceRoom.photos.map((photo) => (
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
                      {conferenceRoom.photos.map((photo) => (
                        <SwiperSlide key={photo} style={{ margin: 10 }}>
                          <img src={photo} alt='' />
                        </SwiperSlide>
                      ))}
                    </Swiper>
                  </aside>
                  <main className='col-md-4'>
                    <article>
                      <h3 className='title'>The {conferenceRoom.name}</h3>

                      <hr />

                      <div className='mb-3'>
                        <h6>Short description</h6>
                        <ul className='list-dots mb-0'>
                          <li>Capacity: {conferenceRoom.capacity}</li>
                          <li>{conferenceRoom.description}</li>
                        </ul>
                      </div>

                      <div className='mb-3'>
                        <var className='price h4'>
                          Mk {conferenceRoom.price.toLocaleString("en-US")}
                        </var>{" "}
                        <br />
                      </div>

                      <div className='mb-4'>
                        <Button
                          variant='warning'
                          onClick={() => {
                            setForm("2");
                            setFormState({
                              conferenceRoom: conferenceRoom.id.toString(),
                            });
                            handleShowBookingModal();
                          }}
                          style={{ color: "#fff" }}
                        >
                          Book Conference
                        </Button>
                      </div>
                      <h6>Available Add Ons:</h6>
                      <ul className='list-check'>
                        {conferenceAddOns.map((addon) => (
                          <li key={addon.name}>
                            {addon.name} @ Mk
                            {addon.price.toLocaleString("en-Us")}
                          </li>
                        ))}
                      </ul>
                    </article>
                  </main>
                </div>
              </div>
            </article>

            {/* <article className='card mt-5'>
              <div className='card-body'>
                <div className='row'></div>
                <hr />
              </div>
            </article> */}
          </div>
        </section>
      </div>
      <Footer />
    </>
  );
}

export default ConferencingPage;
