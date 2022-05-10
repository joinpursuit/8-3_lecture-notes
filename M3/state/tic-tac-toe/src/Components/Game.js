import { Component } from "react";
import Square from "./Square";
import "./Game.css";

class Game extends Component {
  constructor() {
    super();
    this.state = {
      board: ["X", null, null, null, "O", "O", null, null, "X"],
      xIsNext: true,
    };
  }

  // Step one: write a method that can update this.state.board
  xmove = (squareNum) => {
    console.log("xmove called on square number", squareNum);

    // DON'T DO THIS, THIS IS AN ANTI-PATTERN!
    // this.state.board[squareNum] = "X";

    // INSTEAD, DO THIS:
    const board = [...this.state.board]; // this.state.board and board are separate values
    board[squareNum] = "X";
    // When we call setState, we'll pass it the updated value of our state object!
    this.setState({ board });
  };

  render() {
    const squares = this.state.board.map((val, ind) => (
      <Square key={ind} value={val} handleClick={() => this.xmove(ind)} />
    ));

    return (
      <div className="tic-tac-toe-game">
        <h1>Tic Tac Toe</h1>
        <div className="Board">{squares}</div>
      </div>
    );
  }
}

export default Game;
