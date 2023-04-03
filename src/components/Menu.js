import React from "react";

const Menu = () => {
  return (
    <div className=" fixed flex inset-0 justify-center items-center font-lobster ml-40">
      <a
        className="text-white text-4xl -mr-48 hover:text-red-600"
        href="gamePage.html"
      >
        Play Game
      </a>
      <img
        className="scale-20"
        src="./images/Playing_Cards/handGif.gif"
        alt="card-animation"
      />
    </div>
  );
};

export default Menu;
