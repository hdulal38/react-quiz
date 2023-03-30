import { useSelector } from "react-redux";
import { GameStatusActions } from "../../../shared/actions";
import { Navigate } from "react-router";
export function ScoreBoard() {
  const score = useSelector((state: any) => state.scoreState.currentScore);
  const name = useSelector((state: any) => state.nameState.name);
  const gameStatus = useSelector((state: any) => state.gameStatusState.status);
  if (gameStatus !== GameStatusActions.END_GAME) {
    return <Navigate to="/question" />;
  }
  const restart = () => {
    return <Navigate to="/" />;
  };
  return (
    <div className="w-1/3 border-2 p-10 rounded-2xl bg-slate-100 shadow-md min-h-[20rem] text-center">
      <h1 className="text-4xl my-2">{name}</h1>
      <div className="text-xl my-2">scored</div>
      <div className="text-2xl">{score} point(s)!</div>
      <button
        className="bg-green-400 p-2 rounded-lg text-white font-bold w-full my-10"
        onClick={restart}
      >
        Play Again!
      </button>
    </div>
  );
}
