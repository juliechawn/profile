import React from 'react';
import Synonym from './Synonym';
import trex from '../images/trex.gif';

import axios from 'axios';
const API_WEB = process.env.REACT_APP_AWS_WEB

class Text extends React.Component {
  constructor() {
    super();

    this.state = {
      word: '',
      error: false,
      intro: true
    };

    this.onChange = this.onChange.bind(this);
    this.handleSubmit = this.handleSubmit.bind(this);
  }

  onChange(event) {
    this.setState({
      [event.target.name]: event.target.value,
    });
  }

  handleSubmit(event) {
    event.preventDefault();
    const url = `https://words.bighugelabs.com/api/2/${API_WEB}/` + this.state.word + "/json";

    axios.get(url)
      .then((response) => {
        let adj = []
        let noun = []
        let verb = []
        let data = response.data;
        if (data.adjective) {
          adj = (data.adjective.syn).slice(0, 5);
          adj = (data.adjective.sim).slice(0, 4);
        }
        if (data.noun) {
          noun = (data.noun.syn).slice(0, 5);
        }
        if (data.verb) {
          verb = (data.verb.syn).slice(0, 5);
        }
        var synonyms = adj.concat(noun, verb).join(', ');
        this.setState({ synonyms, error: false, intro: false, word: '', })
      })
      .catch(error => {
        this.setState({ error: true, intro: false, synonyms: '', word: '', });
      })
  }

  render() {
    return (
      <div className="containter" id="container">
        <div id="body">
          <div className="row no-gutters">
            <div className="col">
              <Synonym
                synonyms={this.state.synonyms}
                error={this.state.error}
                intro={this.state.intro} />
            </div>
          </div>
          <div className="row no-gutters">
            <div className="col">
              <img id="trex" src={trex} alt="t-rex" />
            </div>
          </div>
        </div>
        <div id="trex-footer">
          <div className="row no-gutters">
            <div className="col-12" id="input">
              <form onSubmit={this.handleSubmit}>
                <div className="input-group" >
                  <div className="input-group-prepend">
                    <span className="input-group-text" id="inputGroup-sizing-default">Enter Word</span>
                  </div>
                  <input
                    placeholder="type + enter"
                    onChange={this.onChange}
                    name="word"
                    value={this.state.word}
                    type="text"
                    className="form-control"
                    aria-label="Default"
                    aria-describedby="inputGroup-sizing-default" />
                </div>
              </form>
            </div>
          </div>
        </div>
      </div>

    );
  }
}

export default Text;
