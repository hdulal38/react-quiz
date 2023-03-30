import { ScoreActions } from "../../../shared/actions";
import { ScoreActionsI } from "../actions/score-actions";

export interface ScoreStateI {
  currentScore: number;
}
const initialState: ScoreStateI = {
  currentScore: 0,
};
export const scoreReducer = (
  state: ScoreStateI = initialState,
  action: ScoreActionsI
) => {
  switch (action.type) {
    case ScoreActions.INCREASE_POINT:
      return { ...state, currentScore: state.currentScore + 1 };
    default:
      return state;
  }
};
