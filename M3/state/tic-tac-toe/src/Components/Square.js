import { Component } from "react";
import "./Square.css";

function Square(props) {
  return (
    <div onClick={props.handleClick} className="Square">
      {props.value}
    </div>
  );
}

export default Square;
