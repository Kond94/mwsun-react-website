import React from "react";
import TeamCard from "../../../components/TeamCard";

const TeamArea = () => {
  return (
    <>
      <section className='team__area pt-115 pb-110'>
        <div className='container'>
          <div className='row align-items-center mb-55'>
            <div className='col-xl-6 col-lg-8 col-md-8 col-sm-8'>
              <div className='section__title section__title-3 mb-30'>
                <span>A results driven team</span>
              </div>
            </div>
          </div>
          <div className='row'>
            <TeamCard image='person' name='Muhammed Ahmed' title='CEO' />
            <TeamCard
              image='person'
              name='Suhail Ahmed'
              title='Operations Director'
            />
            <TeamCard
              image='person'
              name='Innocent Mushava'
              title='Finance Director'
            />
            <TeamCard
              image='person'
              name='Chite Kumwenda'
              title='accommodation Manager'
            />
            <TeamCard
              image='person'
              name='Clement Kapanda'
              title='Food & Beverage Manager'
            />
            <TeamCard
              image='person'
              name='Yohanne Banda'
              title='Human Resource Manager'
            />
          </div>
        </div>
      </section>
    </>
  );
};

export default TeamArea;
