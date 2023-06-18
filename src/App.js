import "react-under-construction/build/css/index.css";

import { BrowserRouter, Route, Routes } from "react-router-dom";

import AboutPage from "./pages/AboutPage";
import AccommodationPage from "./pages/AccommodationPage";
import AllContext from "./context/AllContext";
import BanquetingPage from "./pages/BanquetingPage";
import ConferencingPage from "./pages/ConferencingPage";
import ContactPage from "./pages/ContactPage";
import Home from "./pages/Home/Home";
import RestaurantPage from "./pages/Restaurant/RestaurantPage";
import ScrollTop from "./components/ScrollTop";
import TeamPage from "./pages/TeamPage";
import { ToastContainer } from "react-toastify";
import UnderConstruction from "react-under-construction";

function App() {
  return (
    <>
      <UnderConstruction
        background={{
          image: "/assets/img/slider/homebg-1.jpg",
          textColor: "#fff",
          overlay: {
            color: "#000",
            opacity: ".5",
          },
        }}
        logo={{
          src: "/assets/img/logo/mwsun_logo.png",
          alt: "alt text",
        }}
        title={{
          text: "Malawi Sun Hotel",
        }}
        description={{
          text: "Our website is under maintenance. We'll be here soon, subscribe to be notified",
          style: {
            maxWidth: "440px",
          },
        }}
        subscribe={{
          placeholder: "Enter your email",
          buttonText: "Subscribe",
          onSubmit: (value) => {
            alert(value + "will be emailed when the website is back up");
          },
        }}
        links={[
          {
            url: "https://www.facebook.com/",
            image: "/assets/img/logo/facebook.png",
          },
          {
            url: "https://www.twitter.com/",
            image: "/assets/img/logo/twitter.png",
          },
          {
            url: "https://www.instagram.com/",
            image: "/assets/img/logo/instagram.png",
          },
          {
            url: "mailto:info@malawisunhotel.com",
            image: "/assets/img/logo/mail.png",
          },
        ]}
      />
      {/* <AllContext>
        <BrowserRouter>
          <ScrollTop />
          <Routes>
            <Route path='/' element={<Home />} />
            <Route path='/about' element={<AboutPage />} />
            <Route path='/accommodation' element={<AccommodationPage />} />
            <Route path='/conferencing' element={<ConferencingPage />} />
            <Route path='/banqueting' element={<BanquetingPage />} />
            <Route path='/restaurant' element={<RestaurantPage />} />
            <Route path='/contact' element={<ContactPage />} />
            <Route path='/about' element={<AboutPage />} />
            <Route path='/team' element={<TeamPage />} />
            <Route path='*' element={<Home />} />
          </Routes>
          <ToastContainer />
        </BrowserRouter>
      </AllContext> */}
    </>
  );
}

export default App;
