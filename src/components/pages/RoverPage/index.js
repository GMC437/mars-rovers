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
      <BotInputSection title="Bot 1" />
      <BotOutputSection title="Bot 1" name="Peter" position="2 2 N" route="LMLMLM" />
      <BotInputSection title="Bot 2" />
      <BotOutputSection title="Bot 2" name="Steve" position="1 4 E" route="RMRMRM" />
      <BotControlSection />
      <br />
      <MapViewSection />
    </div>
  );
};

export default RoverPage;
