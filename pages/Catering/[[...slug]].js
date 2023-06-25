import React, { useState } from "react";
import { drinks, sides } from "../../hooks/data";

import Button from "/components/CustomButtons/Button.js";
import { Card } from "@material-ui/core";
import Extras from "../../components/Restaurant/Extras";
import Footer from "/components/Footer/Footer.js";
import GridContainer from "/components/Grid/GridContainer.js";
import GridItem from "/components/Grid/GridItem.js";
import HeadMeta from "../../components/HeadMeta/HeadMeta";
import Header from "/components/Header/Header.js";
import HeaderLinks from "/components/Header/HeaderLinks.js";
import Info from "@material-ui/icons/ArrowBackIos";
import Mains from "../../components/Restaurant/Mains";
import Parallax from "/components/Parallax/Parallax.js";
import { Provider } from "../../hooks/Context";
import RestaurantPage from "../../components/Catering/RestaurantPage";
import Total from "../../components/Restaurant/Total";
import classNames from "classnames";
import { fetchAPI } from "../../lib/api";
import { makeStyles } from "@material-ui/core/styles";
import { slugify } from "../../utils";
import styles from "/styles/jss/nextjs-material-kit/pages/profilePage.js";
import { useRouter } from "next/router";

const useFileStyles = makeStyles({
  root: {
    display: "flex",
  },
  details: {
    display: "flex",
    flexDirection: "column",
  },
  content: {
    flex: "1 0 auto",
  },
  cover: {
    width: 151,
  },
  controls: {
    display: "flex",
    alignItems: "center",
    // paddingLeft: theme.spacing(1),
    // paddingBottom: theme.spacing(1),
  },
  playIcon: {
    height: 38,
    width: 38,
  },
});
const useStyles = makeStyles(styles);

export default function Catering(props) {
  const router = useRouter();

  const classes = useStyles();
  const { meal, allMeals = [], slug, ...rest } = props;
  return (
    <Provider>
      <div>
        <HeadMeta
          metaTitle={"Delicious & Succulent Food | Aamari Restaurant - "}
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
          <div className={classes.container}>
            <GridContainer justify='center'>
              <GridItem xs={12} sm={12} md={6}>
                <div className={classes.profile} style={{ marginTop: 100 }}>
                  <div className={classes.name}>
                    <h3 className={classes.title}>
                      {slug === "Catering"
                        ? "Aamari Restaurant"
                        : "Room Service Menu"}
                    </h3>
                  </div>
                </div>
              </GridItem>
            </GridContainer>
            {slug === "Catering" ? (
              <>
                <div className={classes.description}>
                  <p>
                    Aamari is a cozy and elegant restaurant that offers
                    authentic Indian cuisine with a modern twist. Whether you
                    are looking for a spicy curry, a fragrant biryani, or a
                    succulent kebab, Aamari has something to satisfy your taste
                    buds. You can also enjoy a variety of vegetarian and vegan
                    dishes, as well as gluten-free and halal options. Aamari’s
                    chefs use fresh ingredients and traditional spices to create
                    dishes that are rich in flavor and aroma. Come and
                    experience the warmth and hospitality of Aamari today!
                  </p>
                  <Card
                    style={{ margin: 40, padding: 15, textAlign: "center" }}
                    className='centerContainer'
                  >
                    <p>Looking for room service?</p>
                    <div className='center-vertical'>
                      <Button
                        color='mwsun'
                        onClick={() =>
                          router.push("/Catering/Aamari-Order-Menu")
                        }
                      >
                        Place Order
                      </Button>
                    </div>
                  </Card>
                </div>

                <RestaurantPage meals={allMeals} />
              </>
            ) : (
              <div style={{ marginTop: 100 }}>
                <div className='menu' style={{ padding: 30, marginTop: -100 }}>
                  <span>
                    <Info
                      onClick={() => router.push("/Catering")}
                      fontSize='large'
                      className='slick-icons'
                    />
                  </span>
                  <br />
                  <Mains meals={allMeals} />
                  <aside className='aside'>
                    <br />

                    <Extras type='Sides' items={sides} />
                    <br />

                    <Extras type='Drinks' items={drinks} />
                    <br />
                  </aside>
                  <Total />
                </div>
              </div>
            )}
          </div>
        </div>
        <Footer />
      </div>
    </Provider>
  );
}

export async function getServerSideProps({ params }) {
  let mealsResult;

  try {
    mealsResult = await Promise.all([
      fetchAPI("/meals", { populate: ["deep"] }),
    ]);
  } catch (error) {
    console.log(error);
  }

  return {
    props: {
      meal: {
        ...mealsResult[0].data.find(
          (meal) => slugify(meal.name) == params.slug
        ),
      },
      allMeals: [...mealsResult[0].data],
      slug: params.slug ?? "Catering",
    },
  };
}
