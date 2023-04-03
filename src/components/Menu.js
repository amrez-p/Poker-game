import React from "react";
import { Link } from "react-router-dom";
const Menu = () => {
  return (
    <div className=" fixed flex inset-0 justify-center items-center font-playball ml-40 font-bold select-none">
      <Link
        className="text-white text-4xl -mr-48 hover:text-red-600"
        to="/Game"
      >
        Play Game
      </Link>
      <img
        className="scale-20"
        src="./images/Game_Assest/handGif.gif"
        alt="card-animation"
      />
    </div>
  );
};

export default Menu;
