import { BrowserRouter, Route, Routes } from "react-router-dom";

import About from "./pages/About/About";
import AccommodationPage from "./pages/AccommodationPage";
import AllContext from "./context/AllContext";
import ConferencingPage from "./pages/ConferencingPage";
import Home from "./pages/Home/Home";
import Restaurant from "./pages/Restaurant/Restaurant";
import Rooms from "./pages/Accommodation/Rooms";
import ScrollTop from "./components/ScrollTop";
import Team from "./pages/Team/Team";
import { ToastContainer } from "react-toastify";

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
            <Route path='/conferencing' element={<ConferencingPage />} />
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
