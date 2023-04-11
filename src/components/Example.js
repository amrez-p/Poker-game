import React, { useContext, useEffect, useState } from "react";
import { CardContext } from "../context/context";
import { usePokerHand } from "../context/usePokerHand";

const Example = () => {
  // const { cards, setCards, hand, setHand } = usePokerHand();
  const Card_ID = useContext(CardContext);
  const [hand, setHand] = useState("");
  // const [cards, setCards] = useState([]);
  const [currentValue, setCurrentValue] = useState([]);
  const [currentSuit, setCurrentSuit] = useState([]);
  const [currentCards, setCurrentCards] = useState([]);
  const [pairCard, setPairCard] = useState(0);
  // console.log(Card_ID);
  // console.log(currentSuit);
  console.log(hand);
  // const Card_data = () => {
  //   Card_ID?.forEach((card) => {
  //     currentValue.push(card.value);
  //     currentSuit.push(card.suit);
  //   });
  // };
  currentValue.sort((a, b) => a - b);
  // console.log(currentCards);

  console.log(currentValue);
  // console.log(currentSuit);

  useEffect(() => {
    // Card_data();
    checkPairs(currentValue);
    checkStraight();
    CheckFlush();
  }, [currentCards, currentValue, currentSuit]);

  const CheckFlush = (state = currentSuit) => {
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

    if (state?.toString() === suitCase1.toString()) {
      setHand("Clubs Flush");
      return 6.001;
    } else if (state?.toString() === suitCase2.toString()) {
      setHand("Diamonds Flush");
      return 6.002;
    } else if (state?.toString() === suitCase3.toString()) {
      setHand("Hearts Flush");
      return 6.003;
    } else if (state?.toString() === suitCase4.toString()) {
      setHand("Spades Flush");
      return 6.004;
    } else {
      return 0;
    }
  };

  const checkStraight = (state = currentValue) => {
    let case1 = [2, 3, 4, 5, 14];
    let case2 = [2, 3, 4, 5, 6];
    let case3 = [3, 4, 5, 6, 7];
    let case4 = [4, 5, 6, 7, 8];
    let case5 = [5, 6, 7, 8, 9];
    let case6 = [6, 7, 8, 9, 10];
    let case7 = [7, 8, 9, 10, 11];
    let case8 = [8, 9, 10, 11, 12];
    let case9 = [9, 10, 11, 12, 13];
    let case10 = [10, 11, 12, 13, 14];
    if (state.toString() === case1.toString()) {
      setHand("5 High Straight");
      return 5.01;
    } else if (state.toString() === case2.toString()) {
      setHand("6 High Straight");
      return 5.02;
    } else if (state.toString() === case3.toString()) {
      setHand("7 High Straight");
      return 5.03;
    } else if (state.toString() === case4.toString()) {
      setHand("8 High Straight");
      return 5.04;
    } else if (state.toString() === case5.toString()) {
      setHand("9 High Straight");
      return 5.05;
    } else if (state.toString() === case6.toString()) {
      setHand("10 High Straight");
      return 5.06;
    } else if (state.toString() === case7.toString()) {
      setHand("Jack High Straight");
      return 5.07;
    } else if (state.toString() === case8.toString()) {
      setHand("Queen High Straight");
      return 5.08;
    } else if (state.toString() === case9.toString()) {
      setHand("King High Straight");
      return 5.09;
    } else if (state.toString() === case10.toString()) {
      setHand("Ace High Straight");
      return 5.1;
    } else {
      return 0;
    }
  };

  // const checkPairs = (card = currentValue) => {
  //   let pairNum = 0;
  //   for (i = 0; i < 4; i++) {
  //     let nextNum = i + 1;
  //     if (card[i].toString() === card[nextNum].toString()) {
  //       Pair_card = card[i];
  //       pairNum++;
  //     }
  //   }
  // };
  const checkPairs = (currentValue) => {
    let pairNum = 0;
    // One Pair or Two Pair //
    for (let i = 0; i < 4; i++) {
      let nextNum = i + 1;
      if (currentValue[i] === currentValue[nextNum]) {
        pairNum++;
      }
    }
    // One Pair or Two Pair //

    // Three Pair //
    for (let i = 0; i < 3; i++) {
      if (
        currentValue[i] === currentValue[i + 1] &&
        currentValue[i] === currentValue[i + 2]
      ) {
        pairNum++;
      }
    }
    // Three Pair //

    //  Four Pair //
    for (let i = 0; i < 2; i++) {
      if (
        currentValue[i] === currentValue[i + 1] &&
        currentValue[i] === currentValue[i + 2] &&
        currentValue[i] === currentValue[i + 3]
      ) {
        pairNum++;
      }
    }
    //  Four Pair //
    console.log(pairNum);
    return pairNum;
  };

  // const checkHand = (state = currentCards) => {
  //   state.forEach((element) => {
  //     pokerPlayer.currentHandValues.push(element.value);
  //     pokerPlayer.currentHandSuits.push(element.suit);
  //   });
  //   pokerPlayer.currentHandValues.sort((a, b) => a - b);
  //   if (checkStraight(pokerPlayer) != 0 && checkFlush(pokerPlayer) != 0) {
  //     pokerPlayer.handWorth =
  //       checkStraight(pokerPlayer) + checkFlush(pokerPlayer);
  //     pokerPlayer.handTitle = "Straight Flush";
  //     return;
  //   } else if (checkPairs(pokerPlayer) === 5) {
  //     pokerPlayer.handWorth += 8;
  //     pokerPlayer.handTitle = `4 ${checkHighCard(
  //       pokerPlayer,
  //       pokerPlayer.pairCards,
  //     )}'s!!`;
  //     return;
  //   } else if (checkPairs(pokerPlayer) === 4) {
  //     pokerPlayer.handWorth += 7;
  //     pokerPlayer.handTitle = `Full House with 3 ${checkHighCard(
  //       pokerPlayer,
  //       pokerPlayer.pairCards,
  //     )}'s`;
  //     return;
  //   } else if (checkFlush(pokerPlayer) != 0) {
  //     pokerPlayer.handWorth = checkFlush(pokerPlayer);
  //     return;
  //   } else if (checkStraight(pokerPlayer) != 0) {
  //     pokerPlayer.handWorth = checkStraight(pokerPlayer);
  //     return;
  //   } else if (checkPairs(pokerPlayer) === 3) {
  //     pokerPlayer.handWorth += 4;
  //     pokerPlayer.handTitle = `3 ${checkHighCard(
  //       pokerPlayer,
  //       pokerPlayer.pairCards,
  //     )}'s`;
  //     return;
  //   } else if (checkPairs(pokerPlayer) === 2) {
  //     pokerPlayer.handWorth = 3;
  //     pokerPlayer.handTitle = "2 pair";
  //     return;
  //   } else if (checkPairs(pokerPlayer) === 1) {
  //     pokerPlayer.handWorth += 2;

  //     pokerPlayer.handTitle = `a pair of ${checkHighCard(
  //       pokerPlayer,
  //       pokerPlayer.pairCards,
  //     )}'s`;
  //     return;
  //   } else if (checkHighCard(pokerPlayer, pokerPlayer.currentHandValues[4])) {
  //     pokerPlayer.handTitle = `${checkHighCard(
  //       pokerPlayer,
  //       pokerPlayer.currentHandValues[4],
  //     )} High`;
  //   } else {
  //     alert("error in checking hand worth");
  //   }
  // };

  //MAIN CARD LOGIC

  const drawCards = () => {
    const deck = [];

    for (let cardId in Card_ID) {
      const card = Card_ID[cardId];
      deck.push(card);
    }

    const selectedCards = [];
    const selectedValue = [];
    const selectedSuits = [];

    for (let i = 0; i < 5; i++) {
      const index = Math.floor(Math.random() * deck.length);
      selectedCards.push(deck[index]);
      selectedSuits.push(deck[index].suit);
      selectedValue.push(deck[index].value);
      deck.splice(index, 1);

      setCurrentValue(selectedValue);
      setCurrentSuit(selectedSuits);
      setCurrentCards(selectedCards);
    }
  };

  //MAIN CARD LOGIC

  return (
    <div className=" inset-0 h-screen">
      <div className="flex flex-col justify-center items-center h-full ">
        <button
          className="mb-20 text-white"
          onClick={() => {
            drawCards();
            // Card_data();
          }}
        >
          Draw 5 Cards
        </button>
        <div className="flex  ml-5 text-white">
          {currentCards?.map((card, index) => {
            // const data = Card_ID?.find((c) => c.name == card);
            const Img_src = "../images/Playing_Cards/" + card?.imagePath;
            return (
              <div className="ml-10" key={card?.id || index}>
                <img src={Img_src} alt={card?.suit} />
              </div>
            );
          })}
        </div>
        <p className="text-white">{currentCards ? `You won by ${hand}` : ""}</p>
      </div>
    </div>
  );
};

export default Example;
