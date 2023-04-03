import React from "react";
import Menu from "./components/Menu";
import GamePage from "./components/GamePage";
import { BrowserRouter, Routes, Route } from "react-router-dom";

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" index element={<Menu />} />
        <Route path="/GamePage" element={<GamePage />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
