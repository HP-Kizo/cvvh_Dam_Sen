import React from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Home from "./pages/home/Home";
import "./App.css";
import "./Reset.css";
import Introduce from "./pages/introduce/Introduce";
import Fare from "./pages/fare/Fare";
import Event from "./pages/event/Event";
import Discover from "./pages/discover/Discover";

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/discover" element={<Discover />} />
        <Route path="/introduce" element={<Introduce />}>
          {/* <Route path="history" element={<History />} />
          <Route path="members" element={<Members />} />
          <Route path="privacy-policy" element={<PrivacyPolicy />} /> */}
        </Route>
        <Route path="/fare" element={<Fare />} />
        <Route path="/event" element={<Event />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
