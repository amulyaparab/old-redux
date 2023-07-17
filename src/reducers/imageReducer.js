export const imageReducer = (state = { likes: 0 }, action) => {
  switch (action.type) {
    case "LIKE_INCREMENT":
      return { ...state, likes: state.likes + 1 };
    case "LIKE_DECREMENT":
      return {
        ...state,
        likes: state.likes >= 1 ? state.likes - 1 : state.likes,
      };
    default:
      return state;
  }
};
