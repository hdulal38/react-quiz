import { GameStatusActions, NameActions } from "../../../shared/actions";
import { GameStatusActionI } from "../actions/game-action";
import { SetNameActionI } from "../actions/name-actions";

export interface GameStatusI {
  status: string | null;
}
const initialState: GameStatusI = {
  status: null,
};
export const gameStatusReducer = (
  state: GameStatusI = initialState,
  action: GameStatusActionI
) => {
  switch (action.type) {
    case GameStatusActions.START_GAME:
      return { ...state, status: GameStatusActions.START_GAME };
    case GameStatusActions.END_GAME:
      return { ...state, status: GameStatusActions.END_GAME };
    default:
      return state;
  }
};
