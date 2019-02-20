import React from 'react';
import './Weather.css';
import axios from 'axios';

import CityEntries from './components/CityEntries';
import CityInfo from './components/CityInfo';
import SearchHistory from './components/SearchHistory';

export default class Weather extends React.Component {

  componentDidMount() {
    const { dispatch } = this.props
        axios.get('https://api.unsplash.com/search/photos/?page=1&per_page=10&orientation=landscape&query=philadelphia&client_id=5b6c80594c0633a69ead9499a7bae3248a6fb73406a95ad97a3f20b6f457579f')
    .then((res) => {
      let backgroundImg = res.data.results[0].links.html
      // dispatch(searchImg(img))
    })
  }
  render() {
    const { img } = this.props;
    return (
      <div style={{backgroundImage:"url('https://images.unsplash.com/photo-1526590916886-c918f193794d?ixlib=rb-1.2.1&q=80&fm=jpg&crop=entropy&cs=tinysrgb&w=1080&fit=max&ixid=eyJhcHBfaWQiOjM3Mzg5fQ')"}} className='container'>
        <div className='col-12'>
          <CityEntries />
        </div>
        <div className='row'>
          <div className='col-7'>
            <CityInfo />
          </div>
          <div className='col-5'>
            <SearchHistory />
          </div>
        </div>
      </div>
    );
  }
}
