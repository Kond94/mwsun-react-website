import "./Pages.css";

import AppHeader from "../components/shared/AppHeader";
import Button from "react-bootstrap/Button";
import Footer from "../components/shared/Footer";
import PageHeader from "../components/shared/PageHeader";
import PageHelmet from "../components/shared/PageHelmet";
import useGlobalContext from "../hooks/useGlobalContext";
import { useLocation } from "react-router-dom";
import { useState } from "react";

function BanquetingPage() {
  const location = useLocation();
  const banquetRoom = location.state.banquetRoom;
  const [currentPhoto, setCurrentPhoto] = useState(banquetRoom?.displayPhoto);
  const { setForm } = useGlobalContext();
  const { setFormState } = useGlobalContext();
  const { handleShowBookingModal } = useGlobalContext();

  return (
    <>
      <PageHelmet pageTitle='Banqueting' />
      <AppHeader />
      <PageHeader title='Banqueting' subtitle={banquetRoom.name} />
      <div>
        <section className='section-content padding-y bg'>
          <div className='container'>
            <article className='card'>
              <div className='card-body'>
                <div className='row'>
                  <aside className='col-md-8'>
                    <article className='gallery-wrap'>
                      <div className='card img-big-wrap'>
                        <img src={currentPhoto} alt='' />
                      </div>
                    </article>
                  </aside>
                  <main className='col-md-4'>
                    <article>
                      <h3 className='title'>The {banquetRoom.name}</h3>

                      <hr />

                      <div className='mb-3'>
                        <h6>Short description</h6>
                        <ul className='list-dots mb-0'>
                          <li>Capacity: {banquetRoom.capacity}</li>
                          <li>{banquetRoom.description}</li>
                        </ul>
                      </div>

                      <div className='mb-3'>
                        <var className='price h4'>
                          Mk {banquetRoom.price.toLocaleString("en-US")}
                        </var>{" "}
                        <br />
                      </div>

                      <div className='mb-4'>
                        <Button
                          variant='warning'
                          onClick={() => {
                            setForm("3");
                            setFormState({
                              banquetRoom: banquetRoom.id.toString(),
                            });
                            handleShowBookingModal();
                          }}
                          style={{ color: "#fff" }}
                        >
                          Book Banquet
                        </Button>
                      </div>
                      <article className='gallery-wrap'>
                        <div className='thumbs-wrap'>
                          {banquetRoom.photos.map((photo) => (
                            <img
                              key={photo}
                              src={photo}
                              alt=''
                              className='item-thumb'
                              onClick={() => setCurrentPhoto(photo)}
                            />
                          ))}
                        </div>
                      </article>
                    </article>
                  </main>
                </div>
              </div>
            </article>

            {/* <article className='card mt-5'>
              <div className='card-body'>
                <div className='row'></div>
                <hr />
              </div>
            </article> */}
          </div>
        </section>
      </div>
      <Footer />
    </>
  );
}

export default BanquetingPage;
