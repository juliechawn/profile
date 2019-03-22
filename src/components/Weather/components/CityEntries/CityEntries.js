import axios from 'axios';

import React from 'react';

import {
  updateCity,
  searchCity,
  searchImg
} from './cityActions';

export default class cityEntries extends React.Component {
  constructor(props) {
    super(props)

    this.handleCityInput = this.handleCityInput.bind(this);
    this.handleCitySearch = this.handleCitySearch.bind(this);
    this.handleButton = this.handleButton.bind(this);
  }

  handleCityInput(event) {
    const { dispatch } = this.props;
    const { value } = event.target
    dispatch(updateCity(value));
  }

  handleCitySearch(event) {
    event.preventDefault();
    const { dispatch, searchName } = this.props;
    dispatch(searchCity(searchName))
    dispatch(searchImg(searchName));
  }

  handleButton(event) {
    event.preventDefault();
    const { dispatch } = this.props
    const searchName = event.target.value
    dispatch(searchCity(searchName))
    dispatch(searchImg(searchName))
  }

  componentDidMount() {
    const { dispatch } = this.props
    axios.get('https://api.openweathermap.org/data/2.5/weather?q=philadelphia&units=imperial&appid=ea12361fcb12b97a8d49cccba2fb3e71')
    .then((res) => {
      let searchName = res.data.name
      dispatch(searchCity(searchName))
      dispatch(searchImg(searchName))
    })
  }

  render() {
    const { searchName, error } = this.props;
    return (
      <form onSubmit={this.handleCitySearch}>
        <div className='row'>
          <div className='btn-group' role='group'>
            <button type='button' className='btn btn-primary' value={'Philadelphia'} onClick={this.handleButton}>Philadelphia</button>
            <button type='button' className='btn btn-primary' value={'Chicago'} onClick={this.handleButton}>Chicago</button>
            <button type='button' className='btn btn-primary' value={'Los Angeles'} onClick={this.handleButton}>Los Angeles</button>
            <button type='button' className='btn btn-primary' value={'London'} onClick={this.handleButton}>London</button>
            <button type='button' className='btn btn-primary' value={'Tokyo'} onClick={this.handleButton}>Tokyo</button>
          </div>

          <div className="input-group mb-3">

            <input type="text"
              className="form-control"
              id='city-input'
              value={searchName}
              onChange={this.handleCityInput}
              placeholder="Enter city name"
            />
            <div className="input-group-append">
              <button className="btn btn-outline-primary"
                type="button"
                onClick={this.handleCitySearch}
              >Go!</button>
            </div>
          </div>
        </div>
        <div className='row'>
          <div className='text-danger'>{error}</div>
        </div>
      </form>
    );
  }
}