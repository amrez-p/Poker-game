import React, { useEffect, useState } from "react";
import Menu from "./components/Menu";
import Game from "./components/Game";
import { BrowserRouter, Routes, Route } from "react-router-dom";

function App() {
  const [Data, setData] = useState({});
  useEffect(() => {
    fetch("/Data.json")
      .then((res) => res.json())
      .then((data) => {
        setData(data);
      });
  }, []);

  // console.log(Data);

  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" index element={<Menu />} />
        <Route path="/Game" element={<Game Data={Data} />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
