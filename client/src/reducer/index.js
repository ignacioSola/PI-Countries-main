import {GET_COUNTRIES, GET_COUNTRIES_BY_NAME, DETAIL, FILTER_BY_CONTINENT, FILTER_BY_NAME, CREATE_ACTIVITY, GET_ACTIVITIES, FILTER_BY_ACTIVITY} from '../actions';

const initialState = {
    countries: [],
    countries2: [],
    detalle: {},
    activities: []
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
        case CREATE_ACTIVITY: 
            return {
                ...state
            }
           
        case  GET_ACTIVITIES:    
            return{
                ...state,
                activities: actions.payload
            }

        case FILTER_BY_ACTIVITY: 
            const todos = state.countries2;
            const hasActivity = todos.filter( e => e.Activities.length != 0)
            const nuevoArr = hasActivity.filter(e => {
                for(let i=0; i<e.Activities.length; i++){
                    if(e.Activities[i].name == actions.payload) return true
                }
            })
            // console.log(hasActivity)
            // const filtro = []
            // for(var i = 0; i<hasActivity.length; i++){
            //     console.log(hasActivity[i])
            //     for(var j=0; j<hasActivity[i].Activities.length;j++){
            //         console.log(hasActivity[i][j])
            //         // if(hasActivity[i][j].name === actions.payload){
            //         //     filtro.push(hasActivity[i][j])
            //         // }
            //     }
            // }
            // console.log(filtro)
            return{
                ...state,
                countries: nuevoArr
            }
             

        default : return state;
    }
}

export default rootReducer;