import { Outlet } from "react-router";

import { useSelector } from "react-redux";
export function Layout() {
  const quest = useSelector(
    (state: any) => state.questionState.currentQuestionNumber
  );
  const name = useSelector((state: any) => state.nameState.name);
  return (
    <div>
      <div className="min-h-screen flex items-center justify-center m-0 flex-col gap-2 min-w-[20rem]">
        <h1 className="text-center text-2xl font-mono font-extrabold">
          {name ? "Hello " + name + "!" : ""}
        </h1>
        <Outlet />
      </div>
    </div>
  );
}
