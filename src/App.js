import React from "react";
import styled from "styled-components";
import RoverPage from "./components/pages/RoverPage";

const AppContainer = styled.div`
  box-sizing: border-box;
`;

const App = () => {
  return (
    <AppContainer>
      <RoverPage pageTitle="Mars Rovers" />
    </AppContainer>
  );
};

export default App;
