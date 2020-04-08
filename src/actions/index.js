export const setGridAxis = (type, axisKey, axisValue) => {
  return {
    type,
    axisKey,
    axisValue,
  };
};

export const setRoute = (type, bot, route) => {
    return {
      type,
      bot,
      route,
    };
  };

export const startRovers = (type, bot, move) => {
  return {
    type,
    bot,
    move,
  };
};

export const resetRovers = (type) => {
  return {
    type,
  };
};
