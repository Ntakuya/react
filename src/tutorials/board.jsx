import React from "react";
import Square from "./square";

const Board = ({ squares, onClick }) => {
  return (
    <div>
      <div>
        <div className="board-row">
          <Square onClick={() => onClick(0)} value={squares[0]} />
          <Square onClick={() => onClick(1)} value={squares[1]} />
          <Square onClick={() => onClick(2)} value={squares[2]} />
        </div>
        <div className="board-row">
          <Square onClick={() => onClick(3)} value={squares[3]} />
          <Square onClick={() => onClick(4)} value={squares[4]} />
          <Square onClick={() => onClick(5)} value={squares[5]} />
        </div>
        <div className="board-row">
          <Square onClick={() => onClick(6)} value={squares[6]} />
          <Square onClick={() => onClick(7)} value={squares[7]} />
          <Square onClick={() => onClick(8)} value={squares[8]} />
        </div>
      </div>
    </div>
  );
};

export default Board;
