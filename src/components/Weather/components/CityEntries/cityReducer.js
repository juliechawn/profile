const defaultState = {
    searchName: '',
    name: 'Philadelphia',
    lat: '0',
    long: '0',
    temp: '0',
    humidity: '0',
    pressure: '0',
    hightemp: '0',
    lowtemp: '0',
    windspeed: '',
    icon: '01d',
    history: [],
    error: '',
    errorName: '',
    backgroundImg: '',
    errorImg: ''
}

export default function CityReducer(state = defaultState, action) {
    const { type, payload } = action;

    switch (type) {
        case 'UPDATE_CITY': {
            return {
                ...state,
                searchName: payload.name
            };
        }

        case 'SEARCH_CITY_FULFILLED': {
            const { cityData } = action.payload;
            return {
                ...state,
                searchName: '',
                name: cityData.name,
                lat: cityData.coord.lat,
                long: cityData.coord.lon,
                temp: cityData.main.temp,
                humidity: cityData.main.humidity,
                pressure: cityData.main.pressure,
                lowtemp: cityData.main.temp_min,
                hightemp: cityData.main.temp_max,
                windspeed: cityData.wind.speed,
                icon: cityData.weather[0].icon,
                history: [ ...state.history, {name: cityData.name}],
                error: '',
                errorName: ''
            };
        }

        case 'SEARCH_CITY_PENDING': {
            return {
                ...state,
                searchName: '',        
            }
        }
        case 'SEARCH_CITY_REJECTED': {
            return {
                ...state,
                searchName: '',
                errorName: '',
                error: 'Hmm, can not find weather for that city'
            }
        }
        case 'SEARCH_IMG_FULFILLED': {
            const { cityImg } = action.payload;
            return {
                ...state,
                backgroundImg: cityImg
            };
        }

        case 'SEARCH_IMG_PENDING': {
            return {
                ...state,
                backgroundImg: ''      
            }
        }
        case 'SEARCH_IMG_REJECTED': {
            return {
                ...state,
                backgroundImg: 'https://images.unsplash.com/photo-1526590916886-c918f193794d?ixlib=rb-1.2.1&q=80&fm=jpg&crop=entropy&cs=tinysrgb&w=1080&fit=max&ixid=eyJhcHBfaWQiOjM3Mzg5fQ',
                errorImg: ''
            }
        }

        default: {
            return state;
        }
    }
}
