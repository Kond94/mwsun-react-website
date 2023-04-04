import { BrowserRouter, Route, Routes } from "react-router-dom";

import AboutPage from "./pages/AboutPage";
import AccommodationPage from "./pages/AccommodationPage";
import AllContext from "./context/AllContext";
import BanquetingPage from "./pages/BanquetingPage";
import ConferencingPage from "./pages/ConferencingPage";
import Home from "./pages/Home/Home";
import RestaurantPage from "./pages/Restaurant/RestaurantPage";
import ScrollTop from "./components/ScrollTop";
import { ToastContainer } from "react-toastify";
import TeamPage from "./pages/TeamPage";
import ContactPage from "./pages/ContactPage";

function App() {
  return (
    <>
      <AllContext>
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
          </Routes>
          <ToastContainer />
        </BrowserRouter>
      </AllContext>
    </>
  );
}

export default App;
