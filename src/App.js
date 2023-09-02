import React from "react";
import Navbar from "./Navbar";
import Home from "./Home";
import About from "./About"
import Vamana from "./Vamana";
import Onam from "./Onam"
import Timeline from "./Timeline";
import Contact from "./Contact";
import Wishes from './Wishes'
function App() {
  return (
    <div>
      <Navbar />
      <Home />
      <About />
      <Vamana />
      <Onam />
      <Timeline />
      <Contact />
      <Wishes />
    </div>
  );
}

export default App;
