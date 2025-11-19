import React from "react";
import HeroSection from "../components/about/HeroSection";
import MissionSection from "../components/about/MissionSection";
import StatsSection from "../components/about/StatsSection";
import ValuesSection from "../components/about/ValuesSection";
import TeamSection from "../components/about/TeamSection";
import VisionSection from "../components/about/VisionSection";
import WhyChooseSection from "../components/about/WhyChooseSection";

const AboutPage = () =>  {
  return (
    <div className="w-full">
      <HeroSection />
      <MissionSection />
      <VisionSection />
      <WhyChooseSection/>
      <StatsSection />
      <ValuesSection />
      <TeamSection />
    </div>
  );
}

export default AboutPage;
