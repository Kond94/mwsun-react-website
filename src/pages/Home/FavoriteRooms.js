import React from "react";
import RoomCard from "../../components/RoomCard";

const FavoriteRooms = ({ promotionRooms }) => {
  return (
    <>
      <section className='services__area pt-115 pb-80'>
        <div className='container'>
          <div className='row'>
            <div className='col-xl-8 offset-xl-2 col-lg-10 offset-lg-1'>
              <div
                className='section__title section__title-3 text-center mb-90 wow fadeInUp'
                data-wow-delay='.2s'
              >
                <span>A sneak peak</span>
                <h2>Of Our Rooms</h2>
              </div>
            </div>
          </div>
          <div className='row'>
            {promotionRooms.map((promotionRoom) => (
              <RoomCard
                key={promotionRoom.id.toString()}
                image={promotionRoom.room.displayPhoto}
                name={promotionRoom.room.title}
                title={promotionRoom.room.description}
              />
            ))}
          </div>
        </div>
      </section>
    </>
  );
};

export default FavoriteRooms;
