import React from "react";

const Cards = ({ Data }) => {
  // console.log(Data);
  return (
    <div className=" inset-0 flex justify-center items-center w-full">
      {Data
        ? Data?.cards?.map((data, index) => {
            const Img_src = "../images/Playing_Cards/" + data?.img;
            const total_card = data?.id;
            return (
              <div
                className=" flex justify-center items-center mx-1"
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
