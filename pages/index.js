import React from "react";
import Navbar from "../components/navbar";
import Footer from "../components/footer";
import Newhero from "../components/hero";
import Goals from "../components/goals";
import Ment from "../components/ment";
import Ongoing from "../components/ongoing";
import Categories from "../components/categories";
import Upcoming from "../components/upcoming";

import ApptitudeSlide from "../components/apptitudeSlide";

import Access from "../components/access";

const Index = () => {
  return (
    <div className="bg-white">
      <Navbar />
      <Newhero />
      <Categories />
      <Ongoing />
      <Upcoming />
      <ApptitudeSlide />
      <Access />
      <Goals />
      <Ment />

      <Footer />
    </div>
  );
};

export default Index;
// https://assets4.lottiefiles.com/packages/lf20_ikvz7qhc.json
