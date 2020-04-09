const directions = ["N", "E", "S", "W"];
// position V
// orientation V
export const updateRover = (move, currentPosition) => {
  const updatedRoverMovement = `${updateRoverPosition(
    move,
    currentPosition
  )} ${updateRoverOrientation(move, currentPosition, directions)}`;
  return updatedRoverMovement;
};

// update move to position
export const updateRoverPosition = (move, position) => {
  let updatedPosition = position.substring(0, 3);
  const orientation = position.substring(4, 5);

  if (move === "M") {
    if (orientation === "N" || orientation === "S") {
      updatedPosition = moveAlongAxisY(orientation, position);
    } else if (orientation === "E" || orientation === "W") {
      updatedPosition = moveAlongAxisX(orientation, position);
    }
  }

  return updatedPosition;
};

export const updateRoverOrientation = (move, position, data) => {
  if (move === "L" || move === "R") {
    const orientationIndex = rotateRoverIndex(move, position, data);
    return data[orientationIndex];
  } else {
    return data[getIndex(position.substring(4, 5))];
  }
};

export const rotateRoverIndex = (move, position, data) => {
  const orientation = position.substring(4, 5);
  const index = parseInt(getIndex(orientation));
  const rotateValue = move === "R" ? index + 1 : index - 1;
  if (rotateValue === -1) {
    return data.length - 1;
  } else if (rotateValue === data.length) {
    return 0;
  } else {
    return rotateValue;
  }
};

export const getIndex = (move) => {
  return directions.indexOf(move);
};

export const moveAlongAxisX = (move, position) => {
  const positionSplit = position.split(" ");
  const moveValue =
    move === "E"
      ? parseInt(positionSplit[0]) + 1
      : parseInt(positionSplit[0]) - 1;
  return `${moveValue} ${positionSplit[1]}`;
};

export const moveAlongAxisY = (move, position) => {
  const positionSplit = position.split(" ");
  const moveValue =
    move === "N"
      ? parseInt(positionSplit[1]) + 1
      : parseInt(positionSplit[1]) - 1;
  return `${parseInt(positionSplit[0])} ${moveValue}`;
};
