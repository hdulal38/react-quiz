import { QuestionActions } from "../../../shared/actions";
import { QuestionActionI } from "../actions/question-actions";

export interface QuestionStateI {
  currentQuestionNumber: number;
}
const initialState: QuestionStateI = {
  currentQuestionNumber: 0,
};
export const questionReducer = (
  state: QuestionStateI = initialState,
  action: QuestionActionI
) => {
  switch (action.type) {
    case QuestionActions.SET_QUESTION:
      return { ...state, currentQuestionNumber: action.payload };
    case QuestionActions.NEXT_QUESTION:
      console.log("nextQuestion");

      return {
        ...state,
        currentQuestionNumber: state.currentQuestionNumber + 1,
      };
    default:
      return state;
  }
};
