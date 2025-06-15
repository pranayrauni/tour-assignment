import "./App.css";
import React from "react";
import { Container} from "@mui/material";
import HeroSection from "./components/HeroSection";

import PopularDestinations from "./components/PopularDestinations";
import TopSellingPackages from "./components/TopSellingPackages";
import Advantages from "./components/Advantages";
import Testimonials from "./components/Testimonials";


function App() {
  return (
    <>
      <HeroSection />

      <Container maxWidth="lg">
        <PopularDestinations />
      </Container>
      <Advantages />
      <Container maxWidth="lg">
        <TopSellingPackages />
        <Testimonials />
      </Container>
    </>
  );
}

export default App;
