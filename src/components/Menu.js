import React from "react";
import { Link } from "react-router-dom";
const Menu = () => {
  return (
    <div className=" fixed flex inset-0 justify-center items-center font-lobster ml-40 font-bold">
      <Link
        className="text-white text-4xl -mr-48 hover:text-red-600"
        to="/Game"
      >
        Play Game
      </Link>
      <img
        className="scale-20"
        src="./images/Playing_Cards/handGif.gif"
        alt="card-animation"
      />
    </div>
  );
};

export default Menu;
