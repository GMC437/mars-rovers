import React from "react";
import BotControlSection from "../../bot/BotControlSection";
import BotInputSection from "../../bot/BotInputSection";
import BotOutputSection from "../../bot/BotOutputSection";
import MapSetupSection from "../../map/MapSetupSection";
import MapViewSection from "../../map/MapViewSection";

const RoverPage = ({ pageTitle }) => {
  return (
    <div>
      <h1>{pageTitle}</h1>
      <MapSetupSection />
      <BotInputSection />
      <BotOutputSection />
      <BotInputSection />
      <BotOutputSection />
      <BotControlSection />
      <MapViewSection />
    </div>
  );
};

export default RoverPage;
