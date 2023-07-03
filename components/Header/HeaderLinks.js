// @material-ui/icons
import { Apps, CloudDownload } from "@material-ui/icons";

import BookingModal from "../BookingModal/BookingModal";
import Button from "/components/CustomButtons/Button.js";
import CustomDropdown from "/components/CustomDropdown/CustomDropdown.js";
import DeleteIcon from "@material-ui/icons/Delete";
import Icon from "@material-ui/core/Icon";
import IconButton from "@material-ui/core/IconButton";
import Link from "next/link";
import List from "@material-ui/core/List";
import ListItem from "@material-ui/core/ListItem";
/*eslint-disable*/
import React from "react";
import Tooltip from "@material-ui/core/Tooltip";
// @material-ui/core components
import { makeStyles } from "@material-ui/core/styles";
import { slugify } from "../../utils/";
import styles from "/styles/jss/nextjs-material-kit/components/headerLinksStyle.js";
// core components
import useGlobalContext from "../../hooks/useGlobalContext";
import { useRouter } from "next/router";

const useStyles = makeStyles(styles);

export default function HeaderLinks(props) {
  const { setForm } = useGlobalContext();
  const { setShowBookingModal } = useGlobalContext();
  const router = useRouter();

  const classes = useStyles();
  return (
    <div>
      <List className={classes.list}>
        {/* <ListItem className={classes.listItem}>
        <CustomDropdown
          noLiPadding
          navDropdown
          buttonText='Accommodation'
          buttonProps={{
            className: classes.navLink,
            color: "transparent",
          }}
          buttonIcon={Apps}
          dropdownList={
            rooms.length > 0
              ? rooms[0].data.map((room) => (
                  <Link href={"/accommodation/" + slugify(room.name)}>
                    <a className={classes.dropdownLink}>{room.name</a>
                  </Link>
                ))
              : [<></>]
          }
        />
      </ListItem> */}

        <ListItem className={classes.listItem}>
          <Button
            onClick={() => router.push("/Home")}
            color='transparent'
            target='_blank'
            className={classes.navLink}
            style={{ fontSize: 14 }}
          >
            Home
          </Button>
          <Button
            onClick={() => router.push("/Accommodation")}
            color='transparent'
            target='_blank'
            style={{ fontSize: 14 }}
            className={classes.navLink}
          >
            Accommodation
          </Button>
        </ListItem>
        <ListItem className={classes.listItem}>
          <Button
            onClick={() => router.push("/Conferencing")}
            style={{ fontSize: 14 }}
            color='transparent'
            target='_blank'
            className={classes.navLink}
          >
            Conferencing
          </Button>
        </ListItem>
        <ListItem className={classes.listItem}>
          <Button
            onClick={() => router.push("/Banqueting")}
            color='transparent'
            style={{ fontSize: 14 }}
            target='_blank'
            className={classes.navLink}
          >
            Banqueting
          </Button>
        </ListItem>
        <ListItem className={classes.listItem}>
          <Button
            onClick={() => router.push("/Catering")}
            style={{ fontSize: 14 }}
            color='transparent'
            target='_blank'
            className={classes.navLink}
          >
            Restaurant
          </Button>
        </ListItem>
        {/* <ListItem className={classes.listItem}>
          <Button
            onClick={() => router.push("/AboutUs")}
            color='transparent'
            target='_blank'
            className={classes.navLink}
          >
            About Us
          </Button>
        </ListItem> */}
        <ListItem className={classes.listItem}>
          <Button
            onClick={() => {
              setForm(null);
              setShowBookingModal(true);
            }}
            color='warning'
            style={{ fontSize: 14, color: "#fff" }}
            // className={classes.navLink}
          >
            BOOK NOW
          </Button>
        </ListItem>
        {/* <ListItem className={classes.listItem}>
   
        <Tooltip
          id='instagram-twitter'
          title='Follow us on twitter'
          placement={"top"}
          classes={{ tooltip: classes.tooltip }}
        >
          <Button
            href='https://twitter.com/MalawiSun'
            target='_blank'
            color='transparent'
            className={classes.navLink}
          >
            <i className={classes.socialIcons + " fab fa-twitter"} />
          </Button>
        </Tooltip>
      </ListItem>
      <ListItem className={classes.listItem}>
        <Tooltip
          id='instagram-facebook'
          title='Follow us on facebook'
          placement={"top"}
          classes={{ tooltip: classes.tooltip }}
        >
          <Button
            color='transparent'
            href='https://www.facebook.com/malawisunhotel'
            target='_blank'
            className={classes.navLink}
          >
            <i className={classes.socialIcons + " fab fa-facebook"} />
          </Button>
        </Tooltip>
      </ListItem>
      <ListItem className={classes.listItem}>
        <Tooltip
          id='instagram-tooltip'
          title='Follow us on instagram'
          placement={"top"}
          classes={{ tooltip: classes.tooltip }}
        >
          <Button
            //
            color='transparent'
            href='https://www.instagram.com/malawi_sun_hotel/'
            target='_blank'
            className={classes.navLink}
          >
            <i className={classes.socialIcons + " fab fa-instagram"} />
          </Button>
        </Tooltip>
      </ListItem>
      <ListItem className={classes.listItem}>
        c
      </ListItem> */}
      </List>
    </div>
  );
}
