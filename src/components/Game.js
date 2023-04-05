import React, { useState } from "react";
import { Link } from "react-router-dom";
import Cards from "./Cards";
import AICards, { CardBack } from "./AICards";

const Game = () => {
  const [score, setScore] = useState({
    User: 0,
    AI: 0,
  });
  const [Toggle, setToggle] = useState(false);
  const [StartToggle, setStartToggle] = useState(false);

  if (score.User >= 10 || score.AI >= 10) {
    setScore({
      User: 0,
      AI: 0,
    });
  } else {
  }

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
          User Wins: <span>{score.User || "0"}</span>
        </p>
        <p>
          AI Wins: <span>{score.AI || "0"}</span>
        </p>
      </div>
      {/* Poker Match */}
      <PokerMatch
        score={score}
        StartToggle={StartToggle}
        setStartToggle={setStartToggle}
        setToggle={setToggle}
        Toggle={Toggle}
      />
      {/* Poker Match */}
    </div>
  );
};

export default Game;

const PokerMatch = ({
  score,
  StartToggle,
  setStartToggle,
  Toggle,
  setToggle,
}) => {
  if (!StartToggle) {
    return (
      <div className="fixed inset-0 flex flex-col justify-center items-center ">
        <p
          className="Deal"
          onClick={() => {
            setStartToggle(!StartToggle);
            setToggle(true);
          }}
        >
          Deal
        </p>
        <p className="text-gray-500 font-thin mb-2 ">
          Click the <span className="font-lobster">"Deal"</span> button to begin
        </p>
      </div>
    );
  }
  return (
    <div className="fixed inset-0 flex flex-col justify-center items-center ">
      {(!Toggle && <AICards />) || <CardBack />}

      {(Toggle && (
        <p
          className="Deal"
          onClick={() => {
            setToggle(!Toggle);
            score.User++;
          }}
        >
          ReDeal
        </p>
      )) || (
        <p
          className="Retry"
          onClick={() => {
            setStartToggle(!StartToggle);
          }}
        >
          Try Again?
        </p>
      )}

      {Toggle ? (
        <p className="text-gray-500 font-thin mb-2 ">
          Click the <span className="font-lobster">"ReDeal"</span> button
        </p>
      ) : (
        <p className="text-gray-500 font-thin mb-2 ">
          <span className="font-lobster">{"You Win!" || "You Lose!"}</span>
        </p>
      )}

      <Cards StartToggle={StartToggle} />
    </div>
  );
};
