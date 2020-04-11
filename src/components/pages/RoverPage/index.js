import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import BotControlSection from "../../bot/BotControlSection";
import BotInputSection from "../../bot/BotInputSection";
import BotOutputSection from "../../bot/BotOutputSection";
import MapSetupSection from "../../map/MapSetupSection";
import MapViewSection from "../../map/MapViewSection";
import { addNewBot } from "../../../actions";
import { actionNames } from "../../../enum";

const { ADD_NEW_BOT } = actionNames;
const newBot = (index) => {
  return {
    id: `bot${index}`,
    name: `Bot ${index}`,
    route: "",
    currentRoute: [],
    startPosition: "0 0 N",
    currentPosition: "0 0 N",
    status: "waiting",
  };
};

const RoverPage = ({ pageTitle }) => {
  const dispatch = useDispatch();
  const { bots } = useSelector((state) => state);

  useEffect(() => {
    dispatch(addNewBot(ADD_NEW_BOT, newBot(1)));
    dispatch(addNewBot(ADD_NEW_BOT, newBot(2)));
  }, [dispatch]);

  return (
    <div>
      <h1>{pageTitle}</h1>
      {bots.length < 2 ? (
        <div>Mars Rovers is loading</div>
      ) : (
        <>
          <MapSetupSection />
          <BotInputSection botId="bot1" title="Bot 1" />
          <BotOutputSection
            title="Bot 1"
            name={bots[0].name}
            position={bots[0].currentPosition}
            route={bots[0].route}
            status={bots[0].status}
          />
          <BotInputSection botId="bot2" title="Bot 2" />
          <BotOutputSection
            title="Bot 2"
            name={bots[1].name}
            position={bots[1].currentPosition}
            route={bots[1].route}
            status={bots[1].status}
          />
          <BotControlSection />
          <br />
          <MapViewSection />
        </>
      )}
    </div>
  );
};

export default RoverPage;
