import { createStore } from "redux";
import { reducerQuest } from "./reducers/reducerQuest";
import { composeWithDevTools } from "redux-devtools-extension";

export const store = createStore(reducerQuest, composeWithDevTools());