import { NameActions } from "../../../shared/actions";
import { SetNameActionI } from "../actions/name-actions";

export interface NameStateI {
  name: string | null;
}
const initialState: NameStateI = {
  name: null,
};
export const nameReducer = (
  state: NameStateI = initialState,
  action: SetNameActionI
) => {
  switch (action.type) {
    case NameActions.SET_NAME:
      console.log("next name", action.payload);

      return { ...state, name: action.payload };
    default:
      return state;
  }
};
