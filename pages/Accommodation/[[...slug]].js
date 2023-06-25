import AppCarousel from "../../components/Carousel/AppCarousel";
import Button from "/components/CustomButtons/Button.js";
import CardListWithNavPills from "../../components/CardList/CardListWithNavPills";
import Footer from "/components/Footer/Footer.js";
import GridContainer from "/components/Grid/GridContainer.js";
import GridItem from "/components/Grid/GridItem.js";
import HeadMeta from "../../components/HeadMeta/HeadMeta";
import Header from "/components/Header/Header.js";
import HeaderLinks from "/components/Header/HeaderLinks.js";
import Parallax from "/components/Parallax/Parallax.js";
import React from "react";
import classNames from "classnames";
import { fetchAPI } from "../../lib/api";
import { makeStyles } from "@material-ui/core/styles";
import { slugify } from "../../utils";
import styles from "/styles/jss/nextjs-material-kit/pages/profilePage.js";
import useGlobalContext from "../../hooks/useGlobalContext";
import useIcons from "../../hooks/useIcons";

const useStyles = makeStyles(styles);

export default function Accommodation(props) {
  const classes = useStyles();
  const { setForm, setShowBookingModal, formState, setFormState } =
    useGlobalContext();

  const { room, allRooms = [], slug, ...rest } = props;
  const roomTypes = ["standard", "executive", "suites", "other"];
  return (
    <div>
      <HeadMeta metaTitle={"Comfortable & Affordable Accommodation"} />

      <Header
        color='transparent'
        brand='NextJS Material Kit'
        rightLinks={<HeaderLinks />}
        fixed
        changeColorOnScroll={{
          height: 200,
          color: "white",
        }}
        {...rest}
      />
      <Parallax small filter image='/img/mwsun_header.jpg' />
      <div className={classNames(classes.main, classes.mainRaised)}>
        <div className={classes.container}>
          <GridContainer justify='center'>
            <GridItem xs={12} sm={12} md={6}>
              <div className={classes.profile} style={{ marginTop: 100 }}>
                <div className={classes.name}>
                  <h3 className={classes.title}>
                    Accommodation
                    {slug === "Accommodation" ? "" : " | " + room.title}
                  </h3>
                </div>
              </div>
            </GridItem>
          </GridContainer>
          <div className={classes.description}>
            <p>
              {slug === "Accommodation"
                ? `Every room in Malawi Sun Hotel has its own unique character and allure. 
                   Find yourself in a modern space all while feeling that familiar sense of home.`
                : room.description}
            </p>
          </div>
          {slug !== "Accommodation" ? (
            <GridContainer direction='column'>
              <GridItem>
                <AppCarousel images={room.photos.map((photo) => photo)} />
              </GridItem>
              <GridItem>
                <div className='centerContainer'>
                  <div className='vertical-center'>
                    <Button
                      onClick={() => {
                        setForm("Accommodation");
                        setFormState({ ...formState, room: room.id });
                        setShowBookingModal(true);
                      }}
                      color='mwsun'
                    >
                      Book Room
                    </Button>
                  </div>
                </div>
              </GridItem>
              <br />
              <br />
              <GridItem>
                <GridContainer direction='row'>
                  {room.amenities.map((amenity) => {
                    const Icon = useIcons(amenity.icon);
                    return (
                      <div style={{ margin: 5 }} key={amenity.id}>
                        {Icon && <Icon color='primary' />}
                        <p>{amenity.name}</p>
                      </div>
                    );
                  })}
                </GridContainer>
              </GridItem>
            </GridContainer>
          ) : (
            <GridContainer justify='center'>
              <GridItem
                xs={12}
                sm={12}
                md={12}
                lg={12}
                className={classes.navWrapper}
              >
                <p>Select room type</p>
                <CardListWithNavPills
                  itemTypes={roomTypes}
                  items={allRooms.map((room) => {
                    return { ...room, name: room.title };
                  })}
                />
              </GridItem>
            </GridContainer>
          )}
        </div>
      </div>
      <Footer />
    </div>
  );
}

export async function getServerSideProps({ params }) {
  let roomsResult;

  try {
    roomsResult = await Promise.all([
      fetchAPI("/rooms", { populate: ["deep"] }),
    ]);
  } catch (error) {
    console.log(error);
  }

  return {
    props: {
      room: {
        ...roomsResult[0].data.find(
          (room) => slugify(room.title) == params.slug
        ),
      },
      allRooms: [...roomsResult[0].data],
      slug: params.slug ?? "Accommodation",
    },
  };
}
