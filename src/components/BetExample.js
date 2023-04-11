import React, { useState } from "react";

const BetExample = ({ value }) => {
  const [bet, setBet] = useState(0);
  const [playerChips, setPlayerChips] = useState(1000);
  const [betAmount, setBetAmount] = useState(0);

  const handleBetAmountChange = (event) => {
    setBetAmount(parseInt(event.target.value));
  };

  let chipColor;

  // Determine the color of the chip based on its value
  switch (value) {
    case 1:
      chipColor = "white";
      break;
    case 5:
      chipColor = "red";
      break;
    case 10:
      chipColor = "blue";
      break;
    case 25:
      chipColor = "green";
      break;
    default:
      chipColor = "black";
  }

  const handleBet = () => {
    if (betAmount <= playerChips) {
      setPlayerChips(playerChips - betAmount);
      setBet(bet + betAmount);
      setBetAmount(0);
    }
  };

  const handleRaise = () => {
    // Ask the user how much they want to raise
    const amount = prompt("Enter the amount you want to raise:");

    // Parse the amount as a number
    const raiseAmount = parseFloat(amount);

    // Make sure the raise amount is valid (i.e. a number and not greater than the current balance)
    if (!isNaN(raiseAmount) && raiseAmount <= playerChips) {
      // Deduct the raise amount from the balance and add it to the bet
      setPlayerChips(playerChips - raiseAmount);
      setBet(bet + raiseAmount);
    } else {
      // If the raise amount is invalid, show an error message
      alert("Invalid raise amount");
    }
  };

  return (
    <div className="text-white flex flex-col justify-center items-center font-bold text-xl min-h-screen">
      <div className="text-pink-500 mb-10">
        <h2>Current bet: {bet}</h2>
        <h2>Player chips: {playerChips}</h2>
      </div>
      <label className="text-purple-400">
        Bet amount:{"  "}
        <input
          className="text-black text-center mr-5"
          type="number"
          value={betAmount}
          onChange={handleBetAmountChange}
        />
      </label>
      <div className="flex justify-between p-5 items-center">
        <button className="p-10 mr-10 bg-blue-500" onClick={handleBet}>
          Bet
        </button>

        <button className="p-10 mr-10 bg-blue-500" onClick={handleRaise}>
          Raise
        </button>
      </div>
    </div>
  );
};

export default BetExample;
