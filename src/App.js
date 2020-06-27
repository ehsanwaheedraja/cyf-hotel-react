import React from "react";

import Bookings from "./Bookings";
import Restaurant from "./Restaurant";

import "./App.css";
import Heading from "./Components/Heading.js";
import TouristInfoCards from "./Components/TouristInfoCards.js";
import Footer from "./Components/Footer.js";

const App = () => {
  const footerData = [
    "123 Fake Street, London, E1 4UD",
    "hello@fakehotel.com",
    "0123 456789"
  ];
  return (
    <div className="App">
      <Heading />
      <TouristInfoCards />

      <Bookings />
      <Restaurant />
      <Footer footerData={footerData} />
    </div>
  );
};

export default App;
