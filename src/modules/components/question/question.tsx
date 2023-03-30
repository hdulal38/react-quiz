import { useSelector } from "react-redux";
import { questionSet } from "../../../shared/questions";
import { useDispatch } from "react-redux";
import { useState, useEffect } from "react";
import {
  GameStatusActions,
  QuestionActions,
  ScoreActions,
} from "../../../shared/actions";
import { useNavigate, Navigate } from "react-router";
export function Question() {
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const [timer, setTimer] = useState(10);
  const currentQuestionNumber = useSelector(
    (state: any) => state.questionState.currentQuestionNumber
  );
  const name = useSelector((state: any) => state.nameState.name);
  if (!name) {
    return <Navigate to="/" />;
  }
  const [isSubmitted, setIsSubmitted] = useState(false);
  const [questionItem, setQuestionItem] = useState(
    questionSet[currentQuestionNumber]
  );
  const submitAnswer = (
    e: React.SyntheticEvent<HTMLElement> | any,
    key: number
  ) => {
    setIsSubmitted(true);
    if (key === questionItem.answer) {
      e.target.classList.add("bg-green-500");
      dispatch({ type: ScoreActions.INCREASE_POINT });
    } else {
      e.target.classList.add("bg-red-500");
    }
    document
      .getElementById(questionItem.answer.toString())
      ?.classList.add("bg-green-500");
  };
  const getNextQuestion = () => {
    setTimer(10);
    if (currentQuestionNumber < questionSet.length - 1) {
      dispatch({ type: QuestionActions.NEXT_QUESTION });
    } else {
      dispatch({ type: GameStatusActions.END_GAME });
      navigate("/scoreboard");
    }
  };
  useEffect(() => {
    setTimer(10);
  }, []);
  useEffect(() => {
    setQuestionItem(questionSet[currentQuestionNumber]);
    resetOptions();
    return () => {};
  }, [currentQuestionNumber]);
  useEffect(() => {
    if (timer === 0) {
      getNextQuestion();
    }
    const timerRef = setTimeout(() => {
      setTimer(timer - 1);
    }, 1000);
    return () => clearTimeout(timerRef);
  }, [timer]);
  const resetOptions = () => {
    setIsSubmitted(false);
    document.getElementById("button-group")?.childNodes.forEach((node) => {
      node.classList.remove("bg-green-500");
      node.classList.remove("bg-red-500");
    });
  };

  return (
    <div className="w-1/3 border-2 p-10 rounded-2xl bg-slate-100 shadow-md min-h-[20rem]">
      <h1>Time left: {timer}</h1>
      <h2>
        {currentQuestionNumber + 1}. {questionItem.question}
      </h2>
      <div className="grid grid-cols-2 gap-5 my-10" id="button-group">
        {questionItem.options.map((option, index) => {
          return (
            <button
              id={index.toString()}
              key={index}
              className=" bg-blue-400 w-full rounded-md py-2 text-white shadow-md hover:bg-yellow-500"
              onClick={(e) => {
                submitAnswer(e, index);
              }}
              disabled={isSubmitted}
            >
              {option}
            </button>
          );
        })}
      </div>
      {isSubmitted && (
        <button
          className="bg-green-400 p-2 rounded-lg text-white font-bold w-full"
          onClick={getNextQuestion}
        >
          {currentQuestionNumber < questionSet.length - 1
            ? "Next Question"
            : "Submit Results"}
        </button>
      )}
    </div>
  );
}
