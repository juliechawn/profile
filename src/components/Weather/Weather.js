import React from "react";
import "./Weather.css";

import CityEntries from "./components/CityEntries";
import CityInfo from "./components/CityInfo";
import SearchHistory from "./components/SearchHistory";
import Background from "./components/Background";

export default class Weather extends React.Component {
  render() {
    return (
     <Background />
    );
  }
}
