import React, { useState } from "react";
import { Slide, makeStyles } from "@material-ui/core";

import Button from "/components/CustomButtons/Button.js";
import { Card } from "@material-ui/core";
import CloseIcon from "@material-ui/icons/Close";
import Dialog from "@material-ui/core/Dialog";
import Extras from "../../components/Restaurant/Extras";
import Footer from "/components/Footer/Footer.js";
import GridContainer from "/components/Grid/GridContainer.js";
import GridItem from "/components/Grid/GridItem.js";
import HeadMeta from "../../components/HeadMeta/HeadMeta";
import Header from "/components/Header/Header.js";
import HeaderLinks from "/components/Header/HeaderLinks.js";
import IconButton from "@material-ui/core/IconButton";
import Info from "@material-ui/icons/ArrowBackIos";
import Mains from "../../components/Restaurant/Mains";
import MuiDialogActions from "@material-ui/core/DialogActions";
import MuiDialogContent from "@material-ui/core/DialogContent";
import MuiDialogTitle from "@material-ui/core/DialogTitle";
import Parallax from "/components/Parallax/Parallax.js";
import { Provider } from "../../hooks/Context";
import RestaurantPage from "../../components/Catering/RestaurantPage";
import Total from "../../components/Restaurant/Total";
import Typography from "@material-ui/core/Typography";
import classNames from "classnames";
import drinks from "../../hooks/data";
import { fetchAPI } from "../../lib/api";
import sides from "../../hooks/data";
import { slugify } from "../../utils";
import styles from "/styles/jss/nextjs-material-kit/pages/profilePage.js";
import useGlobalContext from "../../hooks/useGlobalContext";
import { useRouter } from "next/router";
import { withStyles } from "@material-ui/core/styles";

const DialogTitle = withStyles(styles)((props) => {
  const { children, classes, onClose, ...other } = props;
  return (
    <MuiDialogTitle disableTypography className={classes.root} {...other}>
      <Typography variant='h6'>{children}</Typography>
      {onClose ? (
        <IconButton
          aria-label='close'
          className={classes.closeButton}
          onClick={onClose}
        >
          <CloseIcon />
        </IconButton>
      ) : null}
    </MuiDialogTitle>
  );
});

const DialogContent = withStyles((theme) => ({
  root: {
    padding: theme.spacing(2),
  },
}))(MuiDialogContent);

const DialogActions = withStyles((theme) => ({
  root: {
    margin: 0,
    padding: theme.spacing(1),
  },
}))(MuiDialogActions);

const Transition = React.forwardRef(function Transition(props, ref) {
  return <Slide direction='up' ref={ref} {...props} />;
});

const useStyles = makeStyles(styles);

export default function Catering(props) {
  const router = useRouter();
  const { setShowRestaurantModal, showRestaurantModal } = useGlobalContext();

  const classes = useStyles();
  const { meal, allMeals = [], slug, ...rest } = props;

  return (
    <Provider>
      <Dialog
        fullScreen
        open={showRestaurantModal}
        onClose={() => setShowRestaurantModal(false)}
        TransitionComponent={Transition}
        transitionDuration={500}
      >
        <DialogTitle
          id='customized-dialog-title'
          onClose={() => setShowRestaurantModal(false)}
        >
          Order Menu
        </DialogTitle>
        <DialogContent>
          <div style={{ marginTop: 100 }}>
            <div className='menu' style={{ padding: 30, marginTop: -100 }}>
              <span>
                <Info
                  onClick={() => setShowRestaurantModal(false)}
                  fontSize='large'
                  className='slick-icons'
                />
              </span>
              <br />
              <Mains type='Mains' meals={allMeals} />
              <aside className='aside'>
                <br />

                {/* <Extras type='Sides' items={sides} /> */}
                <br />

                {/* <Extras type='Drinks' items={drinks} /> */}
                <br />
              </aside>
              <Total />
            </div>
          </div>
        </DialogContent>
        {/* </Paper> */}
      </Dialog>
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
            <GridContainer justifyContent='center'>
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
                        color='rose'
                        onClick={() => setShowRestaurantModal(true)}
                      >
                        Place Order
                      </Button>
                    </div>
                  </Card>
                </div>

                <RestaurantPage meals={allMeals} />
              </>
            ) : (
              <></>
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
