import React from "react";
import SingleCount from "../../components/SingleCount";

const ClientCounter = () => {
  return (
    <>
      <section className='counter__area pb-100'>
        <div className='container'>
          <h2 style={{ textAlign: "center" }}>We take pride in our numbers</h2>

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
      </section>
    </>
  );
};

export default ClientCounter;
