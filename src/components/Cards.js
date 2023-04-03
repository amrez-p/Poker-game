import React, { useContext } from "react";
import { CardContext } from "../context/context";

const Cards = () => {
  const Card_Data = useContext(CardContext);
  // let total = 0;

  // for (let i = 0; i < myArray.length; i++) {
  //   total += myArray[i];
  // }

  //   const myArray = [];

  //   const randomIndex = Math.floor(Math.random() * (Data?.cards?.length - 4));
  //   const resultArray = myArray
  //     .slice(randomIndex, randomIndex + 5)
  //     .map((element) => {
  //       return element;
  //     });

  //   console.log(resultArray); // Output: [6, 7, 8, 9, 10]
  return (
    <div className=" inset-0 flex justify-center items-center w-full">
      {Card_Data
        ? Card_Data?.cards?.map((data, index) => {
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
