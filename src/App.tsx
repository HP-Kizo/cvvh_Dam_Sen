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
import GymTickets from "./pages/fare/GymTickets";
import Member from "./pages/introduce/Member";
import PrivacyPolicy from "./pages/introduce/PrivacyPolicy";
import ServiceTicket from "./pages/fare/ServiceTicket";
import GroupTicket from "./pages/fare/GroupTicket";
import WaterShow from "./pages/event/WaterShow";

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
        <Route path="/introduce/member" element={<Member />} />
        <Route path="/introduce/privacy-policy" element={<PrivacyPolicy />} />

        <Route path="/fare" element={<Fare />} />
        <Route path="/fare/gym-stickets" element={<GymTickets />} />
        <Route path="/fare/service-ticket" element={<ServiceTicket />} />
        <Route path="/fare/group-ticket" element={<GroupTicket />} />

        <Route path="/event" element={<Event />} />
        <Route path="/event/water-show" element={<WaterShow />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
