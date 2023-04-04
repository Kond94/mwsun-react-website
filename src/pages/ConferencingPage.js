import "./Pages.css";

import AppHeader from "../components/shared/AppHeader";
import Button from "react-bootstrap/Button";
import Footer from "../components/shared/Footer";
import PageHeader from "../components/shared/PageHeader";
import PageHelmet from "../components/shared/PageHelmet";
import useGlobalContext from "../hooks/useGlobalContext";
import { useLocation } from "react-router-dom";
import { useState } from "react";

function ConferencingPage() {
  const location = useLocation();
  const conferenceRoom = location.state.conferenceRoom;
  const [currentPhoto, setCurrentPhoto] = useState(
    conferenceRoom?.displayPhoto
  );
  const { setForm } = useGlobalContext();
  const { setFormState } = useGlobalContext();
  const { handleShowBookingModal } = useGlobalContext();
  return (
    <>
      <PageHelmet pageTitle='Conferencing' />
      <AppHeader />
      <PageHeader title='Conferencing' subtitle={conferenceRoom.name} />
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
                      <h3 className='title'>The {conferenceRoom.name}</h3>

                      <hr />

                      <div className='mb-3'>
                        <h6>Short description</h6>
                        <ul className='list-dots mb-0'>
                          <li>{conferenceRoom.capacity}</li>
                        </ul>
                      </div>

                      <div className='mb-3'>
                        <var className='price h4'>
                          Mk {conferenceRoom.price.toLocaleString("en-US")}
                        </var>{" "}
                        <br />
                      </div>

                      <div className='mb-4'>
                        <Button
                          variant='warning'
                          onClick={() => {
                            setForm("2");
                            setFormState({
                              conferenceRoom: conferenceRoom.id.toString(),
                            });
                            handleShowBookingModal();
                          }}
                          style={{ color: "#fff" }}
                        >
                          Book Conference
                        </Button>
                      </div>
                      <article className='gallery-wrap'>
                        <div className='thumbs-wrap'>
                          {conferenceRoom.photos.map((photo) => (
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

export default ConferencingPage;
