import Link from "next/link";
import React from "react";
import { slugify } from "../../utils";
import { useRouter } from "next/router";

const RoomCard = ({ room }) => {
  const router = useRouter();
  return (
    <>
      {/* <div className='col-xl-3 col-lg-4 col-md-6 '> */}
      <div
        className='room__item p-relative fix mb-30'
        style={{ cursor: "pointer" }}
        onClick={() => router.push("/Accommodation/" + slugify(room.title))}
      >
        <div className='room__thumb mb-25'>
          <img
            src={room.displayPhoto.url}
            alt='team'
            style={{ width: "100%" }}
          />
          <div
            className='room__info  pt-10 pb-20'
            style={{ paddingRight: 25, cursor: "pointer" }}
            onClick={() => router.push("/Accommodation/" + slugify(room.title))}
          >
            <h5 style={{ color: "#fff" }}>{room.title}</h5>
            <span style={{ color: "white" }} className='mr-20'>
              {room.description}
            </span>
          </div>
        </div>
        <div className='room__content pt-10 pb-30'>
          <h3 style={{ margin: 5 }}>
            {room.title}

            <p style={{ color: "white" }}>
              Mk{room.price.toLocaleString("en-US")}
            </p>
          </h3>
        </div>
      </div>
      {/* </div> */}
    </>
  );
};

export default RoomCard;
