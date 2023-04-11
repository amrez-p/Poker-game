import { useContext, useEffect, useState } from "react";
import { CardContext } from "./context";

const Player = {
  currentHand: [],
  currentHandValues: [],
  currentHandSuits: [],
  handWorth: 0,
  handTitle: "",
  pairCards: 0,
};

export const usePokerHand = () => {
  const [cards, setCards] = useState([
    "clubs",
    "clubs",
    "clubs",
    "clubs",
    "clubs",
  ]);
  const [hand, setHand] = useState("");

  console.log(cards);
  const CheckFlush = (state = cards) => {
    let suitCase1 = ["clubs", "clubs", "clubs", "clubs", "clubs"];
    let suitCase2 = [
      "diamonds",
      "diamonds",
      "diamonds",
      "diamonds",
      "diamonds",
    ];
    let suitCase3 = ["hearts", "hearts", "hearts", "hearts", "hearts"];
    let suitCase4 = ["spades", "spades", "spades", "spades", "spades"];

    if (state.toString() === suitCase1.toString()) {
      setHand("Clubs Flush");
      return 6.001;
    } else if (state.toString() === suitCase2.toString()) {
      setHand("Diamonds Flush");
      return 6.002;
    } else if (state.toString() === suitCase3.toString()) {
      setHand("Hearts Flush");
      return 6.003;
    } else if (state.toString() === suitCase4.toString()) {
      setHand("Spades Flush");
      return 6.004;
    } else {
      return 0;
    }
  };

  return { cards, setCards, CheckFlush, hand, setHand };
};

// const CheckPairs = (state = cards) => {
//   let pairNum = 0;
//   for (let i = 0; i < 4; i++) {
//     let nextNum = i + 1;
//     if (state[i] === state[nextNum]) {
//       state.pairCards = state[i];
//       pairNum++;
//     }
//   }

//   for (let i = 0; i < 3; i++) {
//     if (state[i] === state[i + 1] && state[i] === state[i + 2]) {
//       pairNum++;
//       state.pairCards = state[i];
//     }
//   }
//   for (let i = 0; i < 2; i++) {
//     if (
//       state[i] === state[i + 1] &&
//       state[i] === state[i + 2] &&
//       state[i] === state[i + 3]
//     ) {
//       state.pairCards = state[i];
//       pairNum++;
//     }
//   }
//   return pairNum;
// };
// const CheckHighCard = (state = cards, action) => {
//   switch (action) {
//     case "14":
//       state.handWorth += 0.14;
//       return "Ace";
//       break;
//     case "13":
//       state.handWorth += 0.13;
//       return "King";
//       break;
//     case "12":
//       state.handWorth += 0.12;
//       return "Queen";
//       break;
//     case "11":
//       state.handWorth += 0.11;
//       return "Jack";
//       break;
//     case "10":
//       state.handWorth += 0.1;
//       return "10";
//       break;
//     case "9":
//       state.handWorth += 0.09;
//       return "9";
//       break;
//     case "8":
//       state.handWorth += 0.08;
//       return "8";
//       break;
//     case "7":
//       state.handWorth += 0.07;
//       return "7";
//       break;
//     case "6":
//       state.handWorth += 0.06;
//       return "6";
//       break;
//     case "5":
//       state.handWorth += 0.05;
//       return "5";
//       break;
//     case "4":
//       state.handWorth += 0.04;
//       return "4";
//       break;
//     case "3":
//       state.handWorth += 0.03;
//       return "3";
//       break;
//     case "2":
//       state.handWorth += 0.02;
//       return "2";
//       break;
//   }
// };
