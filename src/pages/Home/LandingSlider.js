import Button from "react-bootstrap/Button";
import { FiPlay } from "react-icons/fi";
import React from "react";
import Slider from "react-slick";
import VideoPopup from "../../components/VideoPopup";
import useGlobalContext from "../../hooks/useGlobalContext";

const LandingSlider = () => {
  const { setForm } = useGlobalContext();
  const { setFormState } = useGlobalContext();
  const { handleShowBookingModal } = useGlobalContext();

  const { setIsVideoOpen } = useGlobalContext();
  // slider data
  const homeSliderData = [
    {
      id: 1,
      bgImg: "home_slider_1",
    },
    {
      id: 2,
      bgImg: "home_slider_2",
    },
  ];
  // slick setting
  const settings = {
    autoplay: true,
    autoplaySpeed: 5000,
    speed: 5000,
    infinite: true,
    dots: false,
    fade: true,
    arrows: false,
    slidesToShow: 1,
    slidesToScroll: 1,
  };

  return (
    <>
      <VideoPopup videoId='UofeKQJEt1E' />

      <section className='slider__area'>
        <Slider className='slider-active' {...settings}>
          {homeSliderData.map((slider, index) => {
            return (
              <div
                key={index}
                className={`single-slider slider__height d-flex align-items-center ${slider.bgImg}`}
              >
                <div className='slider__shape'>
                  <img
                    className='shape triangle'
                    src='assets/img/icon/slider/triangle.png'
                    alt='triangle'
                  />
                  <img
                    className='shape dotted-square'
                    src='assets/img/icon/slider/dotted-square.png'
                    alt='dotted-square'
                  />
                  <img
                    className='shape solid-square'
                    src='assets/img/icon/slider/solid-square.png'
                    alt='solid-square'
                  />
                  <img
                    className='shape circle'
                    src='assets/img/icon/slider/circle.png'
                    alt='circle'
                  />
                </div>
                <div className='container h1_slider_wrapper'>
                  <div className='row'>
                    <div className='col-xl-9 col-lg-9 col-md-10 col-sm-10'>
                      <div className='slider__content'>
                        <span>Welcome to...</span>
                        <h1>Malawi Sun Hotel</h1>
                        <div className='slider__btn'>
                          <Button
                            variant='light'
                            onClick={() => {
                              setForm("0");
                              setFormState(null);
                              handleShowBookingModal();
                            }}
                          >
                            Book Now
                          </Button>
                        </div>
                      </div>
                    </div>
                    <div className='col-xl-3 col-lg-3 col-md-2 col-sm-2'>
                      <div className='slider__play'>
                        <button
                          onClick={() => setIsVideoOpen(true)}
                          className='slider__play-btn'
                        >
                          <i>
                            <FiPlay />{" "}
                          </i>
                        </button>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            );
          })}
        </Slider>
      </section>
    </>
  );
};

export default LandingSlider;
