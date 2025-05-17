import React, { Suspense } from "react";

import NextImage from "next/image";
import { slugify } from "../../utils";
import { useRouter } from "next/router";

const RoomCard = ({ room }) => {
  const router = useRouter();
  return (
    <>
      {/* <div className='col-xl-3 col-lg-4 col-md-6 '> */}
      <div
        className="room__item p-relative fix mb-30"
        style={{ cursor: "pointer" }}
        onClick={() => router.push("/Accommodation/" + slugify(room.name))}
      >
        <div className="room__thumb mb-25">
          <NextImage
            src={room.displayPhoto.url}
            alt="team"
            width={"100%"}
            height={"70%"}
            layout="responsive"
          />
          <div
            className="room__info  pt-10 pb-20"
            style={{ paddingRight: 25, cursor: "pointer" }}
            onClick={() => router.push("/Accommodation/" + slugify(room.name))}
          >
            <h5 style={{ color: "#fff" }}>{room.name}</h5>
            <span style={{ color: "white" }} className="mr-20">
              {room.description}
            </span>
          </div>
        </div>
        <div className="room__content pt-10 pb-30">
          <h3 style={{ margin: 5 }}>
            {room.name}

            <p style={{ color: "white" }}>
              ${room.price.toLocaleString("en-US")}
            </p>
          </h3>
        </div>
      </div>
      {/* </div> */}
    </>
  );
};

export default RoomCard;
