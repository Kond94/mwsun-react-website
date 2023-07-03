import { Button } from "react-bootstrap";
import GridContainer from "/components/Grid/GridContainer.js";
import GridItem from "/components/Grid/GridItem.js";
import { GridList } from "@material-ui/core";
import React from "react";
import useGlobalContext from "../../hooks/useGlobalContext";

const PackageCard = ({ id, name, price, active, activities }) => {
  const { setForm, setShowBookingModal, formState, setFormState } =
    useGlobalContext();

  return (
    <>
      <div>
        <div
          className={`price__item ${
            active && active
          } p-relative transition-3 text-center fix mb-30`}
        >
          <div className='price__inner p-relative'>
            <p>{name}</p>
            <div className='price__tag mb-45'>
              <div className='row'>
                <h1>{`$${price}`}</h1>
              </div>
              <span>Per Person</span>
            </div>
            <div className='price__features text-start mb-55'>
              <GridContainer direction='column' style={{ textAlign: "center" }}>
                {activities.map((activity) => (
                  <GridItem style={{ margin: 10 }} key={activity}>
                    <span>{activity}</span>
                  </GridItem>
                ))}
              </GridContainer>
            </div>
            <Button
              variant='warning'
              onClick={() => {
                setForm("Package");
                setFormState({ ...formState, room: id });
                setShowBookingModal(true);
              }}
            >
              Book
            </Button>
          </div>
        </div>
      </div>
    </>
  );
};

export default PackageCard;
