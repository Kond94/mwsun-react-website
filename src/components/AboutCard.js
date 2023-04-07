import { FaCheck } from "react-icons/fa";

const AboutCard = () => {
  return (
    <>
      <section className='about__area pb-50 pt-100'>
        <div className='container'>
          <div className='row'>
            <div className='col-xl-6 pr-0 col-lg-6'>
              <div className='about__thumb m-img'>
                <img src='assets/images/logos/about.jpg' alt='' />
                <div className='about__shape'>
                  <img src='assets/img/about/red-shape.png' alt='' />
                </div>
              </div>
            </div>
            <div className='col-xl-5 offset-xl-1 col-lg-5 offset-lg-1'>
              <div className='about__content'>
                <div className='section__title mb-25'>
                  <span>Who we are</span>
                  <h2>The epitome of Hospitality </h2>
                </div>
                <p>
                  “Hospitality means primarily the creation of free space where
                  the stranger can enter and become a friend instead of an
                  enemy. Hospitality is not to change people, but to offer them
                  space where change can take place. It is not to bring men and
                  women over to our side, but to offer freedom not disturbed by
                  dividing lines.” - Henri J.M. Nouwen
                </p>
                <div className='about__list'>
                  <ul>
                    <li>
                      <span>
                        <i>
                          {" "}
                          <FaCheck />{" "}
                        </i>
                        Professional Staff
                      </span>
                    </li>
                    <li>
                      <span>
                        <i>
                          {" "}
                          <FaCheck />{" "}
                        </i>
                        Global Standard Amenities
                      </span>
                    </li>
                    <li>
                      <span>
                        <i>
                          {" "}
                          <FaCheck />{" "}
                        </i>
                        Great Pricing
                      </span>
                    </li>
                  </ul>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  );
};

export default AboutCard;
