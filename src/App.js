import React from "react";
import { Provider } from "react-redux";
import { createStore } from "redux";
import styled from "styled-components";
import { roverReducer } from "./reducers";
import RoverPage from "./components/pages/RoverPage";

const AppContainer = styled.div`
  box-sizing: border-box;
  width: fit-content;
  margin: 0 auto;
`;

const App = () => {
  return (
    <Provider store={createStore(roverReducer)}>
      <AppContainer>
        <RoverPage pageTitle="Mars Rovers" />
      </AppContainer>
    </Provider>
  );
};

export default App;
