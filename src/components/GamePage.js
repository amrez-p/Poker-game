import React from "react";
import { Link } from "react-router-dom";

const GamePage = () => {
  return (
    <div className="text-white flex justify-between items-center text-2xl m-5 font-lobster font-bold">
      <div className="flex">
        <Link className=" hover:text-red-600 mr-2" to="/">
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
    </div>
  );
};

export default GamePage;
