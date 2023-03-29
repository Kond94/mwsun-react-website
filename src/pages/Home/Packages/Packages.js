import PackageCard from "../../../components/PackageCard";
import React from "react";
import useGlobalContext from "../../../hooks/useGlobalContext";

const Packages = ({ packages }) => {
  const { handleCloseBookingModal } = useGlobalContext();
  const { handleShowBookingModal } = useGlobalContext();

  return (
    <>
      <section className='price__area pt-115 pb-75'>
        <div className='container'>
          <div className='row'>
            <div className='col-xl-8 offset-xl-2 col-lg-10 offset-lg-1'>
              <div className='section__title section__title-3 mb-85 text-center'>
                <span>We love Vacationers</span>
                <h2>Here are some awesone vacation Packages</h2>
              </div>
              <div className='price__tab d-flex justify-content-center mb-50'>
                <div className='price__offer'>
                  <span>
                    Get 5% off if you book a vacation package through the
                    website
                  </span>
                  <img src='assets/img/icon/price/line.png' alt='' />
                </div>
              </div>
            </div>
          </div>

          <div className='price__tab-content'>
            <div className='tab-content' id='price-tab-content'>
              <div
                className='tab-pane fade show active'
                id='yearly'
                role='tabpanel'
                aria-labelledby='yearly-tab'
              >
                <div className='row'>
                  {packages.map((PackagesItem) => (
                    <PackageCard
                      key={PackagesItem.id.toString()}
                      title={PackagesItem.name}
                      price={PackagesItem.price}
                      activities={PackagesItem.packageItems.map(
                        (packageItem) => packageItem.name
                      )}
                      handleCloseBookingModal={handleCloseBookingModal}
                      handleShowBookingModal={handleShowBookingModal}
                    />
                  ))}
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  );
};

export default Packages;
