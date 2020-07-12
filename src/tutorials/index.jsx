import Board from "./board";
import React, { useState } from "react";
import "./index.css";

const Games = () => {
  const [xIsNext, setXIsNext] = useState(true);
  const [stepNumber, setStepNumber] = useState(null);
  const [histories, setHistory] = useState([
    {
      squares: Array(9).fill(null),
    },
  ]);

  const onClick = (i) => {
    const _history = histories.slice();
    const _current = _history[_history.length - 1];
    const _squares = _current.squares.slice();
    if (calculateWinner(_squares) || _squares[i]) {
      return;
    }
    _squares[i] = xIsNext ? "X" : "O";
    setXIsNext(!xIsNext);
    setStepNumber(_history.length);
    setHistory(_history.concat([{ squares: _squares }]));
  };

  const current = histories[histories.length - 1];

  const winner = calculateWinner(current.squares);

  const jumpTo = (step) => {
    setXIsNext(step % 2 === 0);
    setStepNumber(step);
  };

  const status = () => {
    if (winner) {
      return "Winner: " + winner;
    } else {
      return "Next player: " + (xIsNext ? "X" : "O");
    }
  };

  const moves = histories.map((step, move) => {
    const desc = move ? "Go to move #" + move : "Go to game start";
    return (
      <li key={move}>
        <button onClick={() => jumpTo(move)}>{desc}</button>
      </li>
    );
  });

  return (
    <div className="game">
      <div className="game-board">
        <Board squares={current.squares} onClick={(i) => onClick(i)} />
      </div>
      <div>
        <div className="game-info">
          <div>{status()}</div>
          <ol>{moves}</ol>
        </div>
      </div>
    </div>
  );
};

function calculateWinner(squares) {
  const lines = [
    [0, 1, 2],
    [3, 4, 5],
    [6, 7, 8],
    [0, 3, 6],
    [1, 4, 7],
    [2, 5, 8],
    [0, 4, 8],
    [2, 4, 6],
  ];
  for (let i = 0; i < lines.length; i++) {
    const [a, b, c] = lines[i];
    if (squares[a] && squares[a] === squares[b] && squares[a] === squares[c]) {
      return squares[a];
    }
  }
  return null;
}

export default Games;
