import {GET_COUNTRIES, GET_COUNTRIES_BY_NAME, DETAIL, FILTER_BY_CONTINENT, FILTER_BY_NAME} from '../actions';

const initialState = {
    countries: [],
    countries2: [],
    detalle: {}
}

function rootReducer(state=initialState, actions ){
    switch(actions.type){
        case GET_COUNTRIES: 
            return{
                ...state,
                countries: actions.payload,
                countries2: actions.payload
            }
        case GET_COUNTRIES_BY_NAME:
            return{
                ...state,
                countries: actions.payload
            }
        case DETAIL:
            return{
                ...state,
                detalle: actions.payload   
            } 
        case FILTER_BY_CONTINENT:
            const allCountries = state.countries2;
            const filter = actions.payload === 'Continents' ? allCountries : allCountries.filter(e => e.continente === actions.payload);
            return{
                ...state,
                countries: filter
            }
        case FILTER_BY_NAME:
            const allCountries2 = state.countries;
            const filter2 = actions.payload === 'asc' ? allCountries2.sort((a,b) => {
                if(a.name > b.name){
                    return 1
                }
                if(a.name < b.name){
                    return -1
                }
                return 0
            }) :
            allCountries2.sort((a,b) => {
                if(a.name > b.name){
                    return -1
                }
                if(a.name < b.name){
                    return 1
                }
                return 0
            })
            return{
                ...state,
                countries: filter2
            }

        default : return state;
    }
}

export default rootReducer;