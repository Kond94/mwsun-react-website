import "./Pages.css";
import "swiper/css";
import "swiper/css/free-mode";
import "swiper/css/navigation";
import "swiper/css/thumbs";
import ListGroup from "react-bootstrap/ListGroup";
import Badge from "react-bootstrap/Badge";
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
import DynamicIcon from "../components/shared/DynamicIcon";

function BanquetingPage() {
  const location = useLocation();
  const banquetRoom = location.state.banquetRoom;
  const { setForm } = useGlobalContext();
  const { setFormState } = useGlobalContext();
  const { handleShowBookingModal } = useGlobalContext();
  const { banquetAddOns } = useGlobalContext();

  const [thumbsSwiper, setThumbsSwiper] = useState(null);

  return (
    <>
      <PageHelmet pageTitle='Banqueting' />
      <AppHeader />
      <PageHeader title='Banqueting' subtitle={banquetRoom.name} />
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
                      {banquetRoom.photos.map((photo) => (
                        <SwiperSlide key={photo}>
                          <img src={photo} alt='' />
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
                      {banquetRoom.photos.map((photo) => (
                        <SwiperSlide key={photo} style={{ margin: 10 }}>
                          <img src={photo} alt='' />
                        </SwiperSlide>
                      ))}
                    </Swiper>
                  </aside>
                  <main className='col-md-4'>
                    <article>
                      <h3 className='title'>The {banquetRoom.name}</h3>

                      <hr />

                      <div className='mb-3'>
                        <h6>Short description</h6>
                        <ul className='list-dots mb-0'>
                          <li>Capacity: {banquetRoom.capacity}</li>
                          <li>{banquetRoom.description}</li>
                        </ul>
                      </div>

                      <div className='mb-3'>
                        <var className='price h4'>
                          Mk {banquetRoom.price.toLocaleString("en-US")}
                        </var>{" "}
                        <br />
                      </div>

                      <div className='mb-4'>
                        <Button
                          variant='warning'
                          onClick={() => {
                            setForm("3");
                            setFormState({
                              banquetRoom: banquetRoom.id.toString(),
                            });
                            handleShowBookingModal();
                          }}
                          style={{ color: "#fff" }}
                        >
                          Book Banquet
                        </Button>
                      </div>
                      <h6>Available Add Ons:</h6>
                      <ListGroup horizontal>
                        {banquetAddOns.map((addon) => (
                          <ListGroup.Item key={addon.name}>
                            <DynamicIcon nameIcon={addon.icon} />
                            <Badge bg='primary' pill className='mr-5'>
                              14
                            </Badge>
                            {addon.name} @ Mk
                            {addon.price.toLocaleString("en-Us")}
                          </ListGroup.Item>
                        ))}
                      </ListGroup>
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

export default BanquetingPage;
