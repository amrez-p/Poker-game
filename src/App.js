import React from "react";
import Menu from "./components/Menu";
import Game from "./components/Game";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Example from "./components/Example";
import BetExample from "./components/BetExample";

function App() {
  // console.log(Data);

  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" index element={<Menu />} />
        <Route path="/Game" element={<Game />} />
        <Route path="/Example" element={<Example />} />
        <Route path="/BetExample" element={<BetExample />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
