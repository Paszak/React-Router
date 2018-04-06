import { GET_COUNTRIES } from '../actions/actions-countries';
import countriesData from '../data/countries.json';

const initialState = {
    countries: countriesData
};

const countriesReducer = function (state = initialState, action) {
    switch (action.type) {
        case GET_COUNTRIES:
            return Object.assign({}, state, {countries: state.countries})
        default:
            return state; // Czy tak może być? bo w consoli wyskakiwało że brak deafult case'a
    }
};

export default countriesReducer;

