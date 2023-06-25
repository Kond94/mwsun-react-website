import ContactForm from "./ContactForm";
import React from "react";

const ContactCard = () => {
  return (
    <>
      <section className='contact__area'>
        <div className='container-fluid p-0'>
          <div className='row g-0'>
            <div className='col-xl-12'>
              <div className='contact__map'>
                <iframe
                  src='https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d11530.980776193475!2d34.989790510577635!3d-15.786500424389743!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x18d84505bcfe16c5%3A0x7f10463828063ad8!2sMalawi%20Sun%20Hotel!5e0!3m2!1sen!2smw!4v1675867449146!5m2!1sen!2smw'
                  title='contact'
                ></iframe>
                <div
                  className='contact__wrapper d-md-flex justify-content-between'
                  style={{ marginTop: 50 }}
                >
                  <div className='contact__info mr-100'>
                    <h3>Get in touch</h3>
                    <ul>
                      <li>
                        <h4>Address</h4>
                        <p>
                          5 Robins Road, Blantyre <br /> Malawi
                        </p>
                      </li>
                      <li>
                        <h4>call us</h4>
                        <p>
                          <a href='tel:(404)-888-123-456'>(+265) 01-830-069</a>
                        </p>
                        <p>
                          <a href='tel:(204)-888-234-674'>(+265) 01-824-808</a>
                        </p>
                      </li>
                      <li>
                        <h4>Email Address</h4>
                        <p>
                          <a href='mailto:Info@malawisunhotel.com'>
                            Info@malawisunhotel.com
                          </a>
                        </p>
                      </li>
                    </ul>
                  </div>
                  <div className='contact__form'>
                    <ContactForm />
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  );
};

export default ContactCard;
