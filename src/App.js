import { BrowserRouter, Route, Routes } from "react-router-dom";
import "./index.css";
import Game from "./pages/Game/Game";
import Menu from "./pages/Menu/Menu";

function App() {
  return (
    <div className="App">
      <BrowserRouter>
        <Routes>
          <Route path="/game" element={<Game />} />
          <Route path="/" element={<Menu />} />
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
