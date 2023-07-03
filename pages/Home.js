import ClientCounter from "../components/ClientCounter/ClientCounter";
import ContactCard from "../components/ContactCard/ContactCard";
import FavoriteRooms from "../components/FavoriteRooms/FavoriteRooms";
import { FiPlay } from "react-icons/fi";
import Footer from "/components/Footer/Footer.js";
import HeadMeta from "../components/HeadMeta/HeadMeta";
// @material-ui/icons
// core components
import Header from "/components/Header/Header.js";
import HeaderLinks from "/components/Header/HeaderLinks.js";
import NextImage from "next/image";
// react components for routing our app without refresh
import Packages from "../components/Packages/Packages";
import Parallax from "/components/Parallax/Parallax.js";
import React from "react";
import Skeleton from "react-loading-skeleton";
import VideoPopup from "../components/VideoPopup/VideoPopup";
// nodejs library that concatenates classes
import classNames from "classnames";
// @material-ui/core components
import { makeStyles } from "@material-ui/core/styles";
import styles from "/styles/jss/nextjs-material-kit/pages/components.js";
import useGlobalContext from "../hooks/useGlobalContext";

const useStyles = makeStyles(styles);

export default function Home(props) {
  const { promotionRooms, packages, setIsVideoOpen, isFetching } =
    useGlobalContext();

  const classes = useStyles();
  const { ...rest } = props;

  return (
    <div>
      <HeadMeta metaTitle={"Blantyre's Best & Most Popular Hotel"} />
      <Header
        brand='Malawi Sun Hotel'
        rightLinks={<HeaderLinks />}
        fixed
        color='transparent'
        changeColorOnScroll={{
          height: 50,
          color: "white",
        }}
        {...rest}
      />
      <Parallax filter image='/img/mwsun_header2.jpg'>
        <VideoPopup videoId='UofeKQJEt1E' />

        <div className={classes.container}>
          <div className='slider__shape'>
            <NextImage
              width={800}
              height={800}
              className='shape triangle'
              src='/assets/img/icon/slider/triangle.png'
              alt='triangle'
            />
            <NextImage
              width={800}
              height={800}
              className='shape dotted-square'
              src='/assets/img/icon/slider/dotted-square.png'
              alt='dotted-square'
            />
            <NextImage
              width={800}
              height={800}
              className='shape solid-square'
              src='/assets/img/icon/slider/solid-square.png'
              alt='solid-square'
            />
            <NextImage
              width={800}
              height={800}
              className='shape circle'
              src='/assets/img/icon/slider/circle.png'
              alt='circle'
            />
          </div>
          <div className='container h1_slider_wrapper'>
            <div className='row'>
              <div className='col-xl-9 col-lg-9 col-md-10 col-sm-9'>
                <div className='slider__content'>
                  <span
                    style={{
                      color: "##f0f0f0",
                      marginTop: "40%",
                    }}
                  >
                    Welcome to...
                  </span>
                  <h1
                    style={{
                      width: 800,
                    }}
                  >
                    Malawi Sun Hotel
                  </h1>
                  <div className='slider__btn'>
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
        </div>
      </Parallax>
      {/* <LandingSlider /> */}

      <div className={classNames(classes.main, classes.mainRaised)}>
        <FavoriteRooms promotionRooms={promotionRooms} />
        <Packages packages={packages} />
        <ClientCounter />
        <ContactCard />
      </div>
      <Footer />
    </div>
  );
}
