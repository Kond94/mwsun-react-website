import { BrowserRouter, Route, Routes } from "react-router-dom";
import { ToastContainer, toast } from "react-toastify";

import About from "./pages/About/About";
import AccommodationPage from "./pages/AccommodationPage";
import AllContext from "./context/AllContext";
import Conferencing from "./pages/Conferencing/Conferencing";
import Home from "./pages/Home/Home";
import Restaurant from "./pages/Restaurant/Restaurant";
import Rooms from "./pages/Accommodation/Rooms";
import ScrollTop from "./components/ScrollTop";
import Team from "./pages/Team/Team";

function App() {
  return (
    <>
      <AllContext>
        <BrowserRouter>
          <ScrollTop />
          <Routes>
            <Route path='/' element={<Home />} />
            <Route path='/home' element={<Home />} />

            <Route path='/about' element={<About />} />
            <Route path='/accommodation' element={<AccommodationPage />} />
            <Route path='/conferencing' element={<Conferencing />} />
            <Route path='/team' element={<Team />} />
            <Route path='/rooms' element={<Rooms />} />
            <Route path='/restaurant' element={<Restaurant />} />
          </Routes>
          <ToastContainer />
        </BrowserRouter>
      </AllContext>
    </>
  );
}

export default App;
