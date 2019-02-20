import axios from 'axios';

export function updateCity(name) {
    return {
        type: 'UPDATE_CITY',
        payload: { name }
    };
}

export function searchCity(name) {
    const url = `https://api.openweathermap.org/data/2.5/weather?q=${name}&units=imperial&appid=ea12361fcb12b97a8d49cccba2fb3e71`;
    return {
        type: 'SEARCH_CITY',
        payload:
            axios.get(url) 
                .then((res) => {
                    let cityData = res.data;
                    return {cityData}
                })       
    };
}
export function searchImg(name) {
    const url = `https://api.unsplash.com/search/photos/?page=1&per_page=10&orientation=landscape&query=${name}&client_id=5b6c80594c0633a69ead9499a7bae3248a6fb73406a95ad97a3f20b6f457579f`;
    return {
        type: 'SEARCH_IMG',
        payload:
            axios.get(url) 
                .then((res) => {
                    let backgroundImg = res.data.results[0].links.html
                    return {backgroundImg}
                })       
    };
}



