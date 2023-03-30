import { useSelector } from "react-redux";
import { Route, Routes } from "react-router";
import { BrowserRouter } from "react-router-dom";
import "./App.css";
import { HomeScreen } from "./modules/components/home-screen/home-screen";
import { Layout } from "./modules/components/layout/layout";
import { Question } from "./modules/components/question/question";
import { ScoreBoard } from "./modules/components/scoreboard/scoreboard";

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Layout />}>
          <Route path="/" element={<HomeScreen />} />
          <Route path="/question" element={<Question />} />
          <Route path="/scoreboard" element={<ScoreBoard />} />
        </Route>
      </Routes>
    </BrowserRouter>
  );
}

export default App;
