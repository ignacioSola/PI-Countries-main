import axios from 'axios';

export const GET_COUNTRIES = 'GetCountries';
export const GET_COUNTRIES_BY_NAME = 'GetCountryByName';
export const DETAIL = 'Detail';
export const FILTER_BY_CONTINENT = 'FilterByContinent';
export const FILTER_BY_NAME = 'FilterByName';

 
export function getCountries(){
   return function(dispatch){
       return axios.get('http://localhost:3001/countries')
       .then(res =>{
        dispatch({
            type: GET_COUNTRIES,
            payload: res.data});
    } )
   }
}

export function getCountryByName(name){
    return function(dispatch){
        return axios.get('http://localhost:3001/countries?name='+name)
        .then(res =>{
            dispatch({
                type:GET_COUNTRIES_BY_NAME,
                payload: res.data
            });
        })
    }
}

export function detail(id){
    console.log(id)
    return function(dispatch){
        return axios.get(`http://localhost:3001/countries/${id}`)
        .then(res => {
            console.log(res.data)
            dispatch({
                type:DETAIL,
                payload: res.data
            })
        })
    }
}

export function filterByContinent(payload){
    return{
        type:FILTER_BY_CONTINENT,
        payload
    }
}

export function filterByName(payload){
    return{
        type:FILTER_BY_NAME,
        payload
    }
}