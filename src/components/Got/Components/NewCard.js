import React, { Component } from "react";
import "./card.css";

class NewCard extends Component {
  static defaultProps = {
    createCard: () => null
  };
  state = {
    card: {
      image: "",
      name: "",
      house: "",
      actor: "",
      status: "alive",
      weapon: "",
      pet: "",
      spouse: "",
      spousestatus: "",
      age: "",
      birthplace: "",
      bestfriend: "",
      quote: "",
      nickname: "",
      allegiance: "",
      delete: true
    }
  };

  handleChange(
    field,
    {
      target: { value }
    }
  ) {
    const { card } = this.state;

    card[field] = value;

    this.setState({ card });
  }

  handleSave = async e => {
    e.stopPropagation();
    e.preventDefault();

    const { createCard } = this.props;
    const { card } = this.state;

    await createCard({ ...card });
  };

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
    const { card } = this.state;
    return (
      <div className="new-card">
        {/* <p className="card-fields">
          <span>NAME</span>
          <input
            className="card-input"
            placeholder="Oprah Winfrey"
            value={card.name}
            onChange={this.handleChange.bind(this, "name")}
          />
        </p>
        <p className="card-fields"> 
          <span >TITLE / NICKNAME</span>
          <input
            placeholder="Lady O"
            className="card-input"
            value={card.nickname}
            onChange={this.handleChange.bind(this, "nickname")}
          />
        </p>
        <p className="card-fields">
          <span>HOUSE</span>
          <select
            className="card-select"
            value={card.house}
            onChange={this.handleChange.bind(this, "house")}
          >
          <option hidden>PICK A HOUSE</option>
            <option value="Greyjoy">Greyjoy</option>
            <option value="Lannister">Lannister</option>
            <option value="Stark">Stark</option>
            <option value="Targaryen">Targaryen</option>
          </select>
        </p>
        <p className="card-fields">
          <span>ALLEGIANCE</span>
          <select className="card-select" value={card.allegiance} onChange={this.handleChange.bind(this, 'allegiance')}>
          <option hidden>PICK A HOUSE</option>
                    <option>Greyjoy</option>
                    <option>Lannister</option>
                    <option>Stark</option>
                    <option>Targaryen</option>
                  </select>
        </p>
        <p className="card-fields">
          <span>BIRTHPLACE</span>
          <input className="card-input" placeholder="Kosciusko, MS" value={card.birthplace} onChange={this.handleChange.bind(this, 'birthplace')}/>
        </p>
        <p className="card-fields">
          <span>AGE</span>
          <input placeholder="65" type="number" className="card-input" value={card.age} onChange={this.handleChange.bind(this, 'age')}/>
        </p>
        <p className="card-fields">
          <span>SPOUSE / LOVER</span>
          <input className="card-input" placeholder="Stedman Graham" value={card.spouse} onChange={this.handleChange.bind(this, 'spouse')}/>
        </p>
        <p  className="card-fields">
          <span>BEST FRIEND</span>
          <input className="card-input" placeholder="Gayle King" value={card.bestfriend} onChange={this.handleChange.bind(this, 'bestfriend')} />
        </p>
        <p className="card-fields">
          <span>PET</span>
          <input className="card-input" placeholder="Luke and Layla" value={card.pet} onChange={this.handleChange.bind(this, 'pet')}/>
        </p>
        <p className="card-fields">
          <span>WEAPON</span>
          <input className="card-input" placeholder="her words" value={card.weapon} onChange={this.handleChange.bind(this, 'weapon')}/>
        </p>
        <p className="card-fields">
          <span>QUOTE</span>
          <textarea className="quote-input" placeholder="Turn your wounds into wisdom." value={card.quote} onChange={this.handleChange.bind(this, 'quote')}/>
        </p> */}
      </div>
    );
  }
}

export default NewCard;
