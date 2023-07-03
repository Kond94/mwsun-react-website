import Card from "/components/Card/Card.js";
// react component for creating beautiful carousel
import Carousel from "react-slick";
// core components
import GridContainer from "/components/Grid/GridContainer.js";
import GridItem from "/components/Grid/GridItem.js";
// @material-ui/icons
import Info from "@material-ui/icons/Info";
import NextImage from "next/image";
import React from "react";
// @material-ui/core components
import { makeStyles } from "@material-ui/core/styles";
import styles from "/styles/jss/nextjs-material-kit/pages/componentsSections/carouselStyle.js";

const useStyles = makeStyles(styles);

export default function AppCarousel({ images }) {
  const classes = useStyles();
  const settings = {
    dots: true,
    infinite: false,
    speed: 500,
    slidesToShow: 1,
    slidesToScroll: 1,
    autoplay: false,
  };
  return (
    <div className={classes.section}>
      <div className={classes.container}>
        <GridContainer>
          <GridItem xs={12} sm={12} md={8} className={classes.marginAuto}>
            <Card carousel>
              <Carousel {...settings}>
                {images.map((image) => (
                  <div key={image.url}>
                    <NextImage
                      src={image.url}
                      alt='First slide'
                      className='slick-image'
                      width={"100%"}
                      height={"70%"}
                      layout='responsive'
                    />
                    {/* <div className='slick-caption'>
                      <h4>
                        <Info className='slick-icons' />
                        {image.caption}
                      </h4>
                    </div> */}
                  </div>
                ))}
              </Carousel>
            </Card>
          </GridItem>
        </GridContainer>
      </div>
    </div>
  );
}
