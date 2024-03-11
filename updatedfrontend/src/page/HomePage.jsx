import React from "react";
import Navbar from "../components/Navbar"
import Footer from "../components/Footer";
import Wrapper from "../components/Wrapper";
import AlluminisPage from "../components/LandingPage/AllumnisPage";
import PriceCard from "../components/ui/pricecard";
import Devider from "../components/ui/devider";
import StatsInfo from "../components/LandingPage/StatsInfo";
import TestInfo from "../components/LandingPage/TestInfo";
import PopularSeriesLogo from "../components/LandingPage/PopularSeriesLogo";
import HeroSection from "../components/LandingPage/HeroSection";
import Faq from "../components/LandingPage/Faq";
import DiscordPAge from "../components/LandingPage/DIscordPage";
import TestExperience from "../components/LandingPage/TestExperience";

const HomePage = () => {
  return (
    <>
    <Navbar/>
    <HeroSection/>
    <Wrapper>
    <Devider/>
    <StatsInfo/>
    <TestInfo/>
    <TestExperience/>
    <PopularSeriesLogo/>
  
    <PriceCard/>
    <AlluminisPage/>
    <DiscordPAge/>
    <Faq/>
    </Wrapper>
    <Footer/>
    </>
  );
};

export default HomePage;
