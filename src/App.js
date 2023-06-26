import { BrowserRouter, Route, Routes } from "react-router-dom";
import "./index.css";
import Game from "./pages/Game/Game";

function App() {
  return (
    <div className="App">
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Game />} />
          <Route path="/menu" element={""} />
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
