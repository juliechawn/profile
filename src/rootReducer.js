import { combineReducers } from 'redux';
import cityReducer from './components/Weather/components/CityEntries/cityReducer';

const rootReducer = combineReducers({
    city: cityReducer
});

export default rootReducer;
