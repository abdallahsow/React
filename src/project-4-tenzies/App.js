import "./App.css";
import { useState } from "react";
import Header from "./components/Header";
import Dice from "./components/Dice";

const App = function () {
  const [dice, setDice] = useState(allNewDice());
  
  function allNewDice() {
    const newDice = [];
    for (let i = 0; i < 10; i++) {
      newDice.push({value: Math.ceil(Math.random() * 6), isHeld: false});
    }
    return newDice;
  }

  function rollDice() {
    setDice(allNewDice());
  }

  return (
    <main className="app">
      <div className="container">
        <div className="game">
          <Header />
          <div className="grid-layout">
            {dice.map((num, index) => (
              <Dice key={index} dice={num.value} />
            ))}
          </div>
          <button onClick={rollDice} className="roll-dice">Roll</button>
        </div>
      </div>
    </main>
  );
};

export default App;
