import { Col, Row } from "react-bootstrap";

import React from "react";
import RoomCard from "./RoomCard";
import Skeleton from "react-loading-skeleton";
import { makeStyles } from "@material-ui/core/styles";
import styles from "/styles/jss/nextjs-material-kit/pages/componentsSections/basicsStyle.js";
import useGlobalContext from "../../hooks/useGlobalContext";

const useStyles = makeStyles(styles);

const FavoriteRooms = ({ promotionRooms }) => {
  const classes = useStyles();
  const { isFetching } = useGlobalContext();
  return (
    <>
      <div className={classes.sections}>
        <div className={classes.container}>
          <div className={classes.title} style={{ textAlign: "center" }}>
            <h3>Featured Rooms</h3>
          </div>
          {isFetching ? (
            <Row
              style={{ height: "100%", textAlign: "center" }}
              className='justify-content-center'
            >
              <Col xl={3} lg={3} md={4}>
                <Skeleton width={200} height={250} />
              </Col>
              <Col xl={3} lg={3} md={4}>
                <Skeleton width={200} height={250} />
              </Col>
              <Col xl={3} lg={3} md={4}>
                <Skeleton width={200} height={250} />
              </Col>
              <Col xl={3} lg={3} md={4}>
                <Skeleton width={200} height={250} />
              </Col>
            </Row>
          ) : (
            <Row
              style={{ height: "100%", textAlign: "center" }}
              className='justify-content-center'
            >
              {promotionRooms.map((promotionRoom) => (
                <React.Fragment key={promotionRoom.id.toString()}>
                  {isFetching && (
                    <Col xl={3} lg={4} md={6}>
                      <p>gfgh</p>
                      <Skeleton circle />
                      <Skeleton count={5} />
                    </Col>
                  )}
                  <Col xl={3} lg={4} md={6}>
                    <RoomCard room={promotionRoom.room} />
                  </Col>
                </React.Fragment>
              ))}
            </Row>
          )}
        </div>
      </div>
    </>
  );
};

export default FavoriteRooms;
