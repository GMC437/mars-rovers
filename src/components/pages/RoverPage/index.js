import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import styled from "styled-components";
import BotControlSection from "../../bot/BotControlSection";
import BotInputSection from "../../bot/BotInputSection";
import BotOutputSection from "../../bot/BotOutputSection";
import MapSetupSection from "../../map/MapSetupSection";
import MapViewSection from "../../map/MapViewSection";
import { addNewBot, setGridAxis } from "../../../actions";

const DivStyled = styled.div`
  display: flex;
  justify-content: center;
  margin: 5px;
`;
const MainTitle = styled.h1`
  text-align: center;
`;

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
  const [bot1, bot2] = bots;
  useEffect(() => {
    dispatch(addNewBot(newBot(1)));
    dispatch(addNewBot(newBot(2)));
    dispatch(setGridAxis("x", "5"));
    dispatch(setGridAxis("y", "5"));
  }, [dispatch]);

  return (
    <div>
      <MainTitle>{pageTitle}</MainTitle>
      {bots.length < 2 ? (
        <div>Mars Rovers is loading</div>
      ) : (
        <>
          <div>
            <MapSetupSection />
            <DivStyled>
              <BotInputSection
                botId="bot1"
                title="Bot 1"
                xAxisSize={x}
                yAxisSize={y}
              />
              <BotOutputSection
                title="Bot 1"
                name={bot1.name}
                position={bot1.currentPosition}
                route={bot1.currentRoute.join("")}
                status={bot1.status}
              />
            </DivStyled>
            <DivStyled>
              <BotInputSection
                botId="bot2"
                title="Bot 2"
                xAxisSize={x}
                yAxisSize={y}
              />
              <BotOutputSection
                title="Bot 2"
                name={bot2.name}
                position={bot2.currentPosition}
                route={bot2.currentRoute.join("")}
                status={bot2.status}
              />
            </DivStyled>
          </div>
          <div>
            <BotControlSection bots={bots} xAxis={x} yAxis={y} />
            <MapViewSection />
          </div>
        </>
      )}
    </div>
  );
};

export default RoverPage;
