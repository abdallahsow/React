import "./App.css";
import { useState, useEffect } from "react";
import Header from "./components/Header";
import Dice from "./components/Dice";
import { nanoid } from "nanoid";

const App = function () {
  const [dice, setDice] = useState(allNewDice());
  const [tenzies, setTenzies] = useState(false);

  useEffect(() => {
    const allHeld = dice.every((die) => die.isHeld);
    const firstValue = dice[0].value;
    const allSameValue = dice.every((die) => die.value === firstValue);
    if (allHeld && allSameValue) {
      setTenzies(true);
      console.log("You won!");
    }
  }, [dice]);

  function allNewDice() {
    const newDice = [];
    for (let i = 0; i < 10; i++) {
      newDice.push({
        id: nanoid(),
        value: Math.ceil(Math.random() * 6),
        isHeld: false,
      });
    }
    return newDice;
  }

  function rollDice() {
    setDice(function () {
      return dice.map(function (die) {
        return die.isHeld === true
          ? die
          : {
              ...die,
              value: Math.ceil(Math.random() * 6),
            };
      });
    });
  }

  function hold(dieId) {
    setDice(
      dice.map((die) => {
        return die.id === dieId ? { ...die, isHeld: !die.isHeld } : die;
      })
    );
  }

  return (
    <main className="app">
      <div className="container">
        <div className="game">
          <Header />
          <div className="grid-layout">
            {dice.map((die) => (
              <Dice key={die.id} handleClick={hold} {...die} />
            ))}
          </div>
          <button onClick={rollDice} className="roll-dice">
            Roll
          </button>
        </div>
      </div>
    </main>
  );
};

export default App;
