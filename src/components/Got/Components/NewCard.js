import React, { Component } from "react";
import "./card.css";

class NewCard extends Component {
  getHouseF() {
    switch (this.props.house) {
      case "Stark":
        return "stark-f";
      case "Targaryen":
        return "targaryen-f";
      case "Lannister":
        return "lannister-f";
      default:
    }
  }

  getHouseB() {
    switch (this.props.house) {
      case "Stark":
        return "stark-b";
      case "Targaryen":
        return "targaryen-b";
      case "Lannister":
        return "lannister-b";
      default:
    }
  }
  render() {
    return (
      <div>
        <form className="form">
        </form>
      </div>
    );
  }
}

export default NewCard;
