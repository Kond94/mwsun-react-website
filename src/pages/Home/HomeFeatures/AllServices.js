import {
  FaBed,
  FaCoffee,
  FaLaptop,
  FaPeopleArrows,
  FaRing,
} from "react-icons/fa";

import { IoDocumentTextOutline } from "react-icons/io5";
import React from "react";
import ServiceCard from "../../../components/ServiceCard";

const AllServices = () => {
  return (
    <>
      <section
        className='features__area pb-100 mt--100 wow fadeInUp'
        data-wow-delay='.5s'
      >
        <div className='container'>
          <div className='features__inner fix'>
            <div className='row g-0 '>
              <ServiceCard
                icon={<FaBed />}
                title='Accommodation'
                background={`url(assets/img/features/accommodation.jpg)`}
                link='accommodation'
              />
              <ServiceCard
                icon={<FaPeopleArrows />}
                title='Conferences'
                background={`url(assets/img/features/conference.jpg)`}
                link='conferencing'
              />
              <ServiceCard
                icon={<FaLaptop />}
                title='Training'
                background={`url(assets/img/features/training.jpg)`}
                link='conferencing'
              />
              <ServiceCard
                icon={<IoDocumentTextOutline />}
                title='Board Meetings'
                background={`url(assets/img/features/boardroom.jpg)`}
                link='conferencing'
              />
              <ServiceCard
                icon={<FaCoffee />}
                title='Catering'
                background={`url(assets/img/features/catering.jpg)`}
                link='catering'
              />
              <ServiceCard
                icon={<FaRing />}
                title='Banquets'
                background={`url(assets/img/features/banquets.jpg)`}
                link='banquets'
              />
            </div>
          </div>
        </div>
      </section>
    </>
  );
};

export default AllServices;
