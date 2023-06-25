import AppBar from "@material-ui/core/AppBar";
import BookingModal from "../BookingModal/BookingModal";
import Button from "@material-ui/core/Button";
import Drawer from "@material-ui/core/Drawer";
import Hidden from "@material-ui/core/Hidden";
import IconButton from "@material-ui/core/IconButton";
import Image from "next/image";
import Link from "next/link";
// @material-ui/icons
import Menu from "@material-ui/icons/Menu";
// nodejs library to set properties for components
import PropTypes from "prop-types";
import React from "react";
import Toolbar from "@material-ui/core/Toolbar";
// nodejs library that concatenates classes
import classNames from "classnames";
// @material-ui/core components
import { makeStyles } from "@material-ui/core/styles";
// core components
import styles from "/styles/jss/nextjs-material-kit/components/headerStyle.js";
import useGlobalContext from "../../hooks/useGlobalContext";
import { useRouter } from "next/router";

const useStyles = makeStyles(styles);

export default function Header(props) {
  const router = useRouter();
  const { form } = useGlobalContext();
  const { formState } = useGlobalContext();
  const classes = useStyles();
  const [mobileOpen, setMobileOpen] = React.useState(false);
  const [imgSrc, setImgSrc] = React.useState("mwsun_logo_white.png");
  React.useEffect(() => {
    if (props.changeColorOnScroll) {
      window.addEventListener("scroll", headerColorChange);
    }
    return function cleanup() {
      if (props.changeColorOnScroll) {
        window.removeEventListener("scroll", headerColorChange);
      }
    };
  });
  const handleDrawerToggle = () => {
    setMobileOpen(!mobileOpen);
  };
  const headerColorChange = () => {
    const { color, changeColorOnScroll } = props;
    const windowsScrollTop = window.pageYOffset;
    if (windowsScrollTop > changeColorOnScroll.height) {
      setImgSrc("mwsun-logo.png");
      document.body
        .getElementsByTagName("header")[0]
        .classList.remove(classes[color]);
      document.body
        .getElementsByTagName("header")[0]
        .classList.add(classes[changeColorOnScroll.color]);
    } else {
      setImgSrc("mwsun_logo_white.png");

      document.body
        .getElementsByTagName("header")[0]
        .classList.add(classes[color]);
      document.body
        .getElementsByTagName("header")[0]
        .classList.remove(classes[changeColorOnScroll.color]);
    }
  };
  const { color, rightLinks, leftLinks, brand, fixed, absolute } = props;
  const appBarClasses = classNames({
    [classes.appBar]: true,
    [classes[color]]: color,
    [classes.absolute]: absolute,
    [classes.fixed]: fixed,
  });
  const brandComponent = (
    <Button onClick={() => router.push("/Home")}>
      <img
        src={"/img/logo/" + imgSrc}
        alt='...'
        className={classes.imgRoundedCircle + " " + classes.imgFluid}
        style={{ width: 75, height: 75 }}
      />
    </Button>
  );
  return (
    <div>
      <BookingModal form={form} formState={formState} />
      <AppBar className={appBarClasses}>
        <Toolbar className={classes.container}>
          {leftLinks !== undefined ? brandComponent : null}
          <div className={classes.flex}>
            {leftLinks !== undefined ? (
              <Hidden smDown implementation='css'>
                {leftLinks}
              </Hidden>
            ) : (
              brandComponent
            )}
          </div>
          <Hidden smDown implementation='css'>
            {rightLinks}
          </Hidden>
          <Hidden mdUp>
            <IconButton
              color='inherit'
              aria-label='open drawer'
              onClick={handleDrawerToggle}
            >
              <Menu />
            </IconButton>
          </Hidden>
        </Toolbar>
        <Hidden mdUp implementation='js'>
          <Drawer
            variant='temporary'
            anchor={"right"}
            open={mobileOpen}
            classes={{
              paper: classes.drawerPaper,
            }}
            onClose={handleDrawerToggle}
          >
            <div className={classes.appResponsive}>
              {leftLinks}
              {rightLinks}
            </div>
          </Drawer>
        </Hidden>
      </AppBar>
    </div>
  );
}

Header.defaultProp = {
  color: "white",
};

Header.propTypes = {
  color: PropTypes.oneOf([
    "primary",
    "info",
    "success",
    "warning",
    "danger",
    "transparent",
    "white",
    "rose",
    "dark",
  ]),
  rightLinks: PropTypes.node,
  leftLinks: PropTypes.node,
  brand: PropTypes.string,
  fixed: PropTypes.bool,
  absolute: PropTypes.bool,
  // this will cause the sidebar to change the color from
  // props.color (see above) to changeColorOnScroll.color
  // when the window.pageYOffset is heigher or equal to
  // changeColorOnScroll.height and then when it is smaller than
  // changeColorOnScroll.height change it back to
  // props.color (see above)
  changeColorOnScroll: PropTypes.shape({
    height: PropTypes.number.isRequired,
    color: PropTypes.oneOf([
      "primary",
      "info",
      "success",
      "warning",
      "danger",
      "transparent",
      "white",
      "rose",
      "dark",
    ]).isRequired,
  }),
};
