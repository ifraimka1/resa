// Board.js
import React from 'react';
import { connect } from 'react-redux';
import Square from './Square';
import Reset from './Reset';
import { makeMove, resetGame } from "./actions";

const Board = ({ squares, xIsNext, winner, round, onClick, onClickReset }) => {    
    let status;
    if (winner) {
      status = "Победитель: " + winner;
    } else if (round === 10) {
      status = "Ничья";
    } else {
      status = "Следующий игрок: " + (xIsNext ? "X" : "O");
    }
  const renderSquare = (i) => (
    <Square id={i} value={squares && squares[i]} onClick={() => onClick(i)} />
  );

  return (
    <div>
      <div id="board">
        <div className="board-row">
          {renderSquare(0)}
          {renderSquare(1)}
          {renderSquare(2)}
        </div>
        <div className="board-row">
          {renderSquare(3)}
          {renderSquare(4)}
          {renderSquare(5)}
        </div>
        <div className="board-row">
          {renderSquare(6)}
          {renderSquare(7)}
          {renderSquare(8)}
        </div>
      </div>
      <div className="status">
        {status}
      </div>
      <Reset onClick={() => onClickReset()}/>
    </div>
  );
};

const mapStateToProps = (state) => ({
  squares: state && state.squares,
  xIsNext: state && state.xIsNext,
  winner: state && state.winner,
  round: state && state.round,
});

const mapDispatchToProps = {
  onClick: (index) => makeMove(index),
  onClickReset: () => resetGame()
};

export default connect(mapStateToProps, mapDispatchToProps)(Board);