import React from "react";
import Menu from "./components/Menu";
import Game from "./components/Game";
import { BrowserRouter, Routes, Route } from "react-router-dom";

function App() {
  // console.log(Data);

  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" index element={<Menu />} />
        <Route path="/Game" element={<Game />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
