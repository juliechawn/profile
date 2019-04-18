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
          {/* <div className="form-row">
            <label for="validationCustom01">NAME</label>
            <div className="col-md-4">
              <input
                type="text"
                class="form-control"
                placeholder="Jon Snow"
              />
            </div>
          </div> */}
        </form>
      </div>
    );
  }
}

export default NewCard;
