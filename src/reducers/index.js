import { combineReducers } from "redux";
import { colourReducer } from "./colourReducer";
import { imageReducer } from "./imageReducer";

export const allReducers = combineReducers({
  colour: colourReducer,
  image: imageReducer,
});
