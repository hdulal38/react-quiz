import { nameReducer } from "./name-reducer";
import { combineReducers } from "redux";
import { questionReducer } from "./question-reducers";
import { scoreReducer } from "./score-reducer";
import { gameStatusReducer } from "./game-status-reducer";

export const rootReducer = combineReducers({
  nameState: nameReducer,
  questionState: questionReducer,
  scoreState: scoreReducer,
  gameStatusState: gameStatusReducer,
});
