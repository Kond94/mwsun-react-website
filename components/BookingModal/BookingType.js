import ArrowDropDownIcon from "@material-ui/icons/ArrowDropDown";
import { Box } from "@material-ui/core";
import Button from "@material-ui/core/Button";
import ButtonGroup from "@material-ui/core/ButtonGroup";
import ClickAwayListener from "@material-ui/core/ClickAwayListener";
import Grid from "@material-ui/core/Grid";
import Grow from "@material-ui/core/Grow";
import MenuItem from "@material-ui/core/MenuItem";
import MenuList from "@material-ui/core/MenuList";
import Paper from "@material-ui/core/Paper";
import Popper from "@material-ui/core/Popper";
import React from "react";
import { useLayoutEffect } from "react";

const options = ["Accommodation", "Package"];
function BookingType({ formData, setFormData, setNextForm, setPreviousForm }) {
  const boxStyle = {
    margin: "1rem auto",
    textAlign: "center",
    padding: "1rem 0",
    marginBottom: 120,
  };
  useLayoutEffect(() => {
    setNextForm("bookerDetails");
    setPreviousForm("bookingType");

    switch (formData.form) {
      case "Accommodation":
        setFormData({ ...formData, bookingType: "Accommodation" });

        break;
      case "Banqueting":
        setFormData({ ...formData, bookingType: "Banqueting" });

        break;
      case "Conferencing":
        setFormData({ ...formData, bookingType: "Accommodation" });

        break;
      case "Package":
        setFormData({ ...formData, bookingType: "Package" });

        break;
      default:
        break;
    }
  }, [formData.bookingType]);

  const [open, setOpen] = React.useState(false);
  const anchorRef = React.useRef(null);
  const [selectedIndex, setSelectedIndex] = React.useState(0);

  const handleClick = () => {
    setOpen((prevOpen) => !prevOpen);
  };

  const handleMenuItemClick = (event, index, option) => {
    setFormData({ ...formData, bookingType: option });
    setSelectedIndex(index);
    setOpen(false);
  };

  const handleToggle = () => {
    setOpen((prevOpen) => !prevOpen);
  };

  const handleClose = (event) => {
    if (anchorRef.current && anchorRef.current.contains(event.target)) {
      return;
    }

    setOpen(false);
  };

  return (
    <Box sx={boxStyle}>
      <p>What would you like to book?</p>

      <Grid container direction='column' alignItems='center'>
        <Grid item xs={12}>
          <ButtonGroup
            variant='contained'
            color='primary'
            ref={anchorRef}
            aria-label='split button'
            style={{ width: "100%" }}
          >
            <Button onClick={handleClick}>{options[selectedIndex]}</Button>
            <Button
              color='primary'
              size='small'
              aria-controls={open ? "split-button-menu" : undefined}
              aria-expanded={open ? "true" : undefined}
              aria-label='select merge strategy'
              aria-haspopup='menu'
              onClick={handleToggle}
            >
              <ArrowDropDownIcon />
            </Button>
          </ButtonGroup>
          <Popper
            open={open}
            anchorEl={anchorRef.current}
            role={undefined}
            transition
            disablePortal
            style={{ zIndex: 1 }}
          >
            {({ TransitionProps, placement }) => (
              <Grow
                {...TransitionProps}
                style={{
                  transformOrigin:
                    placement === "bottom" ? "center top" : "center bottom",
                }}
              >
                <Paper>
                  <ClickAwayListener onClickAway={handleClose}>
                    <MenuList id='split-button-menu'>
                      {options.map((option, index) => (
                        <MenuItem
                          key={option}
                          selected={option === formData.bookingType}
                          onClick={(event) =>
                            handleMenuItemClick(event, index, option)
                          }
                        >
                          {option}
                        </MenuItem>
                      ))}
                    </MenuList>
                  </ClickAwayListener>
                </Paper>
              </Grow>
            )}
          </Popper>
        </Grid>
      </Grid>
    </Box>
  );
}
export default BookingType;
