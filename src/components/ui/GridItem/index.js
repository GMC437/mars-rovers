import React from "react";
import styled from "styled-components";

const ListItemStyled = styled.li`
  border: 2px solid red;
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
