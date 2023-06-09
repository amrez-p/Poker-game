import React, { useContext, useMemo } from "react";
import { CardContext } from "../context/context";

const Cards = () => {
  const Card_Data = useContext(CardContext);
  // let poker = []

  const randomIndex = useMemo(() => {
    return Math.floor(Math.random() * (Card_Data?.cards?.length - 13));
    // Card_Data?.cards?.slice(randomIndex, randomIndex + 5);
  }, [Card_Data]);

  //   const dealCards = (pokerPlayer) => {
  //   for (i = 0; i < 5; i++) {
  //     Card_Data?.cards?.length = Card_Data?.cards?.length;
  //     randomIndex = Math.floor(Math.random() * Card_Data?.cards?.length);
  //     poker.push([randomIndex]);
  //   }
  // };

  return (
    <div className=" inset-0 flex justify-center items-center w-full">
      {Card_Data
        ? Card_Data?.cards
            ?.slice(randomIndex, randomIndex + 5)
            .map((data, index) => {
              const Img_src = "../images/Playing_Cards/" + data?.img;
              return (
                <div
                  className=" flex justify-center items-center mx-1 cursor-pointer"
                  key={data?.id || index}
                >
                  <img src={Img_src} alt={data?.alt} />
                </div>
              );
            })
        : null}
    </div>
  );
};

export default Cards;
