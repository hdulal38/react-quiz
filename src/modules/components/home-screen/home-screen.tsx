import { useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { GameStatusActions, NameActions } from "../../../shared/actions";
import { useNavigate, Navigate } from "react-router";
export function HomeScreen() {
  const [name, setName] = useState("");
  const nameState = useSelector((state: any) => state.nameState.name);
  const navigate = useNavigate();
  const dispatch = useDispatch();
  if (nameState) {
    return <Navigate to="/question" />;
  }
  function handleSubmit(e: React.SyntheticEvent) {
    e.preventDefault();
    if (!name) {
      return;
    }
    dispatch({ type: NameActions.SET_NAME, payload: name });
    dispatch({ type: GameStatusActions.START_GAME });
    navigate("/question");
  }
  function handleChange(e: React.SyntheticEvent<HTMLElement> | any) {
    setName(e.target.value);
  }
  return (
    <div className="w-1/3 border-2 p-10 rounded-2xl bg-slate-100 shadow-md">
      <h1 className="font-semibold text-xl text-center">
        Welcome to Quiz Mania!
      </h1>
      <h2 className="text-center">Enter your name</h2>
      <form
        className="flex flex-col"
        onSubmit={(e: React.FormEvent<HTMLFormElement>) => {
          handleSubmit(e);
        }}
      >
        <input
          type="text"
          name="name"
          placeholder="Enter your name"
          className="input-text my-3"
          value={name}
          onChange={handleChange}
        />
        <button
          type="submit"
          className="bg-green-400 p-2 rounded-lg text-white font-bold"
        >
          Submit
        </button>
      </form>
    </div>
  );
}
