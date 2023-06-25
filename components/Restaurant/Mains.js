import { Paper, makeStyles } from "@material-ui/core";
import React, { useState } from "react";

import Accordion from "@material-ui/core/Accordion";
import AccordionDetails from "@material-ui/core/AccordionDetails";
import AccordionSummary from "@material-ui/core/AccordionSummary";
import Backdrop from "@material-ui/core/Backdrop";
import ExpandMoreIcon from "@material-ui/icons/ExpandMore";
import Fade from "@material-ui/core/Fade";
import Image from "next/image";
import Input from "./Input";
import Modal from "@material-ui/core/Modal";

const useModalStyles = makeStyles((theme) => ({
  modal: {
    display: "flex",
    alignItems: "center",
    justifyContent: "center",
  },
  paper: {
    backgroundColor: theme.palette.background.paper,
    border: "2px solid #000",
    boxShadow: theme.shadows[5],
    padding: theme.spacing(2, 4, 3),
  },
}));
const useStyles = makeStyles((theme) => ({
  root: {
    width: "100%",
  },
  heading: {
    fontSize: theme.typography.pxToRem(15),
    fontWeight: theme.typography.fontWeightRegular,
  },
}));

export default function Mains({ meals }) {
  const [modalMeal, setModalMeal] = useState(null);
  const classes = useStyles();
  const modalClasses = useModalStyles();
  const [open, setOpen] = React.useState(false);
  const handleOpen = () => setOpen(true);
  const handleClose = () => setOpen(false);
  const allCategories = [...new Set(meals.map((item) => item.category))];

  return (
    <>
      <Modal
        aria-labelledby='transition-modal-title'
        aria-describedby='transition-modal-description'
        className={modalClasses.modal}
        open={open}
        onClose={handleClose}
        closeAfterTransition
        BackdropComponent={Backdrop}
        BackdropProps={{
          timeout: 500,
        }}
      >
        <Fade in={open}>
          <div className='centerContainer'>
            <div className='vertical-center'>
              <Paper style={{ flex: 1 }}>
                <div>
                  <h2 id='transition-modal-title'>
                    {modalMeal !== null ? modalMeal.name : ""}
                  </h2>
                  <Image
                    src={modalMeal !== null ? modalMeal.displayPhoto.url : ""}
                    width={800}
                    height={800}
                  />
                  <p id='transition-modal-description'>
                    {modalMeal !== null ? modalMeal.description : ""}
                  </p>
                </div>
              </Paper>
            </div>
          </div>
        </Fade>
      </Modal>

      <section className='mains'>
        <br />

        <h2 className='extras-heading' style={{}}>
          Mains
        </h2>
        {allCategories.map((category) => (
          <div key={category} className={classes.root}>
            <Accordion>
              <AccordionSummary
                expandIcon={<ExpandMoreIcon style={{ color: "#d1442e" }} />}
                aria-controls='panel1a-content'
                id={category}
                style={{ margin: 5 }}
              >
                <h4>{category}</h4>
              </AccordionSummary>
              {meals
                .filter((meal) => meal.category === category)
                .map((meal) => (
                  <AccordionDetails key={meal.name}>
                    <article className='menu-item' key={meal.name}>
                      <h5
                        onClick={() => {
                          setModalMeal(meal);
                          handleOpen();
                        }}
                        style={{ fontWeight: "bold", cursor: "pointer" }}
                        className='mains-name'
                      >
                        {meal.name}
                      </h5>
                      <Input type='mains' name={meal.name} index={meal.name} />
                      <strong className='mains-price'>
                        Mk {meal.price.toLocaleString("en-us")}
                      </strong>
                      {/* <p className='mains-description'>{meal.description}</p> */}
                    </article>
                  </AccordionDetails>
                ))}
            </Accordion>
          </div>
        ))}

        {/* {meals.map((meal, index) => (
        


       
      ))} */}
      </section>
    </>
  );
}
