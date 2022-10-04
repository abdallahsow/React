import "./App.css";
import { useState } from "react";
import Header from "./components/Header";
import Dice from "./components/Dice";
import { nanoid } from "nanoid";

const App = function () {
  const [dice, setDice] = useState(allNewDice());

  function allNewDice() {
    const newDice = [];
    for (let i = 0; i < 10; i++) {
      newDice.push({ id: nanoid(), value: Math.ceil(Math.random() * 6), isHeld: false });
    }
    return newDice;
  }

  function rollDice() {
    setDice(allNewDice());
  }

  function hold(dieId) {
    const filteredDice = []
    dice.filter((die) => {
      if (die.id === dieId) {
        filteredDice.push({ ...die, isHeld: !die.isHeld })
      } else {
        filteredDice.push(die);
      }
      return filteredDice;
    })
    setDice(filteredDice);
    console.log(filteredDice)
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
