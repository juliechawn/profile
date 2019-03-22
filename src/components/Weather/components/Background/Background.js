import React from "react";
import "./background.css"

import CityEntries from "../CityEntries";
import CityInfo from "../CityInfo";
import SearchHistory from "../SearchHistory";

export default class Background extends React.Component {
  render() {
    return (
      <div className="container"  style={{ backgroundImage: `url('${this.props.backgroundImg}')` }}>      
        <div className="col-12">
          <CityEntries />
        </div>
        <div className="row">
          <div className="col-7">
            <CityInfo />
          </div>
          <div className="col-5">
            <SearchHistory />
          </div>
        </div>
      </div>
    );
  }
}
