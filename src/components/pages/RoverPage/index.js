import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import BotControlSection from "../../bot/BotControlSection";
import BotInputSection from "../../bot/BotInputSection";
import BotOutputSection from "../../bot/BotOutputSection";
import MapSetupSection from "../../map/MapSetupSection";
import MapViewSection from "../../map/MapViewSection";
import { addNewBot, setGridAxis } from "../../../actions";

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
  const { bots, x, y } = useSelector((state) => state);

  useEffect(() => {
    dispatch(addNewBot(newBot(1)));
    dispatch(addNewBot(newBot(2)));
    dispatch(setGridAxis("x", 3));
    dispatch(setGridAxis("y", 3));
  }, [dispatch]);

  return (
    <div>
      <h1>{pageTitle}</h1>
      {bots.length < 2 ? (
        <div>Mars Rovers is loading</div>
      ) : (
        <>
          <MapSetupSection />
          <BotInputSection
            botId="bot1"
            title="Bot 1"
            xAxisSize={x}
            yAxisSize={y}
          />
          <BotOutputSection
            title="Bot 1"
            name={bots[0].name}
            position={bots[0].currentPosition}
            route={bots[0].currentRoute.join("")}
            status={bots[0].status}
          />
          <BotInputSection
            botId="bot2"
            title="Bot 2"
            xAxisSize={x}
            yAxisSize={y}
          />
          <BotOutputSection
            title="Bot 2"
            name={bots[1].name}
            position={bots[1].currentPosition}
            route={bots[1].currentRoute.join("")}
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
