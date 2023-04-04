import React, { useState } from "react";
import { Link } from "react-router-dom";
import Cards from "./Cards";

const Game = () => {
  const [Toggle, setToggle] = useState(false);

  return (
    <div className=" text-white flex justify-between items-center text-2xl m-5 font-playball font-bold select-none">
      <div className="flex z-10">
        <Link className="hover:text-red-600 mr-2 select-none" to="/">
          Home
        </Link>
        <img src="./images/Game_Assest/casino-chip.png" alt="" />
      </div>

      <div className="flex justify-around ">
        <p className="mr-5">
          User Wins: <span>{"" || "0"}</span>
        </p>
        <p>
          AI Wins: <span>{"" || "0"}</span>
        </p>
      </div>
      {/* <UserBar Data={Data} /> */}
      {/* Poker Match */}
      <PokerMatch Toggle={Toggle} setToggle={setToggle} />
      {/* Poker Match */}
    </div>
  );
};

export default Game;

const PokerMatch = ({ Toggle, setToggle }) => {
  return (
    <div className="fixed inset-0 flex flex-col justify-center items-center ">
      <Cards />
      {Toggle ? (
        <p className="Deal" onClick={() => setToggle(!Toggle)}>
          Deal
        </p>
      ) : (
        <p className="Retry" onClick={() => setToggle(!Toggle)}>
          Try Again?
        </p>
      )}

      {/* <p className="Deal">Deal</p> */}
      {Toggle ? (
        <p className="text-gray-500 font-thin mb-2 ">
          Click the <span className="font-lobster">"Deal"</span> button to begin
        </p>
      ) : (
        <p className="text-gray-500 font-thin mb-2 ">
          <span className="font-lobster">"You Win!"</span>
        </p>
      )}

      <Cards />
      {/* <div class="buttons">
          <p class="reset invisible">Play again?</p>
        </div> */}
    </div>
  );
};
