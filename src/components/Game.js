import React from "react";
import { Link } from "react-router-dom";

const Game = () => {
  return (
    <div className=" text-white flex justify-between items-center text-2xl m-5 font-lobster font-bold select-none">
      <div className="flex z-10">
        <Link className="hover:text-red-600 mr-2" to="/">
          Home
        </Link>
        <img
          class="navImg"
          src="./images/Playing_Cards/casino-chip.png"
          alt=""
        />
      </div>

      <div className="flex justify-around font-playball ">
        <p className="mr-5">
          User Wins: <span>{"" || "0"}</span>
        </p>
        <p>
          AI Wins: <span>{"" || "0"}</span>
        </p>
      </div>
      {/* Card Deck */}
      <CardDeck />
      {/* Card Deck */}
    </div>
  );
};

export default Game;

const CardDeck = () => {
  return (
    <div className="fixed inset-x-0 flex justify-center items-center ">
      <div class="aiBar"></div>

      <div class="middleArea">
        <p class="deal">Deal</p>
        <p class="redeal invisible">Redeal</p>
        <img
          class="invisible"
          id="loseImg"
          src="images/Playing_Cards/joker.png"
          alt=""
        />
        <img
          class="invisible"
          id="winImg"
          src="images/Playing_Cards/winImg.png"
          alt=""
        />
        <p className="text-gray-500 font-thin ">
          Click the "Deal" button to begin
        </p>
        <div class="buttons">
          <p class="reset invisible">Play again?</p>
        </div>
      </div>

      <div class="userBar"></div>
    </div>
  );
};
