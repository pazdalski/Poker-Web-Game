import { BrowserRouter, Route, Routes } from "react-router-dom";
import "./index.css";
import Game from "./pages/Game/Game";
import Menu from "./pages/Menu/Menu";
import { useState } from "react";

function App() {
  const [botReactionTimeChoice, setBotReactionTimeChoice] = useState("2");
  const [isSoundOn, setIsSoundOn] = useState(false);

  return (
    <div className="App">
      <BrowserRouter>
        <Routes>
          <Route
            path="/game"
            element={
              <Game
                botReactionTimeChoice={botReactionTimeChoice}
                isSoundOn={isSoundOn}
              />
            }
          />
          <Route
            path="/"
            element={
              <Menu
                setBotReactionTimeChoice={setBotReactionTimeChoice}
                botReactionTimeChoice={botReactionTimeChoice}
                setIsSoundOn={setIsSoundOn}
                isSoundOn={isSoundOn}
              />
            }
          />
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
