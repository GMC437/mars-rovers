import React from "react";
import styled from "styled-components";

const ListItemStyled = styled.li`
  background-color: #dd2c00;
  color: white;
  border: 2px solid black;
  margin: 2px;
  padding: 2px;
  height: 80px;
  width: 80px;

  display: relative;
  align-items: center;
  justify-items: center;
`;

const GridItem = ({ index, children }) => {
  return <ListItemStyled key={index}>{children}</ListItemStyled>;
};

export default GridItem;
