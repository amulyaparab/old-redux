export const colourReducer = (state = "pink", action) => {
  switch (action.type) {
    case "GREEN":
      return (state = "green");
    default:
      return state;
  }
};
