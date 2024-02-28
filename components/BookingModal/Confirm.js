import { Col, Row } from "react-bootstrap";

import useGlobalContext from "../../hooks/useGlobalContext";
import { useLayoutEffect } from "react";

function Detail({ title, data }) {
  return (
    <Row style={{ textAlign: "left", margin: 10 }}>
      <Col weight={300}>{title}:</Col>
      <Col style={{ textAlign: "left", flexWrap: "wrap" }}>{data}</Col>
    </Row>
  );
}

function Confirm({ formData, setPreviousForm, setNextForm, setFormData }) {
  const { rooms, conferenceRooms, banquetRooms, packages } = useGlobalContext();
  useLayoutEffect(() => {
    setNextForm("confirm");

    switch (formData.bookingType) {
      case "Accommodation":
        setPreviousForm("Accommodation");
        setFormData({
          ...formData,
          amount: Math.round(
            Math.abs(
              (formData.arrivalDate - formData.departureDate) / 86400000
            ) * rooms.find((room) => room.id == formData.room).price
          ),
        });
        break;
      case "Conferencing":
        setPreviousForm("Conferencing");

        break;
      case "Banqueting":
        setPreviousForm("Banqueting");

        break;
      default:
        break;
    }
  }, [formData.form]);

  const boxStyle = {
    margin: "1rem auto",
    textAlign: "center",
    padding: "1rem 0",
  };
  const times = [
    { id: 1, name: "Morning" },
    { id: 2, name: "Afternoon" },
    { id: 3, name: "All Day" },
  ];
  return (
    <div className='contact__modal'>
      <h3 style={{ margin: 40 }}>Review Your {formData.bookingType} Booking</h3>

      <Detail title='Name' data={formData.name} />
      <Detail title='Email' data={formData.email} />
      <Detail title='Phone' data={formData.phone} />
      {formData.bookingType === "Accommodation" ? (
        <>
          <Detail
            title='Room'
            data={
              formData.room !== null
                ? rooms.find((room) => room.id == formData.room).name
                : ""
            }
          />
          <Detail title='Arrival' data={formData.arrivalDate.toDateString()} />
          <Detail
            title='Departure'
            data={formData.departureDate.toDateString()}
          />
          <Detail title='Adults' data={formData.adults} />
          <Detail title='Children' data={formData.children} />
          <Detail
            title='Nights'
            data={Math.round(
              Math.abs(
                (formData.arrivalDate - formData.departureDate) / 86400000
              )
            )}
          />
          <Detail
            title='Total Amount'
            data={
              "Mk " +
              Math.round(
                Math.abs(
                  (formData.arrivalDate - formData.departureDate) / 86400000
                ) * rooms.find((room) => room.id == formData.room).price
              )
                .toString()
                .replace(/\B(?=(\d{3})+(?!\d))/g, ",")
            }
          />

          {/* <Detail
            title='Total Price'
            data={
              formData.room !== null
                ? rooms.find((room) => room.id == formData.room).name
                : ""
            }
          /> */}
        </>
      ) : (
        <></>
      )}

      {formData.bookingType === "Conferencing" ? (
        <>
          <Detail
            title='Commencement Date'
            data={formData.commencementDate.toDateString()}
          />
          <Detail
            title='Commencement Time'
            data={
              times.find(
                (time) =>
                  time.id.toString() === formData.commencementTime.toString()
              ).name
            }
          />
          <Detail
            title='Conference Room'
            data={
              formData.room !== null
                ? conferenceRooms.find((room) => room.id == formData.room).name
                : ""
            }
          />
          <Detail title='Participants' data={formData.participants} />
          <Detail title='Duration (Days)' data={formData.numberOfDays} />
        </>
      ) : (
        <></>
      )}

      {formData.bookingType === "Banqueting" ? (
        <>
          <Detail
            title='Date'
            data={formData.commencementDate.toDateString()}
          />
          <Detail
            title='Time'
            data={
              times.find((time) => time.id == formData.commencementTime).name
            }
          />
          <Detail
            title='Banquet Room'
            data={
              formData.room !== null
                ? banquetRooms.find((room) => room.id == formData.room).name
                : ""
            }
          />
          <Detail title='Participants' data={formData.participants} />
        </>
      ) : (
        <></>
      )}

      {formData.bookingType === "Package" ? (
        <>
          <Detail
            title='Date'
            data={formData.commencementDate.toDateString()}
          />

          <Detail
            title='Package'
            data={
              formData.room !== null
                ? packages.find((room) => room.id == formData.room).name
                : ""
            }
          />
          <Detail title='Participants' data={formData.participants} />
        </>
      ) : (
        <></>
      )}
      <Detail title='Special Request' data={formData.specialRequest} />
    </div>
  );
}
export default Confirm;
