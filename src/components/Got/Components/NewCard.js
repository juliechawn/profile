import React, { Component } from "react";
import "./card.css";
import { graphql } from "react-apollo";
import MutationCreateCharacter from "../GraphQL/MutationCreateCharacter";
import QueryAllCharacters from "../GraphQL/QueryAllCharacters";
import { v4 as uuid } from "uuid";
import aws from "aws-sdk";


const AWS_ACCESS_KEY_ID = `${env.AWS_ACCESS_KEY_ID}`
// const S3_BUCKET =`${process.env.S3_KEY}`
const AWS_SECRET_ACCESS_KEY = `${env.AWS_SECRET_ACCESS_KEY}`

class NewCard extends Component {
  constructor() {
    super();
    this.state = {
      error: false,
      image: "",
      name: "",
      house: "",
      actor: "n/a",
      status: "",
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
    };
    this.handleChange = this.handleChange.bind(this);
    this.handleSubmit = this.handleSubmit.bind(this);
    this.handleFile = this.handleFile.bind(this);
  }

  handleFile(e) {
    let file = e.target.files[0];
    var params = {
      Bucket: 'got-20181210143420-deployment',
      Key: file.name,
      Body: file,
      Expires: 60,
      ContentType: file.type,
      ACL: "public-read"
    };

    const s3 = new aws.S3({
      credentials: {
        accessKeyId: AWS_ACCESS_KEY_ID,
        secretAccessKey: AWS_SECRET_ACCESS_KEY
      }
    });
    s3.putObject(params, (err, signedUrl) => {
      if (signedUrl) {
        this.setState({
          image:
            "https://s3.amazonaws.com/got-20181210143420-deployment/" +
            file.name
        });
      } else {
        console.log(err)
        this.setState({
          image: "",
          error: true
        });
      }
    });
  }

  handleChange(e) {
    this.setState({ [e.target.name]: e.target.value });
  }

  handleSubmit(e) {
    e.preventDefault();
    const {
      name,
      image,
      house,
      actor,
      status,
      weapon,
      pet,
      spouse,
      spousestatus,
      age,
      birthplace,
      bestfriend,
      quote,
      nickname,
      allegiance
    } = this.state;
    this.props.onAdd({
      image,
      name,
      house,
      actor,
      status,
      weapon,
      pet,
      spouse,
      spousestatus,
      age,
      birthplace,
      bestfriend,
      quote,
      nickname,
      allegiance,
      delete: true
    });
    this.setState({
      error: false,
      image: "",
      name: "",
      house: "",
      actor: "n/a",
      status: "",
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
    });
  }

  render() {
    let error;
    if (this.state.error === true) {
      error = <div className="red">Photo did not upload. Try again!</div>;
    }
    return (
      <form className="new-card">
        <div className="new-card-inputs">
          <div className="card-fields">
            <span>PREVIEW</span>
            {error}
            <div className="Dropzone">
              <img alt="upload" className="Icon" src={this.state.image} />
              <span />
            </div>
          </div>
          <p className="card-fields">
            <label className="card-button-photo">
              CLICK TO UPLOAD IMAGE
              <input
                id="File"
                accept="image/*"
                name="image"
                type="file"
                onChange={this.handleFile}
              />
            </label>
          </p>
          <p className="card-fields">
            <span>NAME</span>
            <input
              required="required"
              name="name"
              placeholder=""
              value={this.state.name}
              type="text"
              className="card-input"
              onChange={this.handleChange}
            />
          </p>
          <p className="card-fields">
            <span>TITLE / NICKNAME</span>
            <input
              required
              placeholder=""
              value={this.state.nickname}
              name="nickname"
              className="card-input"
              onChange={this.handleChange}
            />
          </p>
          <p className="card-fields">
            <span>STATUS</span>
            <select
              required
              value={this.state.status}
              name="status"
              className="card-select-sm"
              onChange={this.handleChange}
            >
              <option hidden>STATUS</option>
              <option>ALIVE</option>
              <option>DEAD</option>
              <option>UNKNOWN</option>
              <option>N/A</option>
            </select>
          </p>
          <p className="card-fields">
            <span>HOUSE</span>
            <select
              required
              name="house"
              value={this.state.house}
              className="card-select"
              onChange={this.handleChange}
            >
              <option hidden>PICK A HOUSE</option>
              {/* <option value="Arryn">Arryn</option> */}
              {/* <option value="Baratheon-Robert">Baratheon (Robert)</option>
              <option value="Baratheon-Stannis">Baratheon (Stannis)</option>
              <option value="Baratheon-Renly">Baratheon (Renly)</option> */}
              <option value="Bolton">Bolton</option>
              {/* <option value="Brotherhood-without-Banners">
                Brotherhood Without Banners
              </option> */}
              <option value="Free-Folk">Free Folk</option>
              <option value="Frey">Frey</option>
              <option value="Greyjoy">Greyjoy</option>
              <option value="Lannister">Lannister</option>
              <option value="Martell">Martell</option>
              <option value="Nights-watch">Night's Watch</option>
              <option value="Stark">Stark</option>
              <option value="Targaryen">Targaryen</option>
              <option value="Tully">Tully</option>
              <option value="Tyrell">Tyrell</option>
              <option value="N/A">Tyrell</option>
              {/* <option value="White-walker">White Walker</option> */}
            </select>
          </p>
          <p className="card-fields">
            <span>ALLEGIANCE</span>
            <select
              required
              value={this.state.allegiance}
              name="allegiance"
              className="card-select"
              onChange={this.handleChange}
            >
              <option hidden>PICK A HOUSE</option>
              {/* <option value="Arryn">Arryn</option> */}
              {/* <option value="Baratheon-Robert">Baratheon (Robert)</option>
              <option value="Baratheon-Stannis">Baratheon (Stannis)</option>
              <option value="Baratheon-Renly">Baratheon (Renly)</option>
               */}
              {/* <option value="Brotherhood-without-Banners">
                Brotherhood Without Banners
              </option> */}
              <option value="Bolton">Bolton</option>
              <option value="Free-Folk">Free Folk</option>
              <option value="Frey">Frey</option>
              <option value="Greyjoy">Greyjoy</option>
              <option value="Lannister">Lannister</option>
              <option value="Martell">Martell</option>
              <option value="Nights-watch">Night's Watch</option>
              <option value="Stark">Stark</option>
              <option value="Targaryen">Targaryen</option>
              <option value="Tully">Tully</option>
              <option value="Tyrell">Tyrell</option>
              <option value="N/A">Tyrell</option>
              {/* <option value="White-walker">White Walker</option> */}
            </select>
          </p>
          <p className="card-fields">
            <span>BIRTHPLACE</span>
            <input
              required
              placeholder=""
              value={this.state.birthplace}
              name="birthplace"
              className="card-input"
              onChange={this.handleChange}
            />
          </p>
          <p className="card-fields">
            <span>AGE</span>
            <input
              required
              placeholder=""
              value={this.state.age}
              name="age"
              className="card-input-sm"
              onChange={this.handleChange}
            />
          </p>
          <p className="card-fields">
            <span>SPOUSE / LOVER</span>
            <input
              required
              value={this.state.spouse}
              placeholder=""
              name="spouse"
              className="card-input"
              onChange={this.handleChange}
            />
          </p>
          <p className="card-fields">
            <span>SPOUSE STATUS</span>
            <select
              required
              placeholder=""
              value={this.state.spousestatus}
              name="spousestatus"
              className="card-select-sm"
              onChange={this.handleChange}
            >
              <option hidden>STATUS</option>
              <option>A.</option>
              <option>FMR.</option>
              <option>D.</option>
            </select>
          </p>
          <p className="card-fields">
            <span>BEST FRIEND</span>
            <input
              required
              placeholder=""
              value={this.state.bestfriend}
              name="bestfriend"
              className="card-input"
              onChange={this.handleChange}
            />
          </p>
          <p className="card-fields">
            <span>PET</span>
            <input
              required
              placeholder=""
              value={this.state.pet}
              name="pet"
              className="card-input"
              onChange={this.handleChange}
            />
          </p>
          <p className="card-fields">
            <span>WEAPON</span>
            <input
              required
              placeholder=""
              value={this.state.weapon}
              name="weapon"
              className="card-input"
              onChange={this.handleChange}
            />
          </p>
          <p className="card-fields">
            <span>QUOTE</span>
            <textarea
              required
              placeholder=""
              value={this.state.quote}
              name="quote"
              className="quote-input"
              onChange={this.handleChange}
            />
          </p>
        </div>
        <div>
          <p className="card-fields">
            <button
              className="card-button"
              type="Submit"
              onClick={this.handleSubmit}
            >
              MAKE MY CARD!
            </button>
          </p>
        </div>
      </form>
    );
  }
}

export default graphql(MutationCreateCharacter, {
  props: props => ({
    onAdd: card => {
      props
        .mutate({
          update: (proxy, { data: { createCharacter } }) => {
            const query = QueryAllCharacters;
            const data = proxy.readQuery({ query });

            data.listCharacters.items = [
              ...data.listCharacters.items.filter(
                e => e.id !== createCharacter.id
              ),
              createCharacter
            ];
            proxy.writeQuery({ query, data });
          },
          variables: card,
          optimisticResponse: {
            createCharacter: { ...card, __typename: "Character", id: uuid() }
          }
        })
        .catch(err => {
          alert("complete all fields");
        });
    }
  })
})(NewCard);
