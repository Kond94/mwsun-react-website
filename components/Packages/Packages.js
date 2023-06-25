import { Col, Container, Row } from "react-bootstrap";

import PackageCard from "./PackageCard";
import React from "react";
import { makeStyles } from "@material-ui/core/styles";
import styles from "/styles/jss/nextjs-material-kit/pages/componentsSections/basicsStyle.js";
import useGlobalContext from "../../hooks/useGlobalContext";

const useStyles = makeStyles(styles);
const Packages = ({ packages }) => {
  const classes = useStyles();

  const { setShowBookingModal } = useGlobalContext();
  return (
    <div>
      <div className={classes.sections}>
        <div className={classes.container}>
          <div className={classes.title} style={{ textAlign: "center" }}>
            {/* <h3>We love Vacationers</h3> */}
            <h3>We have some awesome sight seeing packages</h3>
          </div>
          <div
            className='price__tab d-flex justify-content-center mb-50'
            style={{ marginTop: 80 }}
          >
            <div className='price__offer'>
              <span>Get 5% off if you book a package through the website</span>
              {/* <img src='assets/img/icon/price/line.png' alt='' /> */}
            </div>
          </div>
        </div>

        <div className='price__tab-content '>
          <div className='tab-content' id='price-tab-content'>
            <div
              className='tab-pane fade show active'
              id='yearly'
              role='tabpanel'
              aria-labelledby='yearly-tab'
            >
              <Row
                style={{ height: "100%", textAlign: "center" }}
                className='justify-content-center'
              >
                {packages.map((packagesItem) => (
                  <Col
                    key={packagesItem.id.toString()}
                    xl={3}
                    lg={5}
                    md={5}
                    sm={10}
                    xs={10}
                  >
                    <PackageCard
                      id={packagesItem.id}
                      title={packagesItem.name}
                      price={packagesItem.price}
                      activities={packagesItem.package_items.map(
                        (packageItem) => packageItem.name
                      )}
                      handleCloseBookingModal={() => setShowBookingModal(false)}
                      setShowBookingModal={setShowBookingModal}
                    />
                  </Col>
                ))}
              </Row>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Packages;
