import React, { useContext, useMemo } from "react";
import { CardContext } from "../context/context";

const AICards = () => {
  const Card_Data = useContext(CardContext);

  const randomIndex2 = useMemo(() => {
    return Math.floor(Math.random() * (Card_Data?.cards?.length - 6));
  }, [Card_Data]);

  return (
    <div className=" inset-0 flex justify-center items-center w-full">
      {Card_Data
        ? Card_Data?.cards
            ?.slice(randomIndex2, randomIndex2 + 5)
            .map((data, index) => {
              const Img_src = "../images/Playing_Cards/" + data?.img;
              return (
                <div
                  className=" flex justify-center items-center mx-1  "
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

//CARD BACK SIDE

export const CardBack = () => {
  let Card = [1, 2, 3, 4, 5];

  return (
    <div className=" inset-0 flex justify-center items-center w-full">
      {Card.map((data, index) => {
        const Img_src = "../images/Game_Assest/card-back2.png";
        return (
          <div
            className=" flex justify-center items-center mx-1 cursor-pointer"
            key={index}
          >
            <img src={Img_src} alt={"hidden-card"} />
          </div>
        );
      })}
    </div>
  );
};
//CARD BACK SIDE

export default AICards;
