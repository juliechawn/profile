import React, { Component } from "react";
import "./card.css";

class NewCard extends Component {
  static defaultProps = {
    createCard: () => null,
}
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
      age: 0,
      birthplace: "",
      bestfriend: "",
      quote: "",
      nickname: "",
      allegiance: "",
      delete: true
    }
  };

  handleChange(field, { target: { value } }) {
    const { card } = this.state;

    card[field] = value;

    this.setState({ card });
}

  handleSave = async (e) => {
    e.stopPropagation();
    e.preventDefault();

    const { createCard } = this.props;
    const { card } = this.state;

    await createCard({ ...card });
}

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
      <div>
        {/* <form className="form">
          <table className="form-table">
            <thead>
              <tr>
                <th>NAME</th>
                <th>TITLE / NICKNAME</th>
                <th>HOUSE</th>
                <th>ALLEGIANCE</th>
              </tr>
            </thead>
            <tbody>
              <tr>
                <td>
                  <input className="card-input" value={card.name} onChange={this.handleChange.bind(this, 'name')}/>
                </td>
                <td>
                  <input className="card-input" value={card.nickname} onChange={this.handleChange.bind(this, 'nickname')}/>
                </td>
                <td>
                  <select className="card-select" value={card.house} onChange={this.handleChange.bind(this, 'house')}>
                    <option value="Greyjoy">Greyjoy</option>
                    <option value="Lannister">Lannister</option>
                    <option value="Stark">Stark</option>
                    <option value="Targaryen">Targaryen</option>
                  </select>
                </td>
                <td>
                <select className="card-select" value={card.allegiance} onChange={this.handleChange.bind(this, 'allegiance')}>
                    <option>Greyjoy</option>
                    <option>Lannister</option>
                    <option>Stark</option>
                    <option>Targaryen</option>
                  </select>
                </td>
              </tr>
            </tbody>
            <thead>
              <tr>
                <th>BIRTHPLACE</th>
                <th>AGE</th>
              </tr>
            </thead>
            <tbody>
              <tr> 
                <td>
                  <input className="card-input" value={card.birthplace} onChange={this.handleChange.bind(this, 'birthplace')}/>
                </td>
                <td>
                  <input className="card-input" value={card.age} onChange={this.handleChange.bind(this, 'age')}/>
                </td>
              </tr>
            </tbody>
            <thead>
              <tr>
                <th>SPOUSE</th>
                <th>BEST FRIEND</th>
                <th>PET</th>
                <th>WEAPON</th>
                <th>QUOTE</th>
              </tr>
            </thead>
            <tbody>
              <tr>
                <td>
               
                  <span>
                    <input className="card-input" value={card.spouse} onChange={this.handleChange.bind(this, 'spouse')}/>
                  </span>
                </td>
                <td>
                  <input className="card-input" value={card.bestfriend} onChange={this.handleChange.bind(this, 'bestfriend')} />
                </td>
                <td>
                  <input className="card-input" value={card.pet} onChange={this.handleChange.bind(this, 'pet')}/>
                </td>
                <td>
                  <input className="card-input" value={card.weapon} onChange={this.handleChange.bind(this, 'weapon')}/>
                </td>
                <td>
                  <input className="quote-input " value={card.quote} onChange={this.handleChange.bind(this, 'quote')}/>
                </td>
              </tr>
            </tbody>
          </table>
          <button onClick={this.handleSave}>Save!</button>
        </form> */}
      </div>
    );
  }
}

export default NewCard;
