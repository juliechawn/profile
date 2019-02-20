import { connect } from 'react-redux';
import CityInfo from './CityInfo';

function mapStoreToProps(store) {
  return {
    cityName: store.city.name,
    cityLat: store.city.lat,
    cityLong: store.city.long,
    cityTemp: store.city.temp,
    cityHumidity: store.city.humidity,
    cityPressure: store.city.pressure,
    cityHightemp: store.city.hightemp,
    cityLowtemp: store.city.lowtemp,
    cityWindspeed: store.city.windspeed,
    cityIcon: store.city.icon
  };
}

export default connect(mapStoreToProps)(CityInfo);

