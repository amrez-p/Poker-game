import React from "react";
import { Link } from "react-router-dom";
import Cards from "./Cards";

const Game = ({ Data }) => {
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
      {/* Card Deck */}
      <CardDeck Data={Data} />
      {/* Card Deck */}
    </div>
  );
};

export default Game;

const CardDeck = ({ Data }) => {
  return (
    <div className="fixed inset-0 flex flex-col justify-center items-center ">
      {/* <div class="aiBar"></div> */}
      <Cards Data={Data} />

      {/* <div class=""> */}
      <p className="Deal">Deal</p>
      {/* <img
          class="invisible"
          id="winImg"
          src="images/Playing_Cards/winImg.png"
          alt=""
        /> */}
      <p className="text-gray-500 font-thin ">
        Click the <span className="font-lobster">"Deal"</span> button to begin
      </p>

      <Cards Data={Data} />
      {/* <div class="buttons">
          <p class="reset invisible">Play again?</p>
        </div> */}
      {/* </div> */}

      {/* <div class="userBar"></div> */}
    </div>
  );
};
