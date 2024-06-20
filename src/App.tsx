import React from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Home from "./pages/home/Home";
import "./App.css";
import "./Reset.css";
import Introduce from "./pages/introduce/Introduce";
import Fare from "./pages/fare/Fare";
import Event from "./pages/event/Event";
import Discover from "./pages/discover/Discover";
import History from "./pages/introduce/History";
import AcrobaticCarp from "./pages/discover/AcrobaticCarp";
import LongTailedMonkey from "./pages/discover/LongTailedMonkey";
import HungKingSquare from "./pages/discover/HungKingSquare";
import Plants from "./pages/discover/Plants";

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/discover" element={<Discover />} />
        <Route path="/discover/acrobatic-carp" element={<AcrobaticCarp />} />
        <Route path="/discover/plants" element={<Plants />} />
        <Route
          path="/discover/long-tailed-monkey"
          element={<LongTailedMonkey />}
        />
        <Route path="/discover/Hung-king-square" element={<HungKingSquare />} />

        <Route path="/introduce" element={<Introduce />}>
          {/* <Route path="members" element={<Members />} />
          <Route path="privacy-policy" element={<PrivacyPolicy />} /> */}
        </Route>
        <Route path="/introduce/history" element={<History />} />
        <Route path="/fare" element={<Fare />} />
        <Route path="/event" element={<Event />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
