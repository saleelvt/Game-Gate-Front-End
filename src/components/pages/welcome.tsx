import React, { Fragment } from "react";
import { Main } from "./user/Main";
import GameCard from "./user/Card";
 import { FeaturedGiftCards } from "./user/FeaturedGiftCards";
import { AffiliateProgramSection } from "./user/AffiliateProgramSection";
import GamingExperiencePage from "./user/GamingExperiencePage";
import Collection from "./user/Collection";
import { Navbar } from "./user/Navbar";
import Footer from "./user/Footer";
export const WelcomePage = React.memo(() => {
  return (
    <Fragment>
      <Navbar/>
      {/* <Main /> */}
      <GameCard />
      <FeaturedGiftCards />
      <AffiliateProgramSection/>
      <Collection/>
      <GamingExperiencePage/>
      <Footer/>
    </Fragment>
  );
});
