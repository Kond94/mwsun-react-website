import AppCarousel from "../../components/Carousel/AppCarousel";
import Button from "/components/CustomButtons/Button.js";
import CardList from "../../components/CardList/CardList";
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
import useIcons from "../../hooks/useIcons";

const useStyles = makeStyles(styles);

export default function Banqueting(props) {
  const classes = useStyles();

  const { room, allRooms = [], addons, slug, ...rest } = props;
  return (
    <div>
      <HeadMeta
        metaTitle={"Perfect for Receptions, Dinners & Special Events"}
      />

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
      <Parallax small filter image='/img/mwsun_header2.jpg' />
      <div className={classNames(classes.main, classes.mainRaised)}>
        <div>
          <div className={classes.container}>
            <GridContainer justify='center'>
              <GridItem xs={12} sm={12} md={6}>
                <div className={classes.profile} style={{ marginTop: 100 }}>
                  <div className={classes.name}>
                    <h3 className={classes.title}>
                      Banqueting
                      {slug === "Banqueting" ? "" : " | " + room.name}
                    </h3>
                  </div>
                </div>
              </GridItem>
            </GridContainer>
            <div className={classes.description}>
              <p>
                {slug === "Banqueting"
                  ? "If you are planning a special occasion, such as a wedding, anniversary or birthday, look no further than our hotel banquet rooms. Our banquet rooms are elegant, comfortable and affordable, with beautiful décor and lighting. You can also enjoy our delicious cuisine, customized menus and attentive service. Our staff will help you with every aspect of your event, from planning to execution. Whether you want a intimate gathering or a grand celebration, our hotel banquet rooms will make your occasion memorable. Call us today and book your banquet room!"
                  : room.description}
              </p>
            </div>
            {slug !== "Banqueting" ? (
              <GridContainer direction='column'>
                <GridItem>
                  <AppCarousel images={room.photos.map((photo) => photo)} />
                </GridItem>
                <GridItem>
                  <div className='centerContainer'>
                    <div className='vertical-center'>
                      <Button color='mwsun'>Book Room</Button>
                    </div>
                  </div>
                </GridItem>
                <br />
                <br />
                <GridItem>
                  <GridContainer
                    direction='column'
                    style={{ textAlign: "center" }}
                  >
                    {addons.map((addon) => {
                      const Icon = useIcons(addon.icon);
                      return (
                        <GridItem style={{ margin: 5 }} key={addon.id}>
                          {Icon && <Icon color='primary' />}
                          <p>{addon.name}</p>
                        </GridItem>
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
                  <CardList
                    items={allRooms.map((room) => {
                      return {
                        ...room,
                        title: room.name,
                        amenities: addons,
                      };
                    })}
                  />
                </GridItem>
              </GridContainer>
            )}
          </div>
        </div>
      </div>
      <Footer />
    </div>
  );
}

export async function getServerSideProps({ params }) {
  let roomsResult;
  let addonsResult;

  try {
    roomsResult = await Promise.all([
      fetchAPI("/banquet-rooms", { populate: ["deep"] }),
    ]);

    addonsResult = await Promise.all([
      fetchAPI("/banquet-addons", { populate: ["deep"] }),
    ]);
  } catch (error) {
    console.log(error);
  }

  return {
    props: {
      room: {
        ...roomsResult[0].data.find(
          (room) => slugify(room.name) == params.slug
        ),
      },
      addons: [...addonsResult[0].data],
      allRooms: [...roomsResult[0].data],
      slug: params.slug ?? "Banqueting",
    },
  };
}
