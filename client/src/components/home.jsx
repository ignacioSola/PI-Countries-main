import React from "react";
import { useEffect, useState } from "react";
import {useSelector, useDispatch} from 'react-redux';
import { getCountries, filterByName } from "../actions";
import { Link } from "react-router-dom";
import Countries from "./country";
import Search from "./search";
import Filtros from "./filtros";
import Paginado from "./paginado";
import './Home.css'

export default function Home(){
    const dispatch = useDispatch();
    const allCountries = useSelector((state) => state.countries);
    const [orden, setOrden] = useState('');
    console.log(allCountries)
    const [currentPage, setCurrentPage] = useState(1);
    const [countriesPerPage, setCountriesPerPage] = useState(10);
    const indexLastCountry = currentPage * countriesPerPage;
    const indexFirstCountry = indexLastCountry - countriesPerPage;
    const currentCountries = allCountries.slice(indexFirstCountry, indexLastCountry);

    const paginado = (page) => {
        setCurrentPage(page)
    }


    useEffect(() => {
        dispatch(getCountries());
    },[]);

    function handleOnClick(e){
        e.preventDefault();
        dispatch(getCountries())
    }

    function handleSort(e){
        e.preventDefault();
        if(e.target.value !== 'order'){
            dispatch(filterByName(e.target.value));
            setCurrentPage(1)
            setOrden(`ordenado ${e.target.value}`);
        }
    }

    return(
        <div >
            <Search/>
            <button onClick={handleOnClick} >refresh</button>
            <button>
                <Link to={'/activity'}>Create activity</Link>
            </button>
            
            <Filtros
                handleSort = {handleSort}/>
            <Paginado
                allCountries={allCountries.length}
                countriesPerPage={countriesPerPage}
                paginado={paginado} />
            <div className="container-country" >
                {currentCountries && currentCountries.map(e => {
                return <Countries
                name= {e.name}
                flag = {e.flag}
                continent = {e.continente}
                key={e.id?e.id:'nnn'}
                id={e.id}
                />
                })}
            </div>
        </div>
    )
}