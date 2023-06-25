import React from "react";
import SingleCount from "./SingleCount";
import styles from "/styles/jss/nextjs-material-kit/pages/componentsSections/basicsStyle.js";
import { makeStyles } from "@material-ui/core/styles";

const useStyles = makeStyles(styles);

const ClientCounter = () => {
  const classes = useStyles();

  return (
    <>
      <div className={classes.sections}>
        <div className={classes.container}>
          <div className={classes.title} style={{ textAlign: "center" }}>
            <h2 style={{ textAlign: "center" }}>
              We take pride in our numbers
            </h2>

            <div
              className='counter__inner white-bg wow fadeInUp'
              data-wow-delay='.2s'
            >
              <div className='row'>
                <SingleCount counter={115586} title='Happy Guests' />
                <SingleCount counter={129} title='Rooms' />
                <SingleCount counter={75} title='Employes' />
                <SingleCount counter={1} title='Proud Hotel' />
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default ClientCounter;
