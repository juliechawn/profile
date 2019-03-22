import { connect } from 'react-redux';
import CityEntries from './CityEntries';

function mapStoreToProps(store) {
    return {
        searchName: store.city.searchName,
        cityData: store.city.cityData,
        history: store.city.history,
        error: store.city.error,
        errorName: store.city.errorName,
        backgroundImg: store.city.backgroundImg     
    };
};

export default connect(mapStoreToProps)(CityEntries);