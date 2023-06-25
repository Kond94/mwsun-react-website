import { Col, Container, Row } from "react-bootstrap";

import React from "react";
import RoomCard from "./RoomCard";
import { makeStyles } from "@material-ui/core/styles";
import styles from "/styles/jss/nextjs-material-kit/pages/componentsSections/basicsStyle.js";

const useStyles = makeStyles(styles);

const FavoriteRooms = ({ promotionRooms }) => {
  const classes = useStyles();

  return (
    <>
      <div className={classes.sections}>
        <div className={classes.container}>
          <div className={classes.title} style={{ textAlign: "center" }}>
            <h3>Featured Rooms</h3>
          </div>
          <Row
            style={{ height: "100%", textAlign: "center" }}
            className='justify-content-center'
          >
            {promotionRooms.map((promotionRoom) => (
              <Col key={promotionRoom.id.toString()} xl={3} lg={4} md={6}>
                <RoomCard room={promotionRoom.room} />
              </Col>
            ))}
          </Row>
        </div>
      </div>
    </>
  );
};

export default FavoriteRooms;
