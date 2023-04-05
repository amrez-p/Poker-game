const Player = {
  currentHand: [],
  currentHandValues: [],
  currentHandSuits: [],
  handWorth: 0,
  handTitle: "",
  pairCards: 0,
};

export const CheckFlush = ({ state = Player }) => {
  let suitCase1 = ["clubs", "clubs", "clubs", "clubs", "clubs"];
  let suitCase2 = ["diamonds", "diamonds", "diamonds", "diamonds", "diamonds"];
  let suitCase3 = ["hearts", "hearts", "hearts", "hearts", "hearts"];
  let suitCase4 = ["spades", "spades", "spades", "spades", "spades"];
  if (state.currentHandSuits.toString() === suitCase1.toString()) {
    state.handTitle = "Clubs Flush";
    return 6.001;
  } else if (state.currentHandSuits.toString() === suitCase2.toString()) {
    state.handTitle = "Diamonds Flush";
    return 6.002;
  } else if (state.currentHandSuits.toString() === suitCase3.toString()) {
    state.handTitle = "Hearts Flush";
    return 6.003;
  } else if (state.currentHandSuits.toString() === suitCase4.toString()) {
    state.handTitle = "Spades Flush";
    return 6.004;
  } else {
    return 0;
  }
};
// const Reducer = (state = Player, action) => {
//   switch (action.type) {
//     case first:
//       return state;

//     default:
//       return state;
//   }
// };

// export default Reducer;
